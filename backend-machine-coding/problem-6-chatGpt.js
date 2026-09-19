/**
 ## 6. Search API
Build a search endpoint supporting text search, filters, sorting, pagination, and efficient MongoDB querying.
 */


// 1) userRouter.get('/products/search');

const searchProducts = async(req,res) => {
    try {
        const {search,category,brand,status,sortBy,order} = req.query;

        const page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 10;
        const minPrice = Number(req.query.minPrice);
        const maxPrice = Number(req.query.maxPrice);

        if(!Number.isInteger(page) || !Number.isInteger(limit) || page<1 || limit<1){
            return res.status(400).json({message:'Page or Limit is not valid'});
        }
        if( (minPrice && !Number.isInteger(minPrice)) || (maxPrice && !Number.isInteger(maxPrice)) || (minPrice && minPrice<0) || (maxPrice && maxPrice<0) || (minPrice>maxPrice)){
            return res.status(400).json({message:'Min or Max price is not valid'});
        }

        limit = limit>50?50:limit;
        const skip = (page-1)*limit;

        const allowedSorting = {'price':'asc','rating':'desc'};;
        const sortingKeys = Object.keys(allowedSorting);
        if(!sortingKeys.includes(sortBy) || allowedSorting[sortBy] !== order){
            return res.status(400).json({message:'sorting value is invalid'})
        }
        const direction = order === 'asc'?1:-1;
        const sortObject = {[sortBy]:direction};

        const filterObject = {};
        if(search){
            filterObject.$or = [{name:{$regex:search,$options:'i'}},{description:{$regex:search,$options:'i'}}];
        }
        if(category){
            filterObject.category = category;
        }
        if(brand){
            filterObject.brand = brand;
        }
        if(status){
            filterObject.status = status;
        }
        if(minPrice>=0 && maxPrice>=0){
            filterObject.price = {$gte:minPrice,$lte:maxPrice}
        }else if(minPrice>=0){
            filterObject.price = {$gte:minPrice};
        }else if(maxPrice>=0){
            filterObject.price = {$lte:maxPrice}
        }

        const products = await Product.find(filterObject).skip(skip).sort(sortObject).limit(limit);
        const totalProducts = await Product.countDocuments(filterObject);
        const totalPages = Math.ceil(totalProducts/limit);
        return res.status(200).json({message:'Products fetched successfully',data:{products,currentPage:page,pageSize:limit,totalProducts,totalPages}});
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error Occurred',error:error.message})
    }
}

/**
 * Follow up 1:-
 * Your regex search works. What happens when you have 50–100 million products?"
 */

/**
  For a 50-100 million documents , this regex based search will become significantly slow . i think api will be very slow. because
  this {$regex:search,$options:'i'} checks one by one in each document and scanning 100 million documents will be defintely slow.
  That can increase database latency and put significant load on the API.

  I wouldn't blindly add a compound index. First I'd look at the actual query pattern and use explain() to see whether we're
  getting a collection scan or an index scan and how many documents are examined.

  For word-based search, MongoDB text search can be considered. like below one :-
  await db.products.createIndex({name:'text'}) // text based indexing for searching

  If search is a major feature requiring things like autocomplete, fuzzy matching, relevance ranking, and large-scale search,
  I'd consider a dedicated search engine such as Elasticsearch rather than relying on regex against the primary MongoDB collection."

 For arbitrary substring search like:-

    iphone

    matching:

    Apple iPhone 15
    My Awesome iPhone Case
    SuperiPhone

    a normal indexing like :-

    await db.products.createIndex({name:1});

    index doesn't reliably solve the problem because the search can occur anywhere in the string.

    So I would not recommend creating:

    {name: 1, rating: -1}

    just for this.

    If you change the requirement to prefix search

    For example:

    search = "iphone"

    and you only want names beginning with "iphone":

    iPhone 15
    iPhone 16 Pro

    then a normal index on name can potentially help:

    await db.products.createIndex({name:1}); // here in this it can help

    This is a very different search pattern from arbitrary substring matching.

    If you want word-based text search

    MongoDB has a text index:

    db.products.createIndex({name: "text", description: "text"}); in this case it will work

    This is useful when you want to search words across fields such as:

    name
    description

    But remember:

    Text index ≠ regex index.

It is a different search mechanism.

 // * For 50–100M products and serious product search :-

    This is where I'd recommend a dedicated search engine such as Elasticsearch.

    Your architecture becomes roughly:

                    ┌───────────────┐
    User Search ────►│ Elasticsearch │
                    └───────┬───────┘
                            │
                        search results
                            │
                            ▼
                    ┌─────────────┐
                    │  MongoDB    │
                    │ source data │
                    └─────────────┘

    Elasticsearch is much better suited for things like:

    full-text search
    autocomplete
    fuzzy search
    relevance ranking
    searching multiple fields
    large product catalogs

    // ! so final summary  :-
    "For the current arbitrary substring regex, a normal B-tree index isn't a reliable solution. I'd first inspect the query
    with explain(). For word-based search I could use a MongoDB text index, while for a 50–100M product catalog with advanced
    search requirements I'd move search to a dedicated search engine such as Elasticsearch."
 */

/**
 Follow Up 2 :-
 explain() and query performance

 Imagine your API has become slow:

GET /api/products/search?search=iphone&category=mobile

and the products collection has 100 million documents.

As an interviewer, I'd ask:

"How would you investigate whether MongoDB is the reason for the slow API?"

The important tool here is MongoDB's explain().

What explain() does

Think of it as asking MongoDB:

"Show me how you are executing this query."

Instead of only getting the results, you get information about the query execution plan.

For example, MongoDB may tell you that it is doing:

COLLSCAN

or:

IXSCAN
COLLSCAN

Means Collection Scan.

Conceptually:

100 million documents
       ↓
MongoDB examines documents
       ↓
find matching products

If your query examines a huge portion of 100M documents, this can obviously be expensive.

IXSCAN

Means Index Scan.

Conceptually:

Index
  ↓
find relevant entries
  ↓
fetch matching documents

This can dramatically reduce the amount of data MongoDB needs to examine.

The 3 numbers I especially want you to know

When using:

explain("executionStats")

pay attention to:

executionTimeMillis

→ How long did MongoDB take?

totalDocsExamined

→ How many documents did MongoDB have to examine?

nReturned

→ How many documents actually matched/returned?

For example:

totalDocsExamined = 10,000,000
nReturned         = 20

That's a huge red flag.

MongoDB examined 10 million documents to return only 20.

Whereas:

totalDocsExamined = 25
nReturned         = 20

is much more efficient.

// * Whenever api becomes slow i will do following below steps :-

Slow API
   ↓
Check API timing/logs
   ↓
Determine whether DB is the bottleneck
   ↓
Run MongoDB explain("executionStats")
   ↓
Check COLLSCAN / IXSCAN
   ↓
Check docs examined vs returned
   ↓
Understand query pattern
   ↓
Then decide whether an index/search solution is appropriate
 */

/**
 * Follow up 3 :-
 Search across multiple fields :-
 
Suppose the interviewer says search should work on both name and description.
How would you approach it?

Solution :-
 filterObject.$or = [{name:{$regex:search,$options:'i'}},{description:{$regex:search,$options:'i'}}];
 */

 /**
  * Follow up 4 :-
    Elasticsearch architecture

-  If MongoDB remains the source of truth and Elasticsearch handles search, how do you keep the two in sync? 
-  What happens if MongoDB succeeds but Elasticsearch indexing fails?
  */

/**
 Solution :-

 1. Why do we even need Elasticsearch?

Suppose MongoDB has 100 million products.

Our API needs to support:

"Find products where name or description contains iphone."

MongoDB can be the permanent database, but for sophisticated/high-volume search, we may use Elasticsearch.

                    ┌──────────────┐
                    │   MongoDB    │
                    │              │
                    │ Source of    │
                    │   Truth      │
                    └──────┬───────┘
                           │
                           │ copy/sync
                           ↓
                    ┌──────────────┐
                    │Elasticsearch │
                    │              │
                    │ Search index │
                    └──────────────┘

The crucial concept is:

Elasticsearch is not the source of truth. It is a searchable copy of MongoDB data.

If Elasticsearch disappears completely, we should be able to rebuild it from MongoDB.

The better architecture: asynchronous synchronization :-

Instead, we separate:

"Save the product"

from

"Update the search index."

Architecture:-

                  ┌─────────────┐
                  │   Client    │
                  └──────┬──────┘
                         ↓
                  ┌─────────────┐
                  │ Node.js API │
                  └──────┬──────┘
                         ↓
                  ┌─────────────┐
                  │   MongoDB   │
                  │ Source of   │
                  │   Truth     │
                  └──────┬──────┘
                         │
                         │ ProductCreated event
                         ↓
                  ┌─────────────┐
                  │ Queue/Event │
                  │   System    │
                  └──────┬──────┘
                         ↓
                  ┌─────────────┐
                  │  Worker     │
                  └──────┬──────┘
                         ↓
                  ┌─────────────┐
                  │Elasticsearch│
                  └─────────────┘
                
Let's walk through product creation :-

User creates:

iPhone 17
Step 1 — MongoDB

Node.js saves:

Product #123
name = iPhone 17
price = ...

MongoDB succeeds:

MongoDB ✅

MongoDB is now authoritative.

Step 2 — Create an event

We publish something conceptually like:

ProductCreated

productId = 123

to a durable queue/event system.

MongoDB
   ↓
ProductCreated event
   ↓
Queue
Step 3 — Worker processes it

A separate worker consumes:

ProductCreated

and calls Elasticsearch:

Elasticsearch.index(product)

If successful:

MongoDB ✅
Queue ✅
Elasticsearch ✅

Everything is synchronized.

6. Now the important failure case

Suppose:

MongoDB ✅
Queue ✅
Worker receives event
Elasticsearch ❌

We don't lose the request because the event is sitting in the queue / is retryable.

The worker can retry:

Attempt 1 → ES ❌
Attempt 2 → ES ❌
Attempt 3 → ES ❌
Attempt 4 → ES ✅

Eventually:

MongoDB ✅
Elasticsearch ✅

This is called eventual consistency.

For a short period:

MongoDB:
Product exists

Elasticsearch:
Product missing

But the system is designed to eventually converge.

What if Elasticsearch stays down? :-

We don't want infinite aggressive retries.

We can use:

Retry with backoff

For example:

1st retry → after 1 sec
2nd retry → after 5 sec
3rd retry → after 30 sec
4th retry → after 2 min
...

This is called exponential backoff.

But there's a subtle problem :-

You might now ask:

"What if MongoDB succeeds but publishing the event to the queue fails?"

Excellent question.

Consider:

MongoDB ✅
     ↓
publish event
     ↓
Queue ❌

Now Elasticsearch will never know that the product was created.

This is where more advanced systems introduce patterns such as the Transactional Outbox Pattern.

Conceptually:

MongoDB transaction
       │
       ├── Product saved
       │
       └── Outbox event saved

Both happen in the same MongoDB transaction.

Then a separate publisher reads the outbox:

Outbox
   ↓
Publisher
   ↓
Queue
   ↓
Worker
   ↓
Elasticsearch

So even if the queue is temporarily unavailable, the event remains safely stored in MongoDB's outbox and can be published later.

The complete production-style picture :-

                         ┌──────────────┐
                         │    Client    │
                         └───────┬──────┘
                                 ↓
                         ┌──────────────┐
                         │   Node API   │
                         └───────┬──────┘
                                 ↓
                  ┌─────────────────────────┐
                  │        MongoDB          │
                  │                         │
                  │ Product + Outbox Event  │
                  └────────────┬────────────┘
                               │
                               ↓
                         ┌───────────┐
                         │ Publisher │
                         └─────┬─────┘
                               ↓
                         ┌───────────┐
                         │   Queue   │
                         └─────┬─────┘
                               ↓
                         ┌───────────┐
                         │  Worker   │
                         └─────┬─────┘
                               ↓
                     ┌──────────────────┐
                     │ Elasticsearch     │
                     │ Search Index      │
                     └──────────────────┘
 */