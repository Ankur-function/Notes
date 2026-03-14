/**
 * Note :- If you stuck in any problem then don't move ahead until you study about it makes notes of the concept used in 
 * question so that next similar problem will be solved easily.
 * 
 Topics :-
Intro to objects
Dot vs Bracket Notation
Iterate objects
Computed properties
 */

/**
 1)
 Create an object person with name, age, and a method greet() that prints "Hi, I'm <name>". Show code.
 */
/**
 2)
 const o = { a: 1 };
 o.newProp = 5;
console.log(o.a, o["a"]);
 */

/**
 3)
 How do you delete a property? What does the operation return? Show code.
 */

 /**
  4) VVI
  const proto = { z: 3 };
const o = Object.create(proto);
o.x = 1;
o.y = 2;
for (let k in o) console.log(k);
console.log(Object.keys(o));
  */

/**
 5)
 Property descriptors: What are writable, enumerable, and configurable? Give an example using Object.defineProperty 
 to create a non-enumerable property.
 */

 /**
  6)
  const o = { 1: 'one', 2: 'two', a: 'A' };
console.log(Object.keys(o));

  */
/*
const key = 'score';
const obj = { [key + 1]: 10, [key]: 5 };
console.log(obj);

 */
/**
 Object.prototype.polluted = 'p';
const o = { a: 1 };
for (let k in o) console.log(k);
 */

/**
 const arr = ['x','y'];
for (let i in arr) console.log(typeof i, i);
 */

/**
 let a = [1,2,3];
let b = a;
b.push(4);
console.log(a.length, a[a.length-1]);
 */

/**
 const obj = {0:'zero', 2:'two', 1:'one'};
console.log(Object.keys(obj).join(','));
 */

/**
 let arr = [1,2,3];
for (let num of arr) { num = num * 2; }
console.log(arr);
 */

//let arr = [1,2,3];
// for (let i=0;i<arr.length; i++)
//      { arr[i] = arr[i] * 2; }
// console.log(arr);

/**
 let arr = [1,2,3,4];
arr.length = 2;
console.log(arr, arr[2]);
 */

/**
 let obj = {a:1};
Object.defineProperty(obj, 'b', { value:2, enumerable:false });
console.log(Object.keys(obj));
for (let k in obj) console.log(k);
 */

/**
 const a = [1,2];
const b = [...a, 3];
a[0] = 99;
console.log(a, b);
 */

/**
 * VVI
 const key = Symbol('k');
const o = { a: 1 };
o[key] = 42;
console.log(Object.keys(o), Object.getOwnPropertyNames(o), Object.getOwnPropertySymbols(o));
 */

/**
 const o = { '2': 'two', a: 'A', '1': 'one' };
console.log(Object.keys(o).join(','));
 */

/***
 Fix bug: The function should return a new object with only own enumerable properties from src,
but current code copies prototype props too. Provide minimal fix.

function safeClone(src){
  return Object.assign({}, src);
}
 */

/**
 const proto = { inherited: "I am from prototype" };
const src = Object.create(proto); // src inherits 'inherited'
src.own = "I am own property";

function safeClone(src) {
  return Object.assign({}, src);
}

const result = safeClone(src);

console.log(result.own);       // "I am own property"
console.log(result.inherited); // undefined (Correct: Prototype was ignored)
 */

/**
 const user = { name: 'A', skills: ['N','M'] };
const clone = {...user};
clone.skills.push('R');
console.log(user.skills);
 */

/**
 * VVI
 const key = 'x';
const o = { [key]: 1, key: 2 };
console.log(o.x, o['key']);
 */

/**
 * VVI
 const o = {};
o['__proto__'] = { hacked: true };
console.log(o.hacked, o.__proto__ === Object.prototype);
 */
/**
 * VVI
 Object.prototype.test = 't';
const arr = [{a:1}];
for (let i in arr) {
  console.log(i, arr[i]);
}
delete Object.prototype.test;
 */

/**
 let arr = [{v:1}, {v:2}];
let res = arr.map(o => ({ ...o }));
arr[0].v = 99;
console.log(res[0].v); // prints what?
 */

/**
 const obj = { a: 1, b: 2 };
function update(obj) {
  obj.a = 3;
}
update(obj);
console.log(obj.a);
 */

/**
 * VVI
 Implement a function mergeObjects that takes two objects and returns a new object with summed numeric values for matching keys
(e.g., {a:1, b:2} and {b:3, c:4} becomes {a:1, b:5, c:4}). Handle non-numeric values by overwriting. 
Test with sample inputs and log the result.
 */

/**
 * VVI
 const data = { 1: 'one', key: 'value' };
console.log(data.1); // What happens here?
console.log(data['1']);
 */

/**
 const prop = 'age';
const person = { name: 'Eve', age: 25 };
console.log(person.prop);
console.log(person[prop]);
 */

/**
 const invalidKey = '123abc';
const obj = {};
obj.invalidKey = 10; // But wait...
obj[invalidKey] = 20;
console.log(obj.invalidKey + obj['123abc']);
 */


 /**
  const key1 = 'a' + 1;
const key2 = 'a1';
const obj = {};
obj.key1 = 100;
obj[key2] = 200;
console.log(obj.a1);
  */

/**
 VVI
 const sym = Symbol('key');
const obj = { [sym]: 42, normal: 10 };
console.log(obj.normal);
console.log(obj[sym]);
console.log(obj.sym); // What here?
 */

/**
 const fruits = { apple: 5, banana: 3 };
for (let key in fruits) {
  console.log(key + ': ' + fruits[key]);
}
 */

/**
 const obj = { a: 1, b: 2 };
Object.prototype.extra = 100;
let count = 0;
for (let key in obj) {
  count += obj[key];
}
console.log(count);
 */
/**
 const obj = { 2: 'two', 1: 'one', a: 'A', 10: 'ten' };
console.log(Object.keys(obj).join(',')); // and also tell in what order ??
 */

/**
 VVI (i will do later after studying recursion)
 const nested = { a: 1, b: { c: 2, d: 3 } };
let total = 0;
function sumNested(o) {
  for (let k in o) {
    if (typeof o[k] === 'object') sumNested(o[k]);
    else total += o[k];
  }
}
sumNested(nested);
console.log(total);
 */

/**
 VVI (i will do later while doing DSA)
 Implement a function flattenObject that iterates recursively over a nested object and returns a flat object with dot-separated
 keys (e.g., { a: { b: 1 } } -> { 'a.b': 1 }). If values are numbers, sum if keys collide.
 Test with nested nums and log the flat version.
 */
/**
 const key = 'color';
const obj = { [key]: 'red' };
console.log(obj.color);
 */

/**
 const prefix = 'item';
const obj = { [prefix + '1']: 10, [prefix + '2']: 20 };
console.log(obj.item1 + obj.item2);
 */
/*
const arr = ['key1', 'key2'];
const vals = [100, 200];
const obj = {};
arr.forEach((k, i) => obj[k] = vals[i]); // But use computed?
console.log(obj.key1 + obj.key2);
*/

/**
 VVI
 Write a function buildObject that takes an array of numbers, creates an object with keys like 'num-1', 'num-2', etc., 
 values as squares, and returns it. Test with [3,4] and log { 'num-1':9, 'num-2':16 }.
 */
