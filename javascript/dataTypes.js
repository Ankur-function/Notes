/**
 * There are officially two types of data types :-
 * 
 * Basically categories are based on how you store your data in the memory and how you access them. 
 * 
 * 1) Primitive (call by value):- Primitive types represent single, basic values and are immutable, meaning their actual value cannot
 *    be changed once created. When you reassign a primitive variable, you are not changing the original value but replacing it with a new one in memory.
 *    7 types :- String, Number, Boolean, null, undefined, symbol, BigInt
 * 
 * 2) Non Primitive (call by reference):- Non-primitive types are mutable and can store collections of data or more complex entities.
 *    In JavaScript, almost everything that is not a primitive is an Object.
 *    it gives directly memory reference so yha jo bhi change karoge original value me
 *    change hoga.
 *    types :- Array, Objects, Functions
 */

//------------------------------------------------------stack-heap memory--------------------------------------------------------------

/**
 In JavaScript, memory is divided into two main areas: the Stack and the Heap. Where data is stored depends on whether
it is a Primitive or a Reference type.

1. The Stack: For Primitives 
The Stack is a small, highly organized, and fast memory structure. It stores data that has a fixed size that the engine knows ahead of time. 

What it stores: All Primitive types (Number, String*, Boolean, Undefined, Null, Symbol, BigInt).
How it works: When you declare a primitive variable, the actual value is stored directly in the stack.
Key characteristic: Access is lightning-fast, and memory is managed automatically via a "Last-In, First-Out" (LIFO) process.

2. The Heap: For Reference Types
The Heap is a much larger, unstructured "pool" of memory used for data that can grow or change in size. 

What it stores: All Reference types (Objects, Arrays, and Functions).
How it works:
The actual content of the object/array is stored in the Heap.
A pointer (the memory address) to that location in the heap is stored in the Stack.
Key characteristic: Access is slightly slower than the stack, and it is managed by the Garbage Collector, which periodically cleans up data that is no longer reachable.
 */
// Stack(Primitive) memory, Heap(Non-Primitive) memory

//1) Stack(Primitive) :- all primitive data types get stored in to stack memory
let abcd = "ankur raj";
let efgh = abcd;
    efgh = "raj kumar";


console.log(efgh); 
console.log(abcd);// it still has old value see i.e. 'ankur raj' so efgh me abcd ka copy pass hua


// Heap(Non-Primitive) :- all non primitive/ reference data types get stored in to heap memory
let userOne = {
    email:'ankur_raj@gmail.com',
    upi:"user@ybl"  
}

let userTwo = userOne;
userTwo.email = 'shashi@gmail.com';
userTwo.upi = 'userTwo@ybl'

console.log(userOne); // see here userTwo values are getting printed so. it changes the original values i.e. userTwo got access of userOne reference.
