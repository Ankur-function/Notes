/**
 Mutate and non Mutate :-

 in JavaScript, these terms refer to whether an operation changes the original data or leaves it alone while creating a new version

 1) Mutating(The "Changer") :-
 A mutating method changes the original array or object directly in memory. Think of it like editing a document: the original is permanently altered. 

Examples: shift(), unshift(), push(), pop(), splice(), sort(), reverse().
Pros: Generally faster and uses less memory because it doesn't create a new copy.
Cons: Can lead to unexpected bugs because changing an array in one part of your code might accidentally break another part that uses the same array.
 
2. Non-Mutating (The "Creator") :-
A non-mutating method does not change the original array. Instead, it returns a brand new array with the changes applied. The original remains exactly as it was. 

Examples: slice(), concat(), filter(), map(), and the spread operator [...].
Pros: Predictable and safer for debugging. This is why frameworks like React require non-mutating updates for state management.
Cons: Can be slower and use more memory for very large datasets since it creates a copy
*/