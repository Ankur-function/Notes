/**
 🧠 What is “Scope” in JavaScript?

👉 Scope =

“Where a variable is accessible in your code”

🎯 Types of Scope in JavaScript

There are mainly 3 types:

1. Global Scope
let a = 10;

👉 a is accessible everywhere

2. Function Scope
function test() {
    let b = 20;
}

👉 b is only accessible inside that function

3. Block Scope (for let and const)
if (true) {
    let c = 30;
}

👉 c is only accessible inside { }

🔥 Now the MOST IMPORTANT PART
👉 What CREATES scope?
✅ Creates scope:

1) Functions

2) Blocks ({}) → for let & const

3) Global execution

❌ Does NOT create scope:-
🚫 Objects
let obj = {
    name: "ankur",
    age: 25
}

👉 This does NOT create a new scope

🎯 Why?

Because:

Object is just a data structure, not an execution context

🧠 What is an Execution Context?

👉 Execution context =

“Environment where code runs”

Types:

Global Execution Context

Function Execution Context

👉 When JS runs code:

let obj = {
    printName: () => {}
}

👉 This runs in:

Global Execution Context
 */


{// curly braces introduces scope.
}

// let b = 300;
// if (true) {
//     const a =10;
//     let b =20;
//     var c =30;
//      d =40; // same as var
// console.log(b); // gives 20

// }
// console.log(a);// this gives an error.perfectly fine
//  console.log(b);// this also gives an error for inner b and 300 for outer b . perfectly fine
// console.log(c);// it give '30'. so here is the problem.
// console.log(4);// it give '40'. so here is the problem.


//Note :- scope is different when you run your code directly in to browser console and when you run code through command node file_name.js

// function one(){
//     const username = 'ankur';

//     function two(){
//         const website = "youtube";
//         console.log(username);
//     }
//     console.log(website); // yhi pe error de diya so two() execute hi nhi hoga. because line by line code execution hota hai JS me.
//     two()
// }
// one();

/*Note :- 
In case of nested functions we can access outer function variables from inner function but vice verso is not true. we can't access inner function variables from outer function.
Similarly in case of if else conditions same phenomena happens.
*/

// if (true) {
//     const username = "ankur"
//     if (username === "ankur") {
//         const website = " youtube"
//         console.log(username + website); 
//     }
  // console.log(website);// gives error  
// }
// console.log(username);// gives error

//--------------------------------------------- scope difference for funciton declaration vs function expression -------------------------

console.log(one(1));
function one(num){// function declaration
    return num+1;
}

// console.log(two(2));// gives error can't access two before intialization
const two = function(num){// function expression. here we store function value inside a variable.
     return num+2;
}
console.log(two(2));// works fine

//Note:- function declaration and expression don't work in a same way.

