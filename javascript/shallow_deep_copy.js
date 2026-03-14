/**
 what is Clone Array :-

Cloning an array means creating a new array that contains the same elements as the original. 
This ensures that the new array is a different object in memory so that modifying it doesn't accidentally affect the original. 

Because arrays are reference types, simply using the assignment operator (e.g., let newArr = oldArr) only copies the memory
address (the pointer), meaning both variables still point to the same data. 

There are two ways to clone an array depending on how "deep" you need to go:-
 */

// Shallow Copy :-

/**
A shallow copy creates a new container (a new array) but only copies the items inside it one level deep.

If your array only contains simple things like numbers or strings, a shallow copy works perfectly. They are independent.
it is much faster than deep copy because it doesn't have to go in to nested one.

if i have primitive data types in the original array and then i do shallow copy then it will work perfectly fine and
it will not affect the original array but if my original array contains reference data types inside it then it will not work 
and my original array will also be affected.

How to make a Shallow Copy (The 3 most common ways) :-
1)Spread Operator (Most Modern):
let clone = [...original];
2)Slice Method (Old School):
let clone = original.slice();
3)Array.from:
let clone = Array.from(original);

Example 1 : With Primitive (Success!)
let original = ["Apple", "Banana"];
let shallowClone = [...original]; // This is a shallow copy(using spread opeartor)

shallowClone[0] = "Mango";

console.log(original);     // ["Apple", "Banana"] (Safe!, it doesn't change the original)
console.log(shallowClone); // ["Mango", "Banana"]

Example 2 : With Reference (Failure!)
let original = ["Task 1", ["Sub-task A", "Sub-task B"]];
let shallowClone = [...original];

// If we change the nested array...
shallowClone[1][0] = "HACKED"; 

console.log(original[1][0]); // "HACKED" -> It changed the original too!
 */

// Deep Copy :-

/**
 In a shallow copy, you only copied the "outer box." In a Deep Copy, you create a perfect, 100% independent replica of 
 everything—including every box inside the box.

 When you perform a deep copy, you are telling JavaScript: "Go through every single item. If you find an object or an array inside,
 don't just copy its address—create a brand-new version of it too."

 so basically dono methods i.e. shallow and deep copy ka purpose same hi hai i.e. original data should remain intact/same.
 bss dono alag alag data type pe kaam karta hai shallow one primitive type pe and deep one reference(jaha nested object/array ho) type pe. 
 so basically it depends on our use case.

 The Two Most Common Ways to Deep Copy :-

1. structuredClone(array) (Best Choice)
Pros: It’s built-in, fast, and handles almost everything (dates, nested arrays, etc.).
Cons: Doesn't work in very old browsers (pre-2022).

2. JSON.parse(JSON.stringify(array)) (The "Old School" Trick)
Before structuredClone, developers used this trick:
JSON.stringify: Turn the array into a big long String (Strings are primitives!).
JSON.parse: Turn that string back into a brand-new Array.
Pros: Works everywhere.
Cons: Destroys things that aren't "simple data" (like functions or undefined).
 */

// Examples :-

// Shallow Copying :-

// let user = { 
//   name: "John", 
//   address: { city: "New York" } 
// };

// // Shallow Copy
// let shallowUser = { ...user };

// shallowUser.name = "Doe";            // Primitives: SAFE (Original name stays "John")
// shallowUser.address.city = "London"; // Nested: DANGER (Original city becomes "London"!)

// Deep Copying :-
let user = { 
  name: "John", 
  address: { city: "New York" } 
};

// Deep Copy
let deepUser = structuredClone(user);

deepUser.address.city = "Paris";

console.log(user.address.city);     // "New York" (SAFE!)
console.log(deepUser.address.city); // "Paris"



/**
  Difference between 'structuredClone(array) (Best Choice' vs 'JSON.parse(JSON.stringify(array)) (The "Old School" Json Trick)'

  1. The Main Differences :-
  
                        Feature	JSON.parse(stringify)	                structuredClone()

Data Types	            Only simple data (Strings, Numbers).	        Almost all JS types (Dates, Sets, Maps).
Functions/Undefined	    Deletes them entirely.	                        Throws an error (so you know it failed).
Dates	                Turns them into Strings (Breaks them).	        Keeps them as Date Objects.
Circular Refs	        Crashes (Infinite loop error).	                Handles them perfectly.
Performance	            Slower (converts to string then back).	        Faster (native browser logic).
 */

