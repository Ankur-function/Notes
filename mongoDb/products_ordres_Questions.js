/**
  Referece collections :-
   mydb database and collections are products and orders.
 */

   /**
  
   🧠 Your 20 Intermediate Aggregation Challenges
Here are 20 problems. Every single one requires combining at least two pipeline stages or complex expression operators.

Part 1: Filtering, Shaping, and Math (Working within single collections) :-

1) The Discount Calculator: Find all orders that are "completed". For these orders, calculate the total sum of discounts applied across all items in that order.
(Required operators: $match, $unwind, $group with $sum)

2) Conditional Pricing: Fetch all products. Create a new field called salePrice. If the category is "Electronics", apply a 10% discount to the price; otherwise, keep the original price.
(Required operators: $project, $cond, $multiply, $subtract)

3) Array Filtering (Strict):(with $) Return only the name and reviews of products, but only include reviews with a score of 4 or higher. If a product has no reviews matching this, the array should be empty.
(Required operators: $project, $filter, $gte)

4) String Manipulation & Concatenation: Find products with "premium" in their tags. Output a single formatted string field called productLabel that looks like this: "Laptop Pro - $1200".
(Required operators: $match, $project, $concat, $toString)

5) Dynamic Shipping Tiers: Group orders by their shipping.method. For each method, calculate the average shipping cost and count how many total orders used it.
(Required operators: $group, $avg, $sum)

6) The Array Mapper: Look at the orders collection. Without using $unwind, return the customerName and a new array called productIdsOnly that contains only the productId numbers from their items.
(Required operators: $project, $map)

7) Date Extraction & Grouping: Group all orders by the day of the week they were placed, and count how many orders fell on that day.
(Required operators: $project or $group, $dayOfWeek, $sum)

8) Inventory Valuation: Calculate the total potential revenue for each supplier if they sold all their current inventory at the listed price.
(Required operators: $group, $sum, $multiply)

9) Review Averages: For each product, calculate its average review score. If a product has no reviews, the average should return as 0 or null. Also, return the total count of reviews it has.
(Required operators: $project, $avg, $size)

10) Array Length & Logic: Find products that have more than 2 tags AND are currently out of stock (inventory is 0). Return only their names and categories.
(Required operators: $match, $expr, $gt, $size)






Part 2: Complex Joins, Reductions, and Multi-Stage Logic :-

11) The Grand Join: For every "completed" order, join the items with the products collection to get the actual product details for each item bought.
(Required operators: $match, $unwind, $lookup)

12) Calculate Total Order Revenue: Building on Problem 11, calculate the total final revenue for each "completed" order. (Formula: (Product Price * Quantity) - Discount Applied).
(Required operators: $match, $unwind, $lookup, $group, $sum, $multiply, $subtract)

13) Supplier Popularity: Which supplier's products have been ordered the most (in terms of total quantity across all orders)? Return the top supplier and the total quantity ordered.
(Required operators: $unwind, $lookup, $group, $sum, $sort, $limit)

14) Advanced Array Reduction: For each order, use the $reduce operator to calculate the total quantity of items purchased without using $unwind.
(Required operators: $project, $reduce, $add)

15) Finding the Most Generous Customer: Find the customer whose average discount per item is the highest.
(Required operators: $unwind, $group, $avg, $sort, $limit)

16) Category Tag Cloud: Group products by category. For each category, create a single array containing all the unique tags used by products in that category (no duplicates!).
(Required operators: $group, $addToSet or $reduce to flatten)

17) Top Rated Products by Category: Find the highest average review score for each product category. Return the category name and the top score.
(Required operators: $project with $avg, $group with $max)

18) The Cancellation Report: Find all cancelled orders. For each cancelled order, output the customerName and calculate the "Lost Revenue" (just sum the discountApplied + shipping.cost for this simple example).
(Required operators: $match, $unwind, $group, $sum, $add)

19) Deep Nested Search: Find orders where the customer bought a product supplied by "FurniCo". Return the customerName and the orderDate.
(Required operators: $lookup, $unwind, $match, $project)

20) Multi-Faceted Dashboard: Using $facet, create a single query that returns two things at once:

A count of total products by category.

A list of all unique suppliers.
(Required operators: $facet, $sortByCount or $group, $addToSet)

    */