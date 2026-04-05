/**
 1)
You have this collection:

orders
{
  _id,
  userId,
  products: [
    { productId, name, price, qty }
  ],
  totalAmount,
  status,        // "PLACED" | "SHIPPED" | "DELIVERED"
  createdAt
}
🎯 API Requirement

Order history page

Show last 20 orders of a user where:

status = "DELIVERED"
sorted by latest first
return only:
totalAmount
createdAt
status

✍️ Your Task (like interview)
You must write:

1️⃣ The Mongo query
2️⃣ The best index to support this query
3️⃣ Explain why this index order
4️⃣ Can this be a covered query? If yes, how?
 */

const { status } = require("@grpc/grpc-js");

/**
 🧪 Problem 2 — Products Search Page
        products
        {
          _id,
          title,
          description,
          price,
          category,
          rating,
          createdAt
        }
        🎯 API Requirement

        User searches:

        “laptop”

        Show products where:

        text search on title and description
        category = "electronics"
        sorted by rating high to low
        pagination: page 3, 10 items per page
        return: title, price, rating
        ✍️ Your task

        1️⃣ Write Mongo query
        2️⃣ Best index(es)
        3️⃣ Explain index order
        4️⃣ Can this be covered? Why / why not?

        Write your answer.
 */
/**
 🧪 Problem 3 — Orders Dashboard
    Collection: orders
    {
      _id,
      userId,
      status,        // PENDING, SHIPPED, DELIVERED, CANCELLED
      totalAmount,
      createdAt
    }
    🎯 API Requirement

    Admin dashboard shows:

    “All DELIVERED orders
    between 1 Jan 2026 and 31 Jan 2026
    sorted by createdAt descending
    page 2, 20 items per page
    return: userId, totalAmount, createdAt”

    ✍️ Your Tasks

    1️⃣ Write the Mongo query (find or aggregate)

    2️⃣ Best index for this query

    3️⃣ Explain why index order matters here

    4️⃣ Can this be a covered query? If yes, how?
 */

    // using find () :-
    db.orders.find({$and:[{status:'DELIVERED'},{createdAt:{$gt:'01-01-2026'}},{createdAt:{$lt:'31-01-2026'}}]},{userId:1,totalAmount:1,createdAt:1}).sort({createdAt:-1}).skip(20).limit(20);

    // using aggregation :-
    db.orders.aggregate([{$match:{$and:[{status:'DELIVERED'},{createdAt:{$gt:'01-01-2026'}},{createdAt:{$lt:'31-01-2026'}}]}},{$project:{userId:1,totalAmount:1,createdAt:1}},{$sort:{createdAt:-1}},{$skip:20},{$limit:20}]);

    //2) Indexing :-
    db.orders.createIndex({status:1,createdAt:-1});

    //3) here index order is status -->> createdAt (because equality(i.e. status here) first and then sort (i.e. createdAt here) and then range (i.e. createdAt))
    //   since here sort and range are same so no need to write duplicate things. that's why i wrote createdAt:-1 only one times.

    //4) covered query :-
    //   to make this index like a cover query we need to include all fields from the query in to our index i.e.
    //   db.orders.createIndex({status:1,createdAt:-1,userId:1,totalAmount:1})

