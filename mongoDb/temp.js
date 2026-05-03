db.orders.aggregate([
  { $match: { status: "DELIVERED" } },
  { $unwind: "$products" },
  {
    $lookup: {
      from: "products",
      localField: "products.productId",
      foreignField: "_id",
      as: "productDetails",
    },
  },
  { $unwind: "$productDetails" },
  {
    $group: {
      _id: {
        category: "$productDetails.category",
        userId: "$userId",
        totalOrders: { $sum: 1 },
        totalMoneySpent: { $sum: "$totalAmount" },
      },
    },
  },
  {
    $lookup: {
      from: "users",
      foreignField: "_id",
      localField: "_id.userId",
      as: "userDetails",
    },
  },
]);
