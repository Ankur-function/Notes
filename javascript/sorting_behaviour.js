/**
In JavaScript, the sorting behavior changes based on what you are sorting (an Array vs. an Object). This is likely where the confusion about "alphabetical order" comes from. 

1. The Array sort() Rule (Alphabetical) :-
When you use the array.sort() method, JavaScript converts everything into strings and sorts them alphabetically (lexicographically) by default. 
Example: [10, 2, 1].sort() becomes [1, 10, 2].
It puts 10 before 2 because "1" comes before "2" in the alphabet. 

2. The Object Key Rule (Numerical & Insertion) :-
When you spread an object or use Object.keys(), JavaScript follows the ES6 Property Order: 
    
Integer Indices: Keys that look like positive integers are sorted numerically (ascending).
String Keys: Keys that are NOT integers (like "name", "a", "b") are kept in insertion order (the order you wrote them).
Symbols: These are last, also in insertion order. 

 const a = {0:'zero', 2:'two', 1:'one'};
console.log(Object.keys({...a}).join(','));
Why your last example was 0, 1, 2:
In const a = {0:'zero', 2:'two', 1:'one'}, the keys are integers. JavaScript's object engine ignores the order you typed them and moves integers to the top in numerical order. 

Summary for Interview:-
Arrays: Default to Alphabetical (that’s why 10 comes before 2).
Object Keys: Default to Numerical for numbers, then Insertion Order for strings
 */