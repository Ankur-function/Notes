/**
 * Topics :-
For of loop
For in loop
Array destructuring
 */

/**
 1)
 let arr = ["a", "b", "c"];

for (let value of arr) {
  console.log(value);
}
 */

/**
2)
 let arr = ["a", "b", "c"];

for (let index in arr) {
  console.log(index);
}
 */

/**
 3)
 let obj = { a: 1, b: 2 };

for (let value of obj) {
  console.log(value);
}
 */

/**
 4)
Array.prototype.extra = "Hello";
let arr = [10, 20];
for (let key in arr) {
  console.log(key);
}
 */

/**
 5)
 let arr = [1, 2, 3];

for (let num of arr) {
  num = num * 2;
}
console.log(arr);
 */

/**
 6)
 let arr = [10, 20, 30];
let [a, b] = arr;

console.log(a, b);
 */

/**
 7)
 Write destructuring to extract only 1st and 3rd element from:
let arr = [100, 200, 300, 400];
 */

/**
 8)
 let arr = [1];
let [a, b = 10] = arr;

console.log(a, b);
 */

/**
 9)
 let arr = [1, [2, 3]];
let [a, [b, c]] = arr;
console.log(a, b, c);

 */
/**
 10)
let users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];
for (let u in users) {
  console.log(users[u].name);
}
 */

/**
 11)
 * What is the difference between:-
 
traditional for loop
for...of
forEach

Why?
 */










