/**
 🧱 Section 1 — Data Modeling (Schema Design) :-
🧱 Section 2: Performance & Indexing :- 
🧱 Section 3: Aggregation & Operations :- (include all types of operators , queries etc.) 
 let's start practicing above sections first properly. i mean each problem should have the concept of all these three sections together.
 note :- level of problems should be for 4-5 years of experience guy.
 */

 /**
  Perfect. This is exactly how real 4–5 YOE MongoDB rounds are designed.

Each problem will force you to do, in order:

Data Modeling (schema design)
Query / Aggregation
Index strategy for performance

So you think like a backend engineer, not like a query writer.

🧪 Problem 1 — Marketplace (Amazon-like)
Scenario

You are designing a marketplace where:

Users can be CUSTOMER or SELLER
Sellers list products
Customers place orders
Each order contains multiple products
Product price can change over time
Customers can review products

APIs to support :-
1. User profile (customer)
       Show all orders with product details
2. Product page
       Show product details + latest 5 reviews
3. Seller dashboard
       Total revenue from their products
       Total quantity sold
       Distinct customers count

🎯 Your Tasks (in this exact order)
1️⃣ Design the schema (collections + fields)

Explain embed vs reference decisions.

2️⃣ Write Mongo query / aggregation for:

Seller dashboard API

3️⃣ Create best indexes for this query

Explain index order using Equality → Sort → Range.

Take your time.

First send only schema design.
I’ll review it like an interviewer.
  */

// Solution :-

/**
 
Data modeling/Schema design :-

see i will create 4 collections for this problem :-

1) users: {
    name: '',
    // any other personal details here,
    type:'Seller' // or Customer
}

2) products: {
    label_name: '',
    // any other product details we can also put here
    seller_id:''
    price:'',
}

3) orders: {
    customer_id:'',
    productList:[product_ids list here] // whatever products customer have ordered.
    totalCost:'',
    quantitiy:''
}

4) reviews: {
    product_id:'',
    customer_id:'',
    reviews :['all reviews related to this product put here'],// reviews can be multiple so we should store inside an array
    createdAt:''
}
 */
/**
 * 
 * 3. Seller dashboard
       Total revenue from their products
       Total quantity sold
       Distinct customers count


 {
  _id,
  userId,     // customer
  products: [
    {
      productId,
      title,          // snapshot
      price,          // snapshot price at purchase
      quantity,
      sellerId        // snapshot for faster aggregation
    }
  ],
  totalAmount,
  status,
  createdAt
}
 */

/**
 🛡️ Challenge 1: The "High-Traffic Content Platform"
The Scenario:
You are building a system for a platform like Medium or Dev.to. You have three entities: Users, Articles, and Engagement (Likes/Views).

Articles can have millions of views.

Users can follow thousands of authors.

We need to generate a "Monthly Trending Report" that shows the top 5 articles in a specific category (e.g., "Tech") that were published in the last 30 days, including the Author's name and the average read time of that article.

Your Mission:
1. Data Modeling (Schema Design):

Propose the schema for Users and Articles.

The Decision: Will you embed the "Engagement" data (likes/views) directly inside the Article document, or will you create a separate Engagement collection? Explain your choice based on the 16MB limit and Write Locking.

2. Performance & Indexing:

Based on the "Monthly Trending Report" requirements, suggest a Compound Index following the ESR (Equality, Sort, Range) rule.

Identify if you need any Partial Indexes (e.g., to ignore "Draft" articles and only index "Published" ones).

3. Aggregation & Operations:

Write the aggregation pipeline to generate the report.

It must:

Filter by category and date.

Join the Author's name from the Users collection.

Calculate the average read time.

Sort by the highest engagement.

Show me your JSON structure for the collections.

State your indexing strategy (the exact fields and order).

Provide the Aggregation Pipeline.
 */


/**
 1) Articles :-
      category,
      articeTitle,
      createdAt,
      authorName,
      avgReadTime


 2) Users :-
      name,
      author_ids: [ ]

 3) Engagement :-
      article_id,
      user_id,
      views,
      likes
    
 // Explanation :-
 // because as you said just for views and likes we will have to do update query in the entire Articles collection . which is 
 // unnecassary for rest fields so i will make the separate collection for Engagement.
 // storing article_id,user_id too to track, likes belongs to which article and who liked it.

 4) Follows :- 
      user_id,
      author

      
// Explanation :-
// users can follow thousand of authors so it's best to store author_ids in the array.

// Monthly Trending Report Explanation :-
// for this we can get top 5 articles of last 30 days from the Articles collection itself using createdAt field. and saving
// authorName, and Engagement inside Articles collection makes it very fast to display. so no need to lookup here.


 */

//=========================================================== ADVANCE PROBLEMS =========================================================

/**
 
1. The Compound Index & Sorting Dilemma (Indexing & ESR Rule)
The Scenario
You have an orders collection with millions of documents. The schema looks like this:

JSON
{
  "_id": ObjectId("..."),
  "customerId": "CUST_1001",
  "status": "DELIVERED",
  "orderDate": ISODate("2026-05-01T00:00:00Z"),
  "totalAmount": 450.50
}
The Problem
Your application frequently executes the following query to fetch high-value delivered orders for a specific customer, sorted by the most recent first:


db.orders.find({
  customerId: "CUST_1001",
  totalAmount: { $gt: 100 }
}).sort({ orderDate: -1 })

Interview Questions
To make this query as efficient as possible, what is the exact compound index you should create? Explain your reasoning using the ESR (Equality, Sort, Range) rule.

What happens if you create an index on { customerId: 1, totalAmount: 1, orderDate: -1 } instead? How does MongoDB's execution plan handle the sort stage in this case?
 */db.orders.createIndex({customerId:1,status:1,totalAmount:-1,orderDate:-1});


/**
 2. Advanced Aggregation with Arrays (Unwinding & Memory Limits)
The Scenario
You are managing an e-commerce products collection. A sample document looks like this:

JSON
{
  "_id": ObjectId("..."),
  "category": "Electronics",
  "name": "Wireless Headphones",
  "tags": ["audio", "bluetooth", "premium"],
  "inventory": [
    { "warehouse": "Mumbai", "quantity": 12 },
    { "warehouse": "Delhi", "quantity": 0 },
    { "warehouse": "Bengaluru", "quantity": 8 }
  ]
}
The Problem
Your business team wants a report showing all unique tags across the "Electronics" category, but only including products that are currently in stock in the Mumbai warehouse (i.e., inventory.warehouse is "Mumbai" and quantity > 0).

Interview Questions
Write an aggregation pipeline that returns a single document containing an array of these unique tags.

If this collection has 20 million documents, your $unwind stage might exceed the 100MB RAM limit for aggregation stages. How would you prevent this memory issue without using allowDiskUse: true?
 */


/**
 
 3. Query Optimization & Index Intersection
The Scenario
Consider a users collection where you have two separate single-field indexes:

Index A: { city: 1 }

Index B: { age: 1 }

The Problem
A query comes in to find all users matching both criteria:

JavaScript
db.users.find({ city: "Gurugram", age: { $gte: 25, $lte: 30 } })
Interview Questions
What is Index Intersection, and how does MongoDB use it in this case?

From a performance perspective, is it better to rely on index intersection (Index A and Index B together) or to create a single compound index on { city: 1, age: 1 }? Use explain() output terms (IXSCAN, AND_SORT, FETCH) to justify your answer.
 */

// my solution :-

// creating a single compound index would be much better for this query. because if we use two separate single-field indexes.
// then it's of no use because mongo still have to search linearly like first in city index tree and second time inside age index
// tree. and also it will take more memory space. so better would be compound index followed by E-S-R rule. i.e. equality, sorting,
// range rule.
// so my final compound index would be :- 
db.users.createIndex({city:1,age:1}) // only equality and range filter is present in this query so skip sorting here

