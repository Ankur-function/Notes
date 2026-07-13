/**
 VVI
 const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount.apple);
 */
/**
 * VVI
 const users = [{id:1,team:'A'},{id:2,team:'B'},{id:3,team:'A'}];
Write a single reduce that returns { A: [1,3], B: [2] } (ids grouped by team). Explain time complexity.
 */
/**
 Problem 1: The "Word Frequency" (Easy) :-

You have an array of words. Count how many times each word appears.
Input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
Goal: { apple: 3, banana: 2, orange: 1 }
 */
/**
 Problem 2: Grouping by Property (Medium)
You have an array of "Product" objects. Group them by their category.
const products = [
  { name: 'Laptop', category: 'Tech' },
  { name: 'Shirt', category: 'Fashion' },
  { name: 'Phone', category: 'Tech' }
];
Goal: { Tech: ['Laptop', 'Phone'], Fashion: ['Shirt'] }
 */
/**
 Problem 3: The "Inventory Total" (Medium)
Calculate the total value of items in different warehouses.
const stock = [
  { warehouse: 'North', price: 10, quantity: 2 },
  { warehouse: 'South', price: 5, quantity: 4 },
  { warehouse: 'North', price: 20, quantity: 1 }
];
Use code with caution.

Goal: { North: 40, South: 20 } (Note: 10*2 + 20*1 = 40)
 */
/**
 Problem 4: The "Inventory Log" (Hard)
Create a log of dates for each activity type.

const logs = [
  { date: '2023-01-01', action: 'Login' },
  { date: '2023-01-02', action: 'Post' },
  { date: '2023-01-01', action: 'Logout' }
];
Goal: { '2023-01-01': ['Login', 'Logout'], '2023-01-02': ['Post'] }
 */
/**
 3. Flatten one level
Given: [[1,2],[3,4],[5]]
Return: [1,2,3,4,5]
 */
/*
Problem:- Remove duplicates

Given: [1,2,3,2,4,1,5]
Return: [1,2,3,4,5]
*/
/***
 // i will do below problem after learning DSA :-

10. Flatten deeply nested array (infinite depth)

[1, [2, [3, [4]], 5]]
 */

/**
 11. Partition array into two groups

Given: [1,2,3,4,5,6]
Return:

{
  even: [2,4,6],
  odd: [1,3,5]
}
 */
/**
 12. Create a frequency map of characters

Given: "javascript"
Return:

{ j:1, a:2, v:1, s:1, c:1, r:1, i:1, p:1, t:1 }
 */

/**
 VVI
 13. Merge arrays of objects by id

const a = [
  {id:1, name:'A'},
  {id:2, name:'B'}
];

const b = [
  {id:1, age:20},
  {id:2, age:25}
];

Return:

[
  {id:1, name:'A', age:20},
  {id:2, name:'B', age:25}
]
 */
/**

15. Group orders by category and sum totals

[
  {category:'food', amount:100},
  {category:'electronics', amount:200},
  {category:'food', amount:150},
  {category:'electronics', amount:50}
]

Return:

{
  food: 250,
  electronics: 250
}
*/

