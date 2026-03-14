/** Topics included :-
 
 1) Arrays :-
        Push pop shift unshift
        Primitive vs reference data types
        Clone array & spread operator (Shallow and Deep Copy)
 */

// push, pop, shift, unshift :-

// 1)
// let arr = [1, 2, 3];
// let result = arr.push(4);

// console.log(arr);
// console.log(result);

//2)
// let arr = [10, 20, 30];
// let a = arr.shift();
// let b = arr.pop();

// console.log(a);
// console.log(b);
// console.log(arr);

// premitive vs referece data type :-

//1)
// let a = 10;
// let b = a;
// b = 20;

// console.log(a);
// console.log(b);

//2)
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr2.push(4);

// console.log(arr1);
// console.log(arr2);

/**
 3) 6️⃣ Memory Concept Question (Important for 4-year exp)

Explain:
Where are primitives stored?
Where are reference types stored?
What actually gets copied when you do arr2 = arr1?
(Be ready to explain stack vs heap clearly in interview language.)
*/ 

// Clone Array and Spread opeartor :-

//1)
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];

// arr2.push(4);

// console.log(arr1);
// console.log(arr2);

//2)
// let arr1 = [[1,2], [3,4]];
// let arr2 = [...arr1];

//  arr2[0][0] = 999;

// console.log(arr1);
// console.log(arr2);

//3)
// What is wrong with this deep copy approach?
// let deepCopy = JSON.parse(JSON.stringify(arr));
// When can it break?

/**
 * 4) 1️⃣3️⃣ Real Interview Scenario

You are working on backend Node.js service.
You receive an array of objects from DB.

You clone it using spread:

let cloned = [...dbData];

Later some nested object gets mutated and original DB data also changes.

Explain:
Why it happened?
How would you fix it in production code?

Answer :-
Most probably chances are that it happended because we did shallow copy and not deep copy. if our backend data contains nested 
objects or arrays then shallow copy wouldn't be suffiecent. we must use deep copy here. i will use 'structuredClone()' method
to copy here and not spread opearator.

 */

//5) 
/**
 * Performance Question (Very Important)

If you need to:
Add element at start of array frequently
Add element at end frequently

Which is better and why?
Explain in terms of time complexity and internal working.

Answer :-  I will do it later because it is lengthy.
 */

/*6)
 let a = { value: 10 };
 let b = a;

 b.value = 20;

 console.log(a.value);
 console.log(b.value);

 Now explain:

What exactly is stored in stack?

What exactly is stored in heap?

What does b = a actually copy?
*/

/**
 * 7) 
 * let arr = [1, 2, 3];

function modify(array) {
  array.push(4);
}

modify(arr);

console.log(arr);

Why did original array change?

Now modify the function so that original array does NOT change.
 */


/**
 8) 
 let arr = [1, 2, 3];

function reassign(array) {
  array = [10, 20, 30];
}

reassign(arr);

console.log(arr);

Why didn’t original array change here?

Explain difference between:
Mutating object
Reassigning reference
This question is VERY common for experienced devs.

Answer :-
Because we are directly reassigning/replacing arr and not mutating it. that's why here original arr remains same. if you 
mutate the original arr for e.g. arr.push() or arr[0]='something'. then arr will change.

NOTE :- 
Reassigning (array = ...): Cuts the connection to the original memory and points to a new spot. The original remains safe.
Mutating (array[0] = ...): Follows the pointer to the original memory and changes the data inside. The original is modified.
 */

/**
 9) 
 let a = [];
 let b = [];

console.log(a === b);
Why is this false?

Answer :-
Stack vs. Heap concept :-
let a = [];//JavaScript creates an empty array at Address-001 (for e.g.).
let b = [];//JavaScript creates a second empty array at Address-002.
The variables a and b don't actually hold the empty array; they hold the Address to those boxes.
a stores Address-001 and b stores Address-002.

Since these are two different locations in memory, the result is false. It doesn't matter that the "boxes" are both empty; they are different boxes.

 */

/**
 10)
 let a = [];
let b = a; // b now points to the same "person" (Address-001)

console.log(a === b); // true because now address is same in both.
 */

/**
 11) You receive this data from MongoDB:-
 let user = {
  name: "Ankur",
  skills: ["Node", "Mongo"]
};
let copy = user;
copy.skills.push("React");
console.log(user.skills);

This is dangerous because it will change the original data. which can cause invalid data in other places.
so always use shallow or deep copy to copy from original data. so correct answer will be ,
let copy = structuredClone(user);
copy.skills.push("React");
console.log(user.skills);
 */

/**
 12) 
 Explain the difference between:
Pass by value
Pass by reference
Pass by sharing (actual JavaScript behavior)

Answer :-
1. Pass by Value :-
In this model, the function gets a complete, independent copy of the data. 
Behavior: If you change the value inside the function, the original outside stays exactly the same.
In JS: This is how Primitives (Number, String, Boolean) work.
Analogy: You give someone a photocopy of a document. They can scribble on it, but your original document is safe

2. Pass by Reference :-
In this model, the function gets the actual variable itself. 
Behavior: If you reassign the variable inside the function, the original variable outside is redirected too.
In JS: JavaScript does NOT do this. (Languages like C++ or C# can do this using special syntax).
Analogy: You give someone your only key to a house. If they use the key to move all the furniture to a new house, your key now opens a house with different furniture

3. Pass by Sharing (JavaScript's Reality) :-
This is how JavaScript handles Objects and Arrays. The "value" being passed is actually the Reference (the pointer) to the object in the Heap. 
Behavior 1 (Mutation): If you "reach inside a function or object or anything" and change a property, the original is affected because you both share the same object in the Heap. ✅
Behavior 2 (Reassignment/Replacing): If you try to point the variable to a new object (arr = [...]), you are only changing the local pointer. The original pointer outside still points to the old object. ❌ 
Analogy: You give someone a copy of your house key.
If they go inside and paint your walls red (Mutation), your house is now red.
If they throw away their copy of the key and buy a key for a different house (Reassignment), your house is still exactly the same.
 */

/**
 13) let user = {
  name: "Ankur",
  address: {
    city: "Delhi"
  }
};

let clone = { ...user };

clone.address.city = "Mumbai";

console.log(user.address.city);
console.log(clone.address.city);

 */
/**
 14)
 let arr1 = [{ id: 1 }, { id: 2 }];
let arr2 = [...arr1];

arr2[0].id = 999;

console.log(arr1);
console.log(arr2);
 */

/**
 15) let obj = {
  name: "Ankur",
  age: undefined,
  greet: function () { console.log("Hi"); },
  createdAt: new Date()
};

let deepCopy = JSON.parse(JSON.stringify(obj));
console.log(deepCopy);

What happens here?
What gets lost?
Why?
 */

/**
 16) 
 You receive:
 let dbData = await User.find();
let cloned = [...dbData];

Later someone mutates nested property inside cloned.
Explain:
Why this is risky with ORMs like Mongoose
What unexpected bugs can happen
Best production-safe way to clone or transform DB data
 */

/**
 17) VVI
 let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  arr.push(arr[i]);
}
console.log(arr);
 */

/**
 18) VVI
 let arr = [1, 2, 3, 4];
 arr.forEach((item, index) => {
 arr.pop();
});

console.log(arr);
 */

/**
 19)
 const arr = [1, 2, 3];
arr.push(4);

console.log(arr);
Why is this allowed?

const arr = [1, 2, 3];
arr = [10, 20];
Why is this NOT allowed?
Explain difference between:
Mutating content
Reassigning binding
 */

/**
 20) Sparse Arrays (Very Advanced)
let arr = [];
arr[100] = 10;

console.log(arr.length);
 */

/**
 21)
 let arr = [1, 2, 3, 4];
delete arr[1];

console.log(arr);
console.log(arr.length);

What happens here?
Why is delete dangerous for arrays?
What should be used instead?

Study delete vs splice()
 */

/**
  22)
 🔥 Part 4 – Senior Production Scenario (VVI) :-

You’re debugging a memory leak in Node.js.
You notice:
Large arrays growing
References not getting garbage collected
Explain:
How references prevent GC
How shallow copy mistakes can cause memory retention
Best practices to avoid this in backend services
*/

/*
23) Ultimate Senior Question (VVI)

If you had to explain to interviewer:

“Why understanding reference behavior in JavaScript is critical in large-scale backend systems?”

What would you say?
 */

//////////////////////////////////////////////////////RAPID FIRE///////////////////////////////////////////////////////////////
/**
 1) predict output 
 console.log([...'abc']);
 */

 /**
  2) predict output
let a = [1,2];
let b = a.concat();
b.push(3);
console.log(a, b);

  */

/**
 3) predict output
 let arr = [1,2,3];
arr.length = 0;
console.log(arr);
 */

/**
 4) predict output
 console.log([2, 10, 3].sort());
 */

/**
 5) 
 What does delete arr[1] do to the array and length? What to use instead to remove an element and keep array dense?
 */

 /**
  6)
  const a = [1,2];
const b = a;
b[0] = 99;
console.log(a === b, a);

  */

/**
 * 7)
Write a one-liner to flatten one level from [[1],[2,3],4] 
*/

/**
 * 8)
 let arr = [1,2,3];
arr[5] = 10;
console.log(arr.length, arr);
 */




