/**
 * Note:- you can also practice below questions in action inside database.
 * 
 🧪 Problem 1 — Student Learning Platform

A student can:

have profile (address, hobbies, idCards)
enroll in multiple courses
place many orders for courses
write reviews on courses

APIs mostly show:
student profile + courses + reviews

Design the schema.


🧪 Problem 2 — E-commerce Website

A user can:

have multiple addresses
place thousands of orders
each order has multiple products
products are common for all users

APIs:

Order history page
Product page with reviews
User profile with addresses

Design the schema.

🧪 Problem 3 — Blogging Platform

A user:

writes blogs
blogs have comments
comments can have replies
users can like blogs

APIs:

Blog page with comments
User profile with all blogs

Design the schema.

🧪 Problem 4 — Chat Application

A user:

can be in many chat rooms
each room has thousands of messages
messages have sender info
users can edit profile anytime

APIs:

Open chat room → load last 50 messages with sender name

Design the schema.

🧪 Problem 5 — Food Delivery (like Swiggy)

A user:

places many orders
each order has restaurant + items
restaurants are common
menu items belong to restaurant
user has delivery addresses

APIs:

Order history
Restaurant page with menu
User profile

Design the schema.

🧪 Problem 6 — Online Course Platform (Important)

A course:

has many lessons
lessons have videos
students enroll
students track lesson progress

APIs:

Open course → lessons + progress

Design the schema.

🧪 Problem 7 — Hospital Management

A patient:

has personal details
many appointments
doctors are common
prescriptions per appointment

APIs:

Patient history with prescriptions
Doctor profile

Design the schema.

🧪 Problem 8 — Social Media

A user:

posts photos
photos have comments and likes
user follows other users

APIs:

Feed page (posts of following users)
Photo page with comments

Design the schema.

🧪 Problem 9 — Ticket Booking (BookMyShow type)

A user:

books many tickets
movies are common
theatres are common
each booking has seats

APIs:

Booking history
Movie page with show timings

Design the schema.

🧪 Problem 10 — HR Management System

An employee:

has profile
works in a department
has salary history
has attendance records (daily)

APIs:

Employee profile
Attendance report
Salary report

Design the schema.
 */

//----------------------------------------------------Solutions of above problems -----------------------------------------------------
 
/**
 

🧪 Problem 1 — Student Learning Platform

A student can:

have profile (address, hobbies, idCards)
enroll in multiple courses
place many orders for courses
write reviews on courses

APIs mostly show:

student profile + courses + reviews

Design the schema.


Solution :-

my answer :- i tried to design the schema for problem 1 check below ,

profile: {
    address :{
        city:'';
        pincode:'';
    };
    hobbies:['singing','cooking','drawing'];
    idCards:['aadharCard','panCard','voterIDCard'];
    courses:ObjectId('.....')
    orders:ObjectId('......')
    reviews:ObjectId('......')
}

AI answer :-

Great start 👍 — but this is exactly where SQL thinking is still visible.
This is very common, and fixing this is the real learning.

Let’s review like an interviewer for MongoDB data modeling.

❌ First Major Issue — You made one big profile object

You are trying to put everything inside profile:

profile: {
  address,
  hobbies,
  idCards,
  courses,
  orders,
  reviews
}

This is wrong thinking.

👉 profile should contain only personal info.
Not relations like courses, orders, reviews.

❌ Second Issue — Referencing small data

You referenced:

courses: ObjectId()
orders: ObjectId()
reviews: ObjectId()

Ask the golden questions:

Field	Always read with student?	Grows huge?	Shared?	Decision
address	Yes	No	No	✅ Embed
hobbies	Yes	No	No	✅ Embed
idCards	Yes	No	No	✅ Embed
courses	Yes	No	Yes	❌ Not like this
orders	No	Yes	No	❌ Wrong place
reviews	Yes	No	No	❌ Wrong place
❗ Biggest Concept You Missed

“API mostly shows: student profile + courses + reviews”

That means:

👉 courses and reviews are read with student.

But that does not mean you store ObjectIds inside student.

It means you design separate collections but keep relation smart.

✅ Correct Mongo Thinking

You will have 4 collections

1️⃣ students

Embed personal stuff only

{
  _id,
  name,
  address: { city, pincode },
  hobbies: [],
  idCards: { aadhar, pan }
}
2️⃣ courses (common for all students)
{
  _id,
  title,
  price
}
3️⃣ enrollments (VERY IMPORTANT COLLECTION)

This is many-to-many bridge.

{
  studentId,
  courseId,
  enrolledAt
}

Not inside student.

4️⃣ reviews (embed student info here, not reference)

Because reviews are shown with student + course.

{
  studentId,
  courseId,
  review,
  rating,
  studentName   // embed for fast read
}
5️⃣ orders (separate, large, growing)
{
  studentId,
  amount,
  courses: [courseId],
  status
}
🧠 Why this design is perfect

Now your API:

student profile + courses + reviews

Becomes easy using $lookup.

And no document grows uncontrollably.

🔥 Key Learning From Your Attempt

You:

Embedded too much into profile
Tried to store relations inside student
Missed the need for a bridge collection (enrollments)

This is the exact difference between:

❌ Beginner Mongo design
✅ 4-YOE Mongo design

If this makes sense, try Problem 2 (E-commerce) now.

This one will test if you really understood embed vs reference vs growth rule.

----------------------------------------------------------------------------------------------------------------------

🧪 Problem 2 — E-commerce Website

A user can:

have multiple addresses
place thousands of orders
each order has multiple products
products are common for all users

APIs:

Order history page
Product page with reviews
User profile with addresses

Design the schema.

Solution :-

my answer :-

i tried problem 2 i.e. above one this time see my below solution whether it's correct or not . if it's correct i will move to the next problem now see,

i will make total 5 collections i this task i.e. -

Collection 1) Users -

user personal details along with their address.

Collection 2) Orders -

user_id,
products: [product_id1,product_id2, product_id3.......etc],// orders can contain so many products that's why array of products
createdAt

Collection 3) Products -

products own details
reviews:[review_id1,review_id2,review_id3............etc]// one product can have so many reviews that's why array of reviews

Collection 4) Reviews -

reviews // i.e. all reviews of all the products

Collection 5) Movie-Review - // in this collection we will do mapping of products with their reviews

product_id,
review_id

AI answer :-

Great attempt 👏 You’re thinking in the right direction.
Now let’s MongoDB-correct it.

You made one classic SQL mistake and one MongoDB mistake.

✅ Your Collection 1 — Users (Correct)

“user personal details along with their address”

✔️ Perfect to embed addresses inside user.
Addresses are small, personal, and always read with profile.

⚠️ Your Collection 2 — Orders (Half correct)

You wrote:

orders: {
  user_id,
  products: [product_id1, product_id2],
  createdAt
}

Problem:

An order is not just product ids.

Order history page needs:

product name at time of order
price at time of order
quantity
total

If you store only product_id, and later product price changes, old order becomes wrong.

✅ Correct Orders Design
{
  _id,
  userId,
  products: [
    {
      productId,
      name,      // snapshot
      price,     // snapshot
      quantity
    }
  ],
  totalAmount,
  createdAt
}

This is very important MongoDB rule → snapshot data in orders.

❌ Your Collection 3 — Products with reviews: [reviewIds]

This is a MongoDB mistake.

A popular product can have 50,000 reviews.

If you store review ids array inside product → document grows forever ❌

Never do this.

❌ Your Collection 5 — Movie-Review mapping

This is pure SQL thinking.

You do NOT need mapping between product and reviews.

Because review itself will contain productId.

That’s enough.

Mapping collection is only for many-to-many.

Here relation is one-to-many:

One product → many reviews

No mapping needed.

✅ Correct Final Design
1️⃣ Users
{
  _id,
  name,
  email,
  addresses: [
    { city, pincode, street }
  ]
}
2️⃣ Products
{
  _id,
  title,
  price,
  description
}

No reviews here.

3️⃣ Orders
{
  _id,
  userId,
  products: [
    {
      productId,
      name,
      price,
      quantity
    }
  ],
  totalAmount,
  createdAt
}
4️⃣ Reviews
{
  _id,
  productId,
  userId,
  userName,   // duplicated for fast reads
  review,
  rating,
  createdAt
}
🎯 Why this works perfectly for given APIs
API	How it’s served
Order history page	Only Orders collection
Product page with reviews	Products + Reviews by productId
User profile with addresses	Only Users

No huge arrays. No mapping. No joins headache.

🧠 Your Two Mistakes (very common)
Thinking product should know its reviews (SQL mindset)
Creating unnecessary mapping collection

You’re very close to mastering modeling now.

-----------------------------------------------------------------------------------------------------------------------------

🧪 Problem 3 — Blogging Platform

A user:

writes blogs
blogs have comments
comments can have replies
users can like blogs

APIs:

Blog page with comments
User profile with all blogs

My answer :-
now for above problem 3 i have designed below schema see , check like an interviewer whether this is correct or not

Collection 1)  user  :-
       _id,
       username,
      like_button_field

Collection 2) Blogs :-
       _id,
       user_id,
     Blog title,
    Blog content etc.

Collection 3) Comment :-
      _id,
blog_id,
comment

Collection 4) Replies :-
     _id,
comment_id,
reply

      

AI answer :-
Great attempt. You’re thinking in collections, which is good.
Now let’s evaluate this like an interviewer.

❌ The Core Issue in Your Design

You designed purely by relationship:

User → Blogs
Blog → Comments
Comment → Replies

But you did not think about:

📌 Which API reads what data together most of the time?
📌 Which arrays are bounded vs unbounded?

Those two decide MongoDB schema. Not relations.

APIs given:

Blog page with comments (very important)
User profile with all blogs
Problem with your design

You created:

comments separate
replies separate

So to show one blog page, MongoDB must do:

blogs
 → comments
   → replies

3 collections. Heavy joins. Slow. Not Mongo style.

🧠 Think: How big can comments & replies grow?
A blog can have thousands of comments → unbounded ❌ embed all
But a single comment usually has few replies → bounded ✅ embed

This is the trick.

✅ Correct MongoDB Design (Interviewer answer)
1) users
{
  _id,
  username,
  ...
}
2) blogs
{
  _id,
  user_id,
  title,
  content,
  likes: [ user_id1, user_id2 ],   // bounded
  createdAt
}

Why embed likes?
A blog won’t get millions of likes typically. Even if it does, you can cap or paginate.

3) comments (separate collection)
{
  _id,
  blog_id,
  user_id,
  comment,
  replies: [
    {
      user_id,
      reply,
      createdAt
    }
  ],
  createdAt
}

Why this is perfect:

Blog page = blog + comments (1 lookup)
Replies come automatically with comment (no extra lookup)
Replies are bounded → embedded
Comments are unbounded → separate collection
🔥 What you did vs what Mongo expects
Item	Your Design	Correct Design
Likes	Field in user ❌	Array in blog ✅
Comments	Separate ✅	Separate ✅
Replies	Separate ❌	Embedded in comment ✅
Blog page API	3 lookups ❌	1 lookup ✅
🧠 Golden Thinking Pattern (very important)

When you see:

Parent → Child → Child

Always ask:

Which level is unbounded?
Which level is bounded?

Unbounded → new collection
Bounded → embed

Here:

Blog → Comments (unbounded)
Comment → Replies (bounded)

So:

comments collection
replies embedded

✅ Final interviewer verdict on your schema

Conceptually good start ❌
MongoDB-optimized design ❌
You thought relationally, not document-oriented ❌

But this is exactly how people learn Mongo modeling.

You’re now very close to thinking correctly.

-------------------------------------------------------------------------------------------------------------------------

🧪 Problem 4 — Chat Application

A user:

can be in many chat rooms
each room has thousands of messages
messages have sender info
users can edit profile anytime

APIs:

Open chat room → load last 50 messages with sender name

Design the schema.

my answer :-
for above problem 4 i have designed a below schema.... ... check whether this is correct or not,


1) User -

        name,
        user_other_information,
        chat_rooms_ids:[chat_room_id1,chat_room_id2,chat_room_id3 .........etc] // because chat rooms can't be unbounded. it is always limited

2) Messages -

        sender_name,
        user_id,
        message,
        chat_room_id,
        sender_other_information

AI answer :-
Very good. This problem is classic MongoDB interview question.
And here again, you are 80% correct, but missing the critical MongoDB thinking point.

Let’s evaluate like an interviewer.

✅ What you did right
Users collection

You kept user info separate because:

“users can edit profile anytime” ✅

That is exactly correct thinking.
Never embed user profile inside messages.

Messages collection

You created separate messages because:

“each room has thousands of messages” → unbounded ✅

Perfect.

❌ The Big Miss — You forgot the Chat Room collection

You directly linked:

User ↔ Messages

But problem says:

User can be in many chat rooms

So real relation is:

User ↔ ChatRoom ↔ Messages

You skipped the middle entity.

That breaks the model.

❌ Mistake 2 — Storing sender_name and sender_other_information

You wrote:

sender_name,
sender_other_information

This is wrong because:

users can edit profile anytime

If name changes, old messages will still show old name ❌

Correct way: store only user_id.

Fetch latest name when reading.

✅ Correct MongoDB Schema (Interviewer answer)
1) users
{
  _id,
  name,
  profileInfo
}
2) chatRooms ⭐ (very important collection you missed)
{
  _id,
  roomName,
  members: [user_id1, user_id2, user_id3]
}

Why embed members?

Members list is bounded (room won’t have millions)
Needed to check access quickly
3) messages
{
  _id,
  chat_room_id,
  user_id,          // only reference
  message,
  createdAt
}
🧠 How the API works now
API: Open chat room → last 50 messages with sender name

Steps:

Find last 50 messages by chat_room_id
$lookup users using user_id to get latest name

Fast. Correct. Mongo style.

❌ What was wrong in your design
Issue	Why wrong
No chatRooms collection	Missing core entity
sender_name in messages	Violates “profile editable” rule
user → chat_rooms_ids	Not needed; chatRoom tracks members
🧠 Golden rule you learned here

When you see:

“Users can edit profile anytime”

👉 Never duplicate user info anywhere. Only store user_id.

✅ Verdict
Part	Status
Users	✅
Messages separate	✅
sender info stored	❌
Missing chatRooms	❌
chat_rooms_ids in user	❌ unnecessary

You are very close to expert-level modeling now.

-------------------------------------------------------------------------------------------------------------------------------

🧪 Problem 5 — Food Delivery (like Swiggy)

A user:

places many orders
each order has restaurant + items
restaurants are common
menu items belong to restaurant
user has delivery addresses

APIs:

Order history
Restaurant page with menu
User profile

Design the schema.


My answer :-
for the above problem i.e. problem 5 below is my schema design see , check like an interviewer whether it's correct or not.

User :-

    _id,
    name,
    address,

Orders :-

    _id,
    resturant_ids:['resturant_id1','resturant_id2','resturant_id3'....],
    item,
    price,
    delivery_time

Restuarnts :-

    _id,
    name,
    address,
    menu


AI answer :-
Great. This problem combines everything you learned:

Ownership
Bounded / Unbounded
API-first thinking

You did a decent start, but as an interviewer I would say:

❌ This schema will break in real Swiggy-level system.

Let’s go step by step.

✅ What you did right
Users

You embedded address inside user.
Correct — user owns addresses, bounded.

❌ Major Mistake 1 — restaurant_ids array inside Order

You wrote:

Orders: {
   restaurant_ids: [...]
}

But think:

One order is placed to one restaurant only.

Users don’t order from 3 restaurants in a single order.

So this is logically wrong.

Correct:

restaurant_id
❌ Major Mistake 2 — You did not think about menu items ownership

You wrote:

Restaurants: {
   menu
}

This is the biggest modeling mistake.

Ask Step 1 (ownership):

Who owns menu items?

Only the restaurant.

Good.

Step 2 (bounded/unbounded):

Can a menu grow large / change often?

Yes. Items change price, availability, images, categories.

So menu must be separate collection, not embedded.

❌ Major Mistake 3 — Order must store item snapshot (very important)

You wrote in order:

item,
price

But items belong to menu. Prices change.

If you only store item reference:

Old orders will show new price ❌

So order must store snapshot of items at order time.

This is very important real-world rule.

✅ Correct MongoDB Design (Interviewer answer)
1) users
{
  _id,
  name,
  addresses: [ ... ]
}
2) restaurants
{
  _id,
  name,
  address
}
3) menuItems (separate)
{
  _id,
  restaurant_id,
  name,
  price,
  category,
  isAvailable
}
4) orders (most important)
{
  _id,
  user_id,
  restaurant_id,
  items: [
    {
      item_id,
      name,        // snapshot
      price,       // snapshot
      qty
    }
  ],
  delivery_time,
  createdAt
}

Why snapshot? Because menu changes.

🧠 How APIs work now
Order history

No lookup needed. Everything inside order.

Restaurant page with menu

Query menuItems by restaurant_id.

User profile

Query orders by user_id.

❌ Summary of issues in your schema
Issue	Why wrong
restaurant_ids array	One order → one restaurant
menu embedded in restaurant	Menu is large & dynamic
No item snapshot in order	Historical data breaks
🎯 Interview verdict

You are thinking correctly, but missing real production rules:

Snapshot rule for orders
Ownership of menu items
Correct relation of order ↔ restaurant

These are exactly the things interviewers test at 4+ YOE.

-----------------------------------------------------------------------------------------------------------------------

🧪 Problem 6 — Online Course Platform (Important)

A course:

has many lessons
lessons have videos
students enroll
students track lesson progress

APIs:

Open course → lessons + progress

Design the schema.


My answer :-
for your above problem 6 i have designed below schema now see whether it's correct or not

Course :-

    _id,
    name

Lessons :-

    _id,
    title,
    videos,
    course_id,
    student_id

Student :-

    _id,
    name,
    course_ids :[course_id1,course_id2....etc]// student can enroll in multiple courses,
    lesson_progress

    
AI answer :-
Very nice. This problem is tricky and interviewers love it because it mixes:

Ownership
Bounded / Unbounded
Many-to-many
Progress tracking (dynamic data)

You are again 70–75% correct, but missing the most important collection.

Let’s evaluate like an interviewer.

First understand the relations properly

We have four different entities here:

Course
Lessons (belong to course)
Students
Progress (student ↔ lesson)

You mixed some of these.

✅ What you did right
Courses separate ✅

Correct. Courses are shared by all students.

Lessons separate with course_id ✅

Correct. Lessons belong to course and can be many.

❌ Mistake 1 — student_id inside Lessons ❌

You wrote:

Lessons: {
   course_id,
   student_id
}

Ask Ownership rule:

Does a lesson belong to a student?

❌ No. Lesson belongs to course.

You mixed progress data into lessons.

❌ Mistake 2 — course_ids and lesson_progress inside Student ❌

You wrote:

Student: {
   course_ids: [],
   lesson_progress
}

This is the biggest mistake.

Why?

Because this is many-to-many with dynamic growth.

One student → many lessons progress
One lesson → many students progress

This is classic bridge collection case.

🧠 The missing collection: progress (VERY IMPORTANT)

This is the heart of this design.

Progress is neither owned by student nor by lesson.

It is a relation between them.

So it must be separate.

✅ Correct MongoDB Design (Interviewer answer)
1) courses
{
  _id,
  name
}
2) lessons
{
  _id,
  course_id,
  title,
  videos: [ ... ]   // bounded → embed
}

Videos are bounded per lesson → embed.

3) students
{
  _id,
  name
}

No course_ids. No progress here.

4) enrollments (student ↔ course)
{
  _id,
  student_id,
  course_id,
  enrolledAt
}

Many-to-many bridge.

5) progress (student ↔ lesson) ⭐
{
  _id,
  student_id,
  lesson_id,
  completed: true,
  lastWatchedTime
}

This is what you tried to put inside lessons and students.

🧠 How the API works now
API: Open course → lessons + progress

Steps:

Get lessons by course_id
Get progress by student_id + lesson_ids
Merge in aggregation

Fast. Clean. Scalable.

❌ Summary of your mistakes
Issue	Why wrong
student_id in lessons	Lesson not owned by student
course_ids in student	Many-to-many, should be bridge
lesson_progress in student	Unbounded & shared relation
🎯 Interview verdict

You understood entities, but missed:

When two entities are related and both can grow → bridge collection.

This is a very important MongoDB modeling concept.
 */
 