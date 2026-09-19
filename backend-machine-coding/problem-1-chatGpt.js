// * Problem 1 — Paginated + Filterable Users API

/**
 Imagine you're building an admin dashboard.

You have a MongoDB users collection containing:

{
    _id,
    name,
    email,
    age,
    role,
    status,
    createdAt
}

You need to build:

GET /api/users

The API should support:

Pagination
Search by name
Filtering by role
Filtering by status
Sorting
Proper error handling

Example request:

GET /api/users?page=2&limit=20&search=ankur&role=admin&status=active&sortBy=createdAt&order=desc

The response should contain:

users
current page
page size
total users matching the filters
total pages

Backend thinking :-

What happens with invalid page/limit?
What if limit=100000?
What fields are allowed for sorting?
How would you prevent inefficient queries?
Which indexes would you create?
What happens when the collection has millions of users?
Would you use skip/limit forever?
How would you improve it later?
 */

const  getUsers = async(req,res) =>{
    try {
        const {search,role,status,sortBy,order} = req.query;

        const page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 10;
        if(!Number.isInteger(page) || !Number.isInteger(limit) || page<0 || limit <0){
            return res.status(400).json({message:'Page or Limit can not be float or negative'})
        }
        limit = limit > 50 ? 50: limit;

        const direction = order === 'asc'?1:-1;
        const sortObject = {[sortBy??'createdAt']:direction}
        
        const skip = (page-1)*limit;

        const filterObject = {};
        if(search){
            filterObject.name = {$regex:search,$options:'i'};
        }
        if(role){
            filterObject.role = role;
        }
        if(status){
            filterObject.status = status;
        }

        const users = await User.find(filterObject).sort(sortObject).skip(skip).limit(limit);
        const totalUsers = await User.countDocuments(filterObject);
        const totalPages = Math.ceil(totalUsers/limit);
        return res.status(200).json({message:'User Found Successfully',data:{users,totalUsers,totalPages,currentPage:page,pageSize:limit}})
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error',error:error.message})
    }
}

/**
    Follow up questions in above problem :-

    Follow-up 1 — MongoDB Indexing
Your API works fine with 10,000 users. What happens with 10 million? Which indexes would you create for:

role
status
name
createdAt
combinations of these filters + sorting

Follow-up 2 — Pagination at Scale
You're currently using:

skip() + limit()

What happens when someone requests page 100000? Why can this become expensive, and what is cursor-based pagination?

Follow-up 3 — Search Optimization
You're using $regex. When does regex prevent efficient index usage? How would you design search if the application needed fast searching across millions of users?

Follow-up 4 — Query Optimization
An interviewer tells you:

"This API has suddenly become slow in production. How would you investigate what's happening?"

We'll discuss explain(), indexes, query execution, document scanning, etc.

Follow-up 5 — API Architecture
Your current code puts everything inside the controller. At 4 YOE, an interviewer may ask:

"Would you keep all this logic in the controller?"

We'll discuss controller → service → repository/data-access responsibilities.

Follow-up 6 — Advanced Pagination Metadata
Do we really need totalUsers and totalPages on every request? What is the cost of countDocuments() and when might you avoid it?

Follow-up 7 — Search + Index Design
Suppose users can search by:

name
email
name OR email

How would you design the MongoDB query and indexes?

Follow-up 8 — Security / Abuse
What could a malicious client do with this endpoint, and what protections would you add?
 */


/** 
 Follow-up 1 — MongoDB Indexing
Your API works fine with 10,000 users. What happens with 10 million? Which indexes would you create for:

role
status
name
createdAt
combinations of these filters + sorting
 * */ 

/**
 Solution :- 
 my first option would be to create indexing for the most frequent queries when my colleciton becomes 10 million/100 million
. like here we have combination of fields so here i would choose compound indexing following ESR (Equality,Sorting,Range)rule. 
 db.users.createIndex({role:1,status:1,createdAt:-1});
 db.users.createIndex({name:"text"}) // text based indexing for searching. 
 */

 /**
Follow-up 2 — Pagination at Scale
You're currently using:

skip() + limit()

What happens when someone requests page 100000? Why can this become expensive, and what is cursor-based pagination?
  */

/**
 * Solution :-
 
 * We have 100 million users and this request:

GET /users?page=100000&limit=20&sortBy=createdAt&order=desc

1. Why is skip() expensive for huge page numbers?

Your normal pagination is conceptually:

"Give me 20 records, but first skip the previous 1,999,980 records."

Because:

100,000 × 20 = 2,000,000

So MongoDB has to move past roughly 2 million matching/sorted entries before it can return those 20.

Even if you have a good index on createdAt, the index can help MongoDB find and maintain the correct ordering, but skip(2,000,000) still means traversing past a huge number of index entries.

So:

Page 1 → skip 0 → very fast
Page 100 → skip 1,980 → still fine
Page 10,000 → skip 199,980 → getting expensive
Page 100,000 → skip 1,999,980 → potentially very expensive

That's why offset pagination doesn't scale well for deep pages.

2. What is cursor-based pagination?

Instead of telling the database:

"Go to page 100,000."

we tell it:

"Give me the next 20 users after this particular user."

Imagine the first page:

Page 1

User A   createdAt = 10:00
User B   createdAt = 09:59
User C   createdAt = 09:58
...
User T   createdAt = 09:41

The last user on this page becomes our cursor.

We send something like:

cursor = 09:41

Then the next request essentially says:

"Give me the next 20 users whose createdAt comes after this boundary in my pagination direction."

For descending order, that means:

createdAt < 09:41

MongoDB can use the index to jump directly to that position instead of walking through millions of previous records.

So the pattern becomes:

Page 1
   ↓
last user's position = cursor
   ↓
Page 2
   ↓
last user's position = new cursor
   ↓
Page 3
   ↓
...

The database isn't thinking:

skip 2 million
then give me 20

It's thinking:

start from this position
give me the next 20

That's the fundamental advantage.

3. What should we use as the cursor?

For:

sort = createdAt DESC

the obvious cursor is the createdAt of the last item from the previous page.

For example:

Last user on page 1:
createdAt = 2026-09-07 10:30:15

Then the next page starts after that timestamp.

But there's an important problem.

What if two users have exactly the same createdAt?

For example:

User A → 10:30:15
User B → 10:30:15
User C → 10:30:14

If createdAt alone is our cursor, we can get ambiguous pagination.

We therefore usually use a unique tie-breaker.

A common approach is:

createdAt + _id

So the cursor represents something like:

{
    createdAt: 10:30:15,
    _id: "..."
}

Conceptually, our ordering becomes:

createdAt DESC
_id       DESC

Now every document has a unique position in the ordering.

If an interviewer asks:-

Q) "How would you handle pagination for 100 million documents?"

A strong answer would be:-

"I would avoid deep offset pagination using skip() because the database still has to traverse the skipped records, 
making large offsets increasingly expensive. For large datasets I would prefer cursor-based pagination. 
The cursor represents the position of the last item from the previous page, typically using the sort field such as createdAt,
 along with a unique tie-breaker like _id to handle duplicate timestamps. With an appropriate compound index, the database can 
 efficiently seek from that position and fetch the next page."
 */

 /**
Follow-up 3 — Search Optimization
You're using $regex. When does regex prevent efficient index usage? How would you design search if the application needed fast searching across millions of users?
  */

/**
 Solution :-

 name:{$regex: search, $options: 'i'} will be slow because there are 100M documents. this is correct and i thought i would create
 a text based indexing here like :-
 db.users.createIndex({name:'text'});
 but this will not work. because yha pe aise search karna hai :-

 for example search = 'ankur';

 so iss tarah se search karna hai yha pe searching word to ek word ke andar hi dhundna hai. kind of like a substring.

 "Ankur"
"ANKUR"
"Rahul Ankur Sharma"
"ankur123"

balki search indexing to ek pure word ko ek pure sentence ke andar hi dhund pata hai for e.g :-

"Rahul Ankur Sharma" // yha pe ankur dhund lega text based indexing.

name: "RahulAnkurSharma" // yha pe nhi dhund payega text based index.

ispar aur padhna padega...nhi samjh aa rha kaise karenge isko. so i will do it later.
 */

/**
 Follow-up 4 — Query Optimization
An interviewer tells you:

"This API has suddenly become slow in production. How would you investigate what's happening?"

We'll discuss explain(), indexes, query execution, document scanning, etc.
 */

/**
 Solution :-

I'd first look at:

API response latency
database query latency
error rate
CPU/memory
MongoDB performance
whether traffic suddenly increased
whether the query/data changed

explain() :- Show me how you actually executed this query.how much time it took. whether it executed COLLSCAN or IXSCAN under the hood.

COLLSCAN means:

Collection Scan

In simple words:

MongoDB is going through the collection looking for matching documents.

IXSCAN means:

Index Scan

Suppose you create:

db.users.createIndex({ role: 1 })

MongoDB doesn't necessarily need to inspect all 100 million documents.

It can use the index to locate the relevant entries.

Documents examined vs documents returned :-

Suppose you execute:

Find all active users

and MongoDB returns:

20 users

But internally MongoDB had to examine:

5,000,000 documents

That's a problem.

Query execution time :- suppose query used to take 5ms that's fantastic but later suppose it started taking 500ms then there is some issue.

Whenever a MongoDB query becomes slow, ask:-

1. What query are we running?
              ↓
2. How is MongoDB executing it?
              ↓
3. COLLSCAN or IXSCAN?
              ↓
4. How many documents/index entries
   are being examined?
              ↓
5. How many are actually returned?
              ↓
6. How long did execution take?
              ↓
7. Is the index appropriate?
 */

/**
Follow-up 6 — Advanced Pagination Metadata
Do we really need totalUsers and totalPages on every request? What is the cost of countDocuments() and when might you avoid it?
 */

/**
 Follow-up 8 — Security / Abuse
What could a malicious client do with this endpoint, and what protections would you add?
 */

/**
 * Solution :-
 * 
 "Since this is a user-listing endpoint, I'd consider both abuse and data-security risks. A malicious client could flood the
  endpoint with requests, request very large limits, perform expensive searches or deep pagination, and potentially access data
they aren't authorized to see. I'd add authentication and role-based authorization where required, strict validation and
 allowlists for query parameters, a maximum page size, rate limiting—preferably distributed using Redis for multiple API
instances—and appropriate MongoDB indexes. For large datasets I'd avoid deep offset pagination and use cursor pagination.
I'd also restrict the fields returned so sensitive database fields aren't exposed, avoid exposing internal errors, and monitor
the endpoint for unusual traffic or expensive queries."

Authentication/Authorization → Rate limiting → Input validation → Query abuse protection → Data exposure protection → Monitoring
 */
