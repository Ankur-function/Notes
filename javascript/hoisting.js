/**
 Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value
 without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.
 */

//Example 1:-
// getName(); // Namaste Javascript
// console.log(x); // undefined
// var x = 7;
// function getName() {
//   console.log("Namaste Javascript");
// }
//Example 2:-
getName(); // Namaste JavaScript
console.log(x); // Uncaught Reference: x is not defined.
console.log(getName); // f getName(){ console.log("Namaste JavaScript); }
function getName() {
  console.log("Namaste JavaScript");
}

