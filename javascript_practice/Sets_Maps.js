/**
 Topics Covered:-
 Sets
 Maps
 */

 /**
  const s = new Set([1,2,3,2,1]);
console.log(s.size, [...s]);
  */
 /**
  const s = new Set([NaN, NaN, +0, -0]);
console.log(s.size, [...s]);
  */
/**
 One-liner: remove duplicates from arr = [1,2,2,3,1] producing an array of unique values.
 */
/**
 const a = {};
const b = {};
const s = new Set([a, b, a]);
console.log(s.size);
 */
/***
 const s = new Set([1,2,3]);
s.delete(2);
console.log(s.has(2), s.has(3));
 */
/**
 const s = new Set();
s.add(1).add(2).add(3);
s.forEach((v, k) => console.log(k, v));
 */
/*
VVI
const obj = {x:1};
const s = new Set([obj]);
obj.x = 9;
console.log([...s][0].x);
*/
/**
 const m = new Map([['a',1], ['b',2]]);
console.log(m.get('a'), m.size);
 */
/**
 🟢 Problem 1: The Basic "Gatekeeper"

Goal: Practice initialization and basic methods (add, has, size).
Task:
Create a Set called guestList.
Add the names: "Alice", "Bob", and "Charlie".
Try to add "Alice" again.
Check if "Bob" is on the list.
Remove "Charlie" from the list.
Log the final size and all remaining guests.
 */

/**
 Task:
You have two arrays of user IDs representing two people's friend lists:

const userAFriends = [10, 20, 30, 40];
const userBFriends = [30, 40, 50, 60];

Find the common friends (IDs that appear in both arrays).
 */

/**
 🔴 Problem 4: The "Unique Character Search"
Goal: Practice string-to-set conversion and iteration.
Task:
Write a function isIsogram(str) that checks if a word has no repeating letters.
isIsogram("table") should return true.
isIsogram("hello") should return false.
Requirement: Use a Set to solve this by comparing the string's length to the Set's size.

 */

/**
 🟢 Problem 1: The "Inventory Tracker"
Goal: Basic operations (set, get, has, size).
Task:
Create a Map called inventory.
Add these items: 'Apples' (qty: 50), 'Bananas' (qty: 20), and 'Oranges' (qty: 15).
Update the quantity of 'Apples' to 100.
Check if 'Grapes' exists in the inventory.
Log the total number of unique item types using .size.
Retrieve and log the quantity of 'Oranges'.

 */
/**
 🟡 Problem 2: The "Object Metadata" Store
Goal: Using Objects as keys (something a plain {} cannot do).
Task:

const user1 = { id: 1, name: 'Alice' };
const user2 = { id: 2, name: 'Bob' };

Create a Map called userLastLogin.

Set the key as the object user1 and the value as the string '2023-10-01'.
Set the key as the object user2 and the value as the string '2023-10-05'.
Log the login date by passing the user1 object into .get().
Question: What happens if you try userLastLogin.get({ id: 1, name: 'Alice' })? (Test this and explain why).
 */
/**
 🟠 Problem 3: The "Frequency Counter"
Goal: Using a Map for data processing.
Task:
You have an array of votes:
const votes = ['Red', 'Blue', 'Red', 'Green', 'Blue', 'Red'];
Use a Map to count how many votes each color got.
Logic: Loop through the array. If the color is already in the Map, increment its value. If not, set it to 1.
Convert the final Map into an Array of Arrays using the spread operator
 */
/**
 🔴 Problem 4: The "Deep Cleaner"
Goal: Deleting and Clearing.
Task:
Create a Map with 3 entries.
Use .keys() and a for...of loop to log only the names of the keys.
Delete one specific key from the Map.
Use .clear() to empty the Map entirely.
Check the .size to confirm it is 0
 */


