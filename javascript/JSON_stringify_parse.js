/**
1. JSON.stringify(data)
    This takes any normal JavaScript object or array and turns it into a JSON String.

let user = { name: "Alice", hobbies: ["Coding", "Gaming"] };
let jsonString = JSON.stringify(user); 
console.log(jsonString); 
// Result: '{"name":"Alice","hobbies":["Coding","Gaming"]}' 
// (It's just a long piece of text now!)

Rules :-
The "Silent" Omissions:-

In Objects: Properties with values of undefined, Function, or Symbol are skipped entirely.(inn sab pe agar JSON.stringify() apply karenge to ye simply ignore/skip kare dega)
In Arrays: These same values (undefined, Function, Symbol) are converted to null to keep the array length consistent.
Special Numbers: NaN, Infinity, and -Infinity are all converted to null.

The "TypeError" Killers:-

Circular References: If an object points to itself, it throws TypeError: Converting circular structure to JSON.
BigInt: Directly stringifying a BigInt throws a TypeError.

2. JSON.parse(string)
This takes only a JSON-formatted string and converts into a JavaScript object or array.
Note :- A String (must be in JSON format).
if you try to use JSON.parse() on a random sentence like "Hello World", it will crash with a SyntaxError.
Why? Because "Hello World" isn't a valid JSON object (it's missing the curly braces {} or brackets []).

Syntax Strictness: It throws an error if the string has trailing commas, single quotes, or unquoted keys.
The Date Trap: JSON has no Date type. JSON.stringify turns Dates into ISO strings, but JSON.parse will leave them as strings.

Example 1:-
let user = { name: "Alice", hobbies: ["Coding", "Gaming"] };
let jsonString = JSON.stringify(user);
let deepClone = JSON.parse(jsonString);

console.log(deepClone); 
// Result: { name: "Alice", hobbies: ["Coding", "Gaming"] } 

Example 2:-
let myString = '{"fruit": "Apple"}'; // A string that looks like JSON

let myNewObj = JSON.parse(myString);

console.log(myNewObj.fruit); // "Apple" (It's a normal object again!)


Note :- Most developers just combine them into one line to perform a deep clone:

let original = { a: 1, b: { c: 2 } };

// The "JSON Trick" Deep Clone
let clone = JSON.parse(JSON.stringify(original));

clone.b.c = 99;

console.log(original.b.c); // 2 (Original is SAFE!)
console.log(clone.b.c);    // 99 (Clone is independent)


 */