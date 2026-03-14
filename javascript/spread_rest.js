/**
 what is the difference between rest and spread parameters :-

It’s a classic interview question! The syntax is identical (...), but they are opposites in action. The difference depends entirely on where you use them. 
The Quick Rule :-
Spread = Unpacking (1 thing becomes many).
Rest = Gathering (Many things become 1). 

1. Spread Operator (...)
Used in expressions (like function calls or array/object literals) to "spread out" elements. 
In Arrays: const combined = [...arr1, ...arr2];
In Objects: const copy = { ...original };
In Function Calls:
javascript
const numbers = [10, 20, 30];
Math.max(...numbers); // Spreads to: Math.max(10, 20, 30). 
Use code with caution.

Note:- jab bhi spread ka use kar ke copy kar rhe hai ek nye obj or array me to . agar new obj/array me agar wo key pehle se present
// hui to jo picche hoga wo overright kar dega apne se pehle wale ko. so pehle wala key:value aayega hi nhi.
 
2. Rest Parameter (...)
Used in assignments (like function definitions or destructuring) to "gather" remaining values into a single variable. 
In Function Definitions:
javascript
function sum(first, ...others) { // here we created a new variable i.e. 'others' and have put rest values into it.
  // 'others' becomes an Array: [2, 3, 4]
  console.log(others); 
}
sum(1, 2, 3, 4);

Example :-
function sum({ num1 = 0, num2 = 0 }) { // here num1 has already value coming so this 0 will be ignored.
  return num1 + num2;
}
console.log(sum({ num1: 5 }));
console.log(sum({}));

In Destructuring:-

const { id, ...everythingElse } = { id: 1, name: 'A', age: 25 };
// everythingElse is { name: 'A', age: 25 }

Example :-
 function processUser({id,details:{score=0}}){ // nested destructring
console.log(id);
console.log(score);
 }
 processUser({ id: 1, details: { score: 85 } })

Example :-
const nested = { outer: { inner: 42 } };
const { outer: { inner: value } } = nested;// ab yha inner ki value ko nya naam de diye hai so ab access value se karna hoga naa ki inner se.
console.log(value * 2);

 
Key Interview Differences
Feature 	                        Spread	                                Rest
Purpose	                            To expand an iterable.	                To collect elements.
Location	                        Where values are provided (RHS).	    Where values are received (LHS).
Limitation	                        Can be used anywhere in the list.	    Must be the last parameter.
Pro-Tip for Interviews:
If they ask, "Can you have two rest parameters in one function?", the answer is No. function(a, ...b, ...c) will throw a SyntaxError because the rest parameter must be the last element to "gather" what remains. MDN: Rest parameters
 */
//Examples :-
// function updateProfile(id, ...details, isAdmin) { // why it is throwing an error
//   return { id, ...details, isAdmin };
// }

// const user = updateProfile(1, { name: 'Dev' }, true);

const original = { 
  id: 101, 
  meta: { role: 'guest' } 
};

const clone = { ...original };
clone.id = 202;
clone.meta.role = 'admin';

console.log(original.meta.role); 

