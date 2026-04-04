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

db.orders.find({userId:'U1'},{status:'DELIVERED'},{totalAmount:1,createdAt:1,status:1}).sort({createdAt:-1}).limit(20);

