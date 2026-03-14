/**
 Topics :-
1) Object Destructuring
2) Objects inside Array
3) Nested Destructuring
 */

// Object Destructuring :-

/**
 const person = { name: 'Alice', age: 30 };
const { name, age } = person;
console.log(name + ' is ' + age + ' years old');
 */

/**
 const book = { title: 'JS Basics', year: 2020 };
const { author = 'Unknown' } = book;
console.log(author);
 */

/**
Write code to destructure an object car = { make: 'Honda', model: 'Civic', price: 20000 } into variables make and price,
then log their product (make is string, so concatenate or handle accordingly, but compute price * 2 instead and log).
 */

/**
 const data = { x: 10, y: 20 };
const { x: first, y: second } = data;
console.log(first * second);
 */

/**
 const config = { timeout: 5000 };
const { timeout, retries = 3 } = config;
console.log(timeout / retries);
 */

/**
 * VVI
 Write a function getCoords that takes an object like { lat: 40.7, lng: -74 }, destructures into lat and lng, computes distance from origin
(Math.sqrt(lat2 + lng2)), and returns it rounded to 2 decimals. Test with sample and log.
 */

/**
 const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(a + rest.b + rest.c);
 */

/**
 function sum({ num1 = 0, num2 = 0 }) {
  return num1 + num2;
}
console.log(sum({ num1: 5 }));
console.log(sum({}));
 */

/**
 Implement a function processUser that takes an object like { id: 1, details: { score: 85 } }, uses destructuring in params to extract id and score 
 (with default score 0), computes id * score, returns it. Handle missing details. Test with { id: 2 } and log 0.
 */

 //Objects inside array(most questions of this topic uses HOF so i will cover this topic later) :-
 
 /**
  const users = [{ name: 'Bob' }, { name: 'Charlie' }];
console.log(users[0].name);
console.log(users[1].name.length);
  */
 /**
  * VVI
  const key = 'score';
const obj = { score: 10, other: 5 };
const { [key]: s } = obj;
console.log(s);

  */
 /**
  const o = { a: { b: undefined } };
const { a: { b = 5 } } = o;
console.log(b);
  */
 
/**
 const o = { x: null };
const { x: value = 7 } = o;
console.log(value);
 */

/**
 * VVI
 const o = { scores: [10,20,30] };
const { scores: [first, , third] } = o;
console.log(first, third);
 */
/**
 const arr = [{x:1}, {x:2}];
const a = arr[0];
a.x = 9;
console.log(arr[0].x);

 */

//Nested Destructuring :-

/**
 const person = { name: 'David', address: { city: 'London' } };
const { address: { city } } = person;
console.log(city);
 */

//One-liner: extract id from first element of results = [{id:5}].

/**
 const obj = { x:[10,20,30] };
const { x: [, second] } = obj;
console.log(second);

 */
/**
 const data = { coords: { x: 5, y: 10 } };
const { coords: { x, y, z = 0 } } = data;
console.log(x + y + z);
 */

/**
 const nested = { outer: { inner: 42 } };
const { outer: { inner: value } } = nested;
console.log(value * 2);
 */
/**
 const {profile:{name,age}}={ profile: { name: 'Eve', age: 25 }}
 */

/**
 * VVI
const obj = { group: { members: [{ score: 10 }, { score: 20 }] } };
const { group: { members: [, { score }] } } = obj;
console.log(score); 
 */

/**
 const config = { settings: { theme: 'dark', colors: { primary: 'blue', secondary: 'green' } } };
const { settings: { colors: { primary, ...others } } } = config;
console.log(primary + ' ' + others.secondary);
 */

/**
 VVI
 Complex destructuring challenge — from data extract currentPage, limit, firstUserName in one statement:

const data = {
  meta: { pagination: { page: 2, perPage: 10 } },
  results: [{id:1, user:{name:'A'}}, {id:2, user:{name:'B'}}]
};
 */

/**
 Implement a function parseNested that takes { data: { metrics: { count: 100, avg: 4.5 } } }, uses nested destructuring in params to extract
count and avg, computes total (count * avg), handles missing with defaults (count=0, avg=0), returns it. Test with partial object and log.
 */

/**
 const { a } = null;
console.log(a);
 */

/**
 Destructure in for...of — one-liner to log ids:
const arr = [{id:1},{id:2},{id:3}];
 */

/**
 const o = { v: undefined };
const { v: value = 5 } = o;
console.log(value);
 */

/**
 let a;
({ a } = { a: 3 });
console.log(a);
 */

/**
 const d = { info: [{id:1, vals:[10,20]}] };
const { info: [{ vals: [first] }] } = d;
console.log(first);
 */

/**
const data = {
  meta: { page: 2 },
  results: [{id:1, scores:[9,8]}]
};
Write one destructuring statement to get page, firstId, firstScore.
 */

