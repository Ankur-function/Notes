/**
 Topics Covered :-
 Slice
 Splice
 */

 /**
  const a = [0,1,2,3,4];
console.log(a.slice(1, 4));
console.log(a.slice(-3, -1));
  */
/**
 VVI
 const s = "abcdef";
const a = ['a','b','c','d','e','f'];
console.log(s.slice(2,5)); // string
console.log(a.slice(2,5)); // array
 */
/**
 * VVI
 const original = [{x:1},{x:2},{x:3}];
const part = original.slice(0,2);
part[0].x = 99;
console.log(original[0].x, part[0].x);
 */
/**
 const arr = [1,2,3,4];
console.log(arr.slice(2));    // ?
console.log(arr.slice(-2));   // ?
console.log(arr.slice(2, 100)); // ?
 */
/**
 const ta = new Int16Array([10,20,30,40]);
const sub = ta.slice(1,3);
sub[0] = 999;
console.log(ta[1], sub[0]);
 */
/**
 VVI
 const arr = [0,1,2,3,4];
console.log(arr.slice('2', '4'));   // ?
console.log(arr.slice('foo', 'bar')); // ?
 */
/**
 const a = [1,2,3,4,5];
const removed = a.splice(1,2, 9,9);
console.log(removed); // ?
console.log(a);       // ?
 */
/**
 const arr = [0,1,2];
const r = arr.splice(0, arr.length);
console.log(r, arr.length); // ?
 */
/**
 const a = [10,20,30,40,50];
a.splice(-2, 1, 99);
console.log(a); // ?
 */
/**
 const a = [1,2,3,4,5];
for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0) a.splice(i,1);
}
console.log(a);
 */
/**
 * VVI
 const team = [
  { role: 'dev' }, 
  { role: 'designer' }, 
  { role: 'manager' }
];

/
const newTeam = team.slice(0, 2);

newTeam[0].role = 'lead dev';

newTeam.splice(1, 1, { role: 'qa' });

console.log("A:", team[0].role);
console.log("B:", team[1].role);
console.log("C:", team.length);
 */
/**
 * VVI
 const nums = [1, 2, 2, 3, 4, 2, 5];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 2) {
    nums.splice(i, 1); 
  }
}
console.log(nums);

Your Task:
1. What is the actual output of this code?
2. How would you fix the for loop so that it safely removes all the 2s using splice?
 */
/**
 * VVI
 const users = ['Alice', 'Bob', 'Charlie'];
const newUser = 'Batman';
const targetIndex = 1; 

function immutableInsert(arr, item, index) {
  // YOUR CODE HERE
  // You must use slice() to build the new array.
}

const updatedUsers = immutableInsert(users, newUser, targetIndex);

console.log(updatedUsers); // Expected: ['Alice', 'Batman', 'Bob', 'Charlie']
console.log(users);        // Expected: ['Alice', 'Bob', 'Charlie'] (Untouched!)
 */