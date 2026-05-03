# Database used :- Practice_1
# Collections used :- users,orders,products,coupons,cart,reviews

# 🧪 Problem 1 — User Order History (Joins + Unwind + Group)
🎯 Requirement

Build an API:

“For each user, show total money they have spent on DELIVERED orders and how many products they bought in total.”

✅ Output format
{
  name: "...",
  email: "...",
  totalSpent: ...,
  totalProductsBought: ...
}
⚠️ Rules
Only DELIVERED orders
If user has no delivered orders → should NOT appear
You MUST use:
$lookup
$unwind
$group
$project


# 🧪 Problem 2 — Users Who Bought Expensive Electronics
Collections

users

orders

products

🎯 Requirement

Find:

Users who have purchased electronics products
where product price > 50,000
and order status is DELIVERED

For each such user, return:

name
email
totalAmountSpentOnTheseProducts
totalQuantityBought

# 🧪 Problem 3 — Product Performance Report
Collections

users

{
  _id,
  name,
  role   // CUSTOMER or SELLER
}

orders

{
  _id,
  userId,
  products: [
    {
      productId,
      quantity,
      price
    }
  ],
  status,
  createdAt
}

products

{
  _id,
  title,
  category,
  sellerId
}

🎯 Requirement

Build a report:

For each SELLER, show:

seller name
total revenue generated from their products
total quantity sold
count of distinct customers who bought their products
Conditions
Consider only DELIVERED orders
Consider only products where category = "electronics"


# 🧪 Problem 4 — Customer Purchase Pattern Report

Build a report:

For each CUSTOMER, show :-

customer name
total number of orders placed
total money spent
their most purchased product category (the category they bought the most by quantity)


Conditions :-

Consider only DELIVERED orders
If a customer never placed an order, they must not appear in the result
If two categories have same quantity, return any one


Output format (example) :-
{
  name: "Rahul Singh",
  totalOrders: 5,
  totalSpent: 185000,
  favoriteCategory: "electronics"
}

