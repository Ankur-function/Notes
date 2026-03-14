/**
 * 
 confused when to use '.' and when to use [''] to access elements in objects in javascript ????
 */

 /**
  It is actually very simple once you know the three "Illegal" rules :-

Think of Dot Notation (.) as the "Clean & Easy" way, and Bracket Notation ([]) as the "Heavy Duty" way for when things get messy.

1. Use Dot Notation (.) :-
Use this 90% of the time. It is cleaner and easier to read.
The Rule: The key name must be a "valid variable name" (no spaces, doesn't start with a number, no special characters like -).

const user = { name: "Alice", age: 25 };
console.log(user.name); // ✅ Clean and simple

2. Use Bracket Notation ([]) :-
You must use brackets in these three specific cases:-

Case A: The key has a Space or a Dash
If your key is "first name" or "user-id", dot notation will crash because JavaScript thinks the space or dash is a mathematical operation.

const data = { "first name": "John", "user-id": 101 };

// console.log(data.first name); // ❌ Syntax Error!
console.log(data["first name"]); // ✅ Works perfectly

Case B: The key is a Number
you cannot use .1 or .100. JavaScript treats numbers after a dot as decimals, not object keys.

const list = { 1: "Apple", 2: "Banana" };
// console.log(list.1); // ❌ Syntax Error!
console.log(list[1]);   // ✅ Works (Internal "1" string)

Case C: You are using a VARIABLE (Most Important!)
If the name of the key is stored inside another variable, you cannot use a dot. The dot looks for a literal key with that name.

const user = { name: "Alice", age: 25 };
const choice = "age"; // The key we want is stored in this variable

console.log(user.choice); // ❌ Returns undefined (Looks for a key LITERALLY named "choice")
console.log(user[choice]); // ✅ Returns 25 (Looks for the VALUE of the variable "age")


Summary Cheat Sheet
Situation	                     Use Dot .	                       Use Brackets []
Simple names (name, age)        ✅ Yes	                            ✅ Yes (but wordy)
Names with spaces/dashes	    ❌ No	                            ✅ Required
Numeric keys (1, 100)	        ❌ No	                            ✅ Required
Using a Variable	            ❌ No	                            ✅ Required

  */

const key1 = 'a' + 1;
const key2 = 'a1';
const obj = {};
obj.key1 = 100;
obj[key2] = 200;
console.log(obj.a1);

/**
 Analysis above example :-

 1) yha values ko ek variable me store kar rhe hai so dimag me pehle to [''] ye method aana chahiye.
 2) yha obj.key1 jo hai wo variable pe kaam nhi karta wo exactly 'key1' ko search karega.
 3) so obj.key1 yha pe obj ke andar ek field bana dega 'key1' naam se. const key1 se iska koi lena dena nhi hai.
 4) obj[key2] ye kaam karega const key2 ke liye.
 */