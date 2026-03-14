// function addTwoNumber(a,b) { // most common syntax. here a,b are called as parameters
//     console.log(a+b);
//     return a+b;
// }
// addTwoNumber(1,2); // here 1,2 are arguments.

// function calculateCartPrice(...num){ // this is rest operator ye saare arguments ko ek bundle ki jaise ek array me patak dega..

//     return num
// }
// console.log(calculateCartPrice(200,300,400,500,600));

 //note :- rest and spread opeartor are same bss use case pe depend karta hai ki kab usko rest ya spread bolenge.

// function calculateCartPriceSecond(num1,num2,...num){ //here 1st and 2nd argument goes to num1 and num2 and rest are now inside num array.

//     return num
// }
// console.log(calculateCartPriceSecond(200,300,400,500,600));

// const user = {
//     name:'ankur',
//     price: 7500
// }

// function handleObject(anyObject){
//      console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
     
// }
// handleObject(user);

//-----------------------------------------------------Functions In detail----------------------------------------------------------
/**
In JavaScript, the way you define a function changes how it behaves—specifically regarding hoisting, the this keyword, and syntax.

Here is the breakdown of the three main types of functions.

1. Function Declaration
A function declaration (also called a function statement) is the "classic" way to define a function.

Syntax
JavaScript
function greet(name) {
  return `Hello, ${name}!`;
}
Key Characteristics
Hoisting: These are fully hoisted. You can call the function before you define it in your code.

The this context: It creates its own this context based on how it is called.

Readability: They are often preferred for top-level logic because they stand out.

Example
console.log(calculateArea(5, 10)); // Works! (Hoisted)

function calculateArea(width, height) {
  return width * height;
}

2. Function Expression
A function expression is when you create a function and assign it to a variable.

const greet = function(name) {
  return `Hello, ${name}!`;
};
Key Characteristics :-
Hoisting: They are not hoisted. If you try to call it before the line where it's defined, you will get a ReferenceError (or TypeError).

Anonymous: They are usually anonymous (no name after the function keyword), though you can name them for better stack traces.

Control: Useful when you want to pass a function as an argument or limit its scope.

// console.log(multiply(2, 3)); // Error: multiply is not defined
// console.log(multiply) // it will give you undefined and not error

const multiply = function(a, b) {
  return a * b;
};

3. Arrow Functions
Introduced in ES6, arrow functions provide a shorter syntax and handle the this keyword differently.

const greet = (name) => `Hello, ${name}!`;

Key Characteristics :-
No this binding: This is the most important part. Arrow functions do not have their own this. They inherit this from the surrounding (lexical) scope.

Implicit Return: If the function is a one-liner, you can omit the return keyword and the curly braces.

Not Hoisted: It is also anyway is Function expression,so they must be defined before use so It will also throw an error if you try to call it before the line where it is defined.

No arguments object: They don't have their own arguments object; use rest parameters (...args) instead.

const square = (n) => n * n; // Concise
const user = {
  name: "Gemini",
  // Standard function: 'this' refers to user
  sayHi: function() { console.log(this.name); }, 
  
  // Arrow function: 'this' refers to the global/outer scope
  sayHiArrow: () => { console.log(this.name); } 
};
user.sayHi();      // "Gemini"
user.sayHiArrow(); // undefined

Feature,        Function Declaration,       Function Expression,                  Arrow Function
Hoisted,                Yes                          No                             No
this Binding,       Own this,                       Own this                        Lexical (inherited)
Syntax             function name() {},          const x = function() {},            const x = () => {}
Ideal Use Case     "Global logic, methods"     "Callbacks, scoped logic"           "Short logic, preserving this"

Pro-Tips for Problem Solving :-
Check for Hoisting: If you see a function being called at the top of a file, it must be a Declaration.

Look for this: If you are inside a class or an object and need to access properties, use a Declaration or Expression. If you are inside a setTimeout or a callback and want to keep the "outer" this, use an Arrow Function.

Use const: Always use const for Expressions and Arrow Functions to prevent accidental re-assignment.

Hoisting Trap :-

The var Trap (The "Partial" Hoist) :-
If you define a function expression using var, the variable name is hoisted, but the function assignment is not.

console.log(myFunc); // Output: undefined
// myFunc();         // TypeError: myFunc is not a function

var myFunc = function() {
  console.log("Hello!");
};
Why? JavaScript sees var myFunc; and moves it to the top, initializing it as undefined.
The Problem: You can't "call" undefined. This leads to a TypeError.

'this' keyword Trap :-

This is the most common source of bugs in JavaScript. The fundamental difference is where the this keyword gets its value:
is it decided when the function is called, or when the function is defined?

1. Function Declarations & Expressions: "Dynamic Binding" :-
For both standard declarations and expressions, the value of this is dynamic. It depends entirely on how the function is invoked.

As an Object Method: this points to the object before the dot.
As a Simple Function Call: In non-strict mode, this points to the window (global) object. In 'use strict', it is undefined.
With .call(), .apply(), or .bind(): You can manually force this to be whatever you want.

also remember this only works when we need to access object property not in case of nested functions.

The "Loss of Context" Problem :-
This is a classic interview trap. Look what happens when a method is passed as a callback:

const user = {
  name: "Alice",
  greet: function() {
    console.log("Hi, I am " + this.name);
  }
};
user.greet(); // "Hi, I am Alice" (Working)
const detachedGreet = user.greet; // yha pe greet() function ko store kara diye ek new variable me so ab user object to raha hi nhi.
detachedGreet(); // "Hi, I am undefined" (Broken!)

Note :-
Think of 'this' as a placeholder that says: "Who is currently responsible for calling me?"

The "Who Called Me?" Rule
For Declarations and Expressions, this refers to the object that is "holding" or "calling" the function at that exact second.

1. When an Object calls the function :-
If you put a function inside an object and call it using a dot (person.greet()), then 'this' is that object.

Example:-
const person = {
  name: "Rahul",
  // Function Expression inside an object
  sayHi: function() {
    console.log("My name is " + this.name);
  }
};
// WHO is calling sayHi? 'person' is!
// So 'this' becomes the 'person' object.
person.sayHi(); // Output: "My name is Rahul

2. When NO ONE calls the function (Global) :-
If you just call a function by itself (like greet()), there is no object to the left of the dot. In this case, JavaScript defaults this to the Global Window (the entire browser tab).
Example:
function showThis() {
  console.log(this); 
}
// WHO is calling showThis? No one specific.
// So 'this' defaults to the Window object.
showThis(); // Output: [object Window]

The "Broken Link" Problem (Why this is tricky)
This is where most beginners get stuck. If you take a function out of an object and put it into a new variable, it "forgets" its original object.

Example:

JavaScript

const car = {
  brand: "Tesla",
  getBrand: function() {
    console.log(this.brand);
  }
};

// 1. Calling it directly:
car.getBrand(); // Output: "Tesla" (The 'car' called it)

// 2. Saving it to a new variable:
const storeFunction = car.getBrand;// ab yha pe pura getBrand() function ek new variable me store ho gya. so ab car object to rha hi nhi

// 3. Calling the NEW variable:
storeFunction(); // Output: undefined

Why is it undefined?
When you run storeFunction(), you are calling it as a simple function. There is no car.in front of it anymore. Therefore,
this stops being the car and becomes the Window. Since the Window doesn't have a brand, you get undefined.

Summary for Declarations & Expressions :-
The Rule: Look at the left side of the function call.
Is there an object? (user.login()) → this is the user.
Is it empty? (login()) → this is the window (global).

The Final "Trap": Nested Functions :-
Imagine a method inside an object. Inside that method, you create another regular function (a helper).

The Problem:
const trainer = {
  name: "John",
  greet: function() {
    console.log("Outer function 'this' is: " + this.name); // "John"

    // A regular function declaration inside a method
    function innerHelper() {
       console.log("Inner function 'this' is: " + this.name); 
    }

    innerHelper(); // Who is calling this? No one!
  }
};
trainer.greet();
 
The Output:
Outer function: "John" (Because trainer called greet)
Inner function: undefined (Because innerHelper() was called alone)

The Interview Logic:
Even though innerHelper is physically inside the trainer object, it is being called as a simple function (no dot . in front of it). Therefore, it "forgets" the trainer and looks at the Global Window.

Summary Checklist for Interview Problems :-
If you see a this keyword in a Declaration or Expression, ask these 3 questions to get the right answer every time:-

Is it being called with a dot? (obj.func())
Answer: this is the obj.
Is it being called "naked" or alone? (func())
Answer: this is the Window (or undefined in strict mode).
Is it a function inside another function? 
Answer: Treat the inner function as "alone" unless it's an Arrow Function (which we haven't covered yet!).


Note to remember when working with 'this' keyword for function declaration/expression and arrow function :-

Let's compare them side-by-side to see why they behave differently(VVI):-

const person = {
  name: "Alice",
  
  // REGULAR FUNCTION
  sayRegular: function() {
    console.log(this.name); 
  },

  // ARROW FUNCTION
  sayArrow: () => {
    console.log(this.name);
  }
};
person.sayRegular();
person.sayArrow();

Why person.sayRegular() works:-
You called it with person. in front.
The JavaScript engine says: "Okay, I see a dot. I will temporarily set this to whatever is on the left of that dot (which is person)."
It doesn't matter that objects don't have "scope"; the call-style (the dot) forced the value into the function.

Why person.sayArrow() fails:
You called it with person. in front.

The JavaScript engine says: "Wait, this is an arrow function. I am strictly forbidden from looking at the dot or changing its this based on how it's called."

The arrow function strictly follows its Scope rule. It looks at where it was born (the Global Window) and stays there.


*) New/Constructors: "Not a Builder" :-
Arrow functions cannot be used as Constructors. You cannot use the new keyword with them.
Why? Because a constructor's job is to create a new this context for a new object. Since Arrow Functions are designed to never have their own this, they simply aren't capable of being constructors.
const Person = (name) => {
  this.name = name;
};
// const me = new Person("Gemini"); // ❌ TypeError: Person is not a constructor

*) The arguments Object: "The Missing Feature" :-
Regular functions have a special "hidden" object called arguments that contains every value passed to the function. Arrow functions do not have this.
Regular Function:
function showArgs() {
  console.log(arguments[0]); // Works
}
showArgs("Hello");

Arrow Function:
const showArgs = () => {
  console.log(arguments[0]); // ❌ ReferenceError: arguments is not defined
};
The Modern Solution: If you need all arguments in an arrow function, you must use Rest Parameters (...args).
const showArgs = (...args) => {
  console.log(args[0]); // ✅ Works: "Hello"
};

More information regarding how arrow functions behave with 'this' keyword :-

Example 1: The "No-Home" Object (The Trap)
Look at this code and imagine the "Home" bubbles:
// --- GLOBAL BUBBLE (Home for 'this' = Window) ---

const user = {
  name: "Bob",
  sayHi: () => {
    // This Arrow function looks for its parent's home.
    // The 'user' object is NOT a home.
    // It looks one level higher... to the Global Bubble!
    console.log(this.name); 
  }
};
user.sayHi(); // Output: undefined
Why? Because the Arrow Function was written inside the Global Bubble. It "stole" this from the Global Window. Since window.name isn't "Bob," it fails.

Example 2: The "Safe-Home" (Function inside a Function)
This is where Arrow Functions are useful. We put the Arrow Function inside a Regular Function (which is a valid "Home").
const user = {
  name: "Bob",
  printName: function() { //function expression here
    // --- START OF PRINTNAME HOME (this = 'user') ---
    
    const arrow = () => {
      // It looks at its parent (printName). 
      // printName IS a function, so it has a 'this'!
      // Arrow function 'steals' that 'this'.
      console.log(this.name);
    };

    arrow(); 
    // --- END OF PRINTNAME HOME ---
  }
};
user.printName(); // Output: "Bob"

Why it works:
You called user.printName(). This set the this of printName to the user object.
The arrow function inside was "born" while this was the user.
The arrow function forever remembers: "My parent's 'this' was 'user', so my 'this' is 'user'.

Summary Rule for your Brain:-
When you see an Arrow Function, follow these steps with your eyes:

Step 1: Look at the curly braces { } the arrow function is sitting in.
Step 2: Is that brace part of an Object? Keep looking higher.
Step 3: Is that brace part of a Function? STOP. That function's this is your answer.
Step 4: If you never find a function, your answer is the Global Window.
*/


