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
const m = new Map();
m.set('age',2)
console.log(m);

// console.log(m.get('a'), m.size);
