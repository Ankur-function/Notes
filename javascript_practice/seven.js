/**
 Topics covered :-
 ForEach
 map
 filter
 reduce
 */

 /**
  const arr = [1,2,3];
arr.forEach((v,i,a) => {
  if (v === 1) a.push(4);
});
console.log(arr);
  */
/**
 const r = [1,2,3].forEach(x => x * 2);
console.log(r);
 */
/**
 VVI (i will do this later)
 const arr = [1,2,3];
async function run() {
  arr.forEach(async n => {
    await new Promise(r => setTimeout(r, 10));
    console.log('done', n);
  });
  console.log('after loop');
}
run();
 */
/**
 * VVI
 Array.prototype.extra = 99;
const a = [0, , 2]; // sparse: hole at index 1
const out = [];
a.forEach((v,i) => out.push(i + ':' + v));
console.log(out);
 */
/**
 const a = [1,2,3];
const b = a.map((v,i) => { if (v % 2 === 0) return; return v * 2; });
console.log(b);
 */
/**
 * VVI
 const ctx = { m: 10 };
function fn(v){ return v + this.m; }
const res = [1,2].map(fn, ctx);
console.log(res);
 */
/**
 VVI
 You have an array of user objects; you must produce a new array of usernames uppercase for users older than 18, using a single expression (no loops, no mutation). Input:
const users = [{name:'a', age:17},{name:'b', age:19}];
 */
/**
 * VVI
 const a = [];
a[2] = 3;
const b = a.map(x => x * 2);
console.log(0 in b, 1 in b, 2 in b, b);
 */
/**
 * const a = [0, 1, false, '', 'ok', null, undefined];
console.log(a.filter(Boolean));
 */
/**
 const a = [1,2,3,4];
const res = a.filter(v => {
  if (v === 2) a.push(5);
  return v % 2 === 0;
});
console.log(res, a);yet
 */
/**
 VVI
 You need to filter unique objects by id while preserving original order. Given:
const items = [{id:2},{id:1},{id:2}];
 */
/**
 * VVI
 const a = [ , 2 , , 4 ]; // holes at 0 and 2
const r = a.filter(v => v !== undefined);
console.log(r);
 */
/**
[].reduce((a, b) => a + b, 0); 
 */
/**
 VVI , i will do later after learning these concepts.
 const nums = [1, 2, 3];
console.log("Start");
nums.forEach(async (num) => {
  const result = await Promise.resolve(num * 2);
  console.log(result);
});

console.log("End");
 */
/**
 const arr = [1, , 3]; // Notice the empty slot
let count = 0;

arr.forEach((num) => {
  count++;
});
console.log(count);
 */
/**
 const nums = [1, 2, 3, 4];
nums.forEach((num) => {
  if (num === 2) return;
  console.log(num);
});
 */

/**
 Scenario A: The loop is inside a function
If the loop is inside a function, return will exit the entire function immediately. This means the loop stops, and any code after the loop (inside that function) is ignored.
javascript
function testLoop() {
  const nums = [1, 2, 3, 4];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2) return; // Exits the WHOLE function
    console.log(nums[i]);
  }
  console.log("Will this line be printed or not");
}
testLoop();
 */
/*
function testLoop() {
  const nums = [1, 2, 3, 4];
  nums.forEach((item) => {
    if (item === 2) return; // how this line behaves in case of HOF
    console.log(item);
  })
  console.log("Will this line be printed or not");
}
testLoop();
*/

/**
 VVI
 const chars = ['a', 'b', 'c'];
const result = chars.forEach(char => char.toUpperCase()).reverse();
 */
/**
 const multiplier = {
  factor: 10,
  multiply(arr) {
    arr.forEach(function(num) {
      console.log(num * this.factor);
    }, this); // Passing 'this' as the second argument
  }
};
multiplier.multiply([1, 2, 3]);
 */
/**
 const result = ['1', '7', '11'].map(parseInt);
console.log(result);
 */
/*
VVI
What happens to the original array after map runs?

const original = [{ val: 1 }, { val: 2 }];
const doubled = original.map(obj => {
  obj.val = obj.val * 2;
  return obj;
});
console.log(original[1].val);
*/
/**
 const nums = [1, 2, 3];
const mapped = nums.map(n => { n * 2 });
console.log(mapped);
 */
/**
 * VVI
 const zeros = new Array(3).map(() => 0);
console.log(zeros);
 */
/*
VVI
const zeros = [undefined,undefined,undefined].map(() => 0);
console.log(zeros);
*/
/**
 VVI
 const arr = [1, 2, 3];
const result = arr.map((num, index, array) => {
  if (index === 0) arr.push(4);
  return num * 2;
});
console.log(result.length);
 */
/**
 const users = [{ name: 'Alice', age: 25 }, { name: 'Bob' }];
const adults = users.filter(user => user.age >= 18);
console.log(adults.length);
 */
/**
 VVI
 const nums = [1, 2, 3];
const filtered = nums.filter(n => n * 2);
console.log(filtered);
 */
/*
const nums = [0, 2, 3];
const filtered = nums.filter(n => n * 2);
console.log(filtered);
*/
/**
 * VVI
 const sparse = [1, , 3];
const dense = sparse.filter(n => true);
console.log(dense.length);
 */
/*
const arr = [10];
const sum = arr.reduce((acc, curr) => acc + curr);
console.log(sum);
*/
/**
 * VVI
 const arr = [];
const sum = arr.reduce((acc, curr) => acc + curr);
 */
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

 
 
