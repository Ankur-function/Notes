/**
In JavaScript, every property on an object is more than just a key and a value. Each one has a Property Descriptor —a set
of hidden flags that define how that property behaves.

1. The Three Main Flags :-

Flag	                Meaning	                                        If false...
writable	        Can the value be changed?	                    The value becomes read-only.
enumerable	        Does it show up in loops?	                    It is hidden from for...in and Object.keys().
configurable	    Can the property be deleted or changed?	        You cannot delete it or change these flags again.
 */

/**
 
2. Creating a Non-Enumerable Property :-

When you create a property normally (e.g., obj.x = 1), all these flags are true by default. To make a "hidden" property, you must use Object.defineProperty().
Example:
Imagine you have a user object and you want to store an id that shouldn't show up when you print the object's keys.

const user = { name: "Alice" }; 

Object.defineProperty(user, "id", {
  value: 123,
  enumerable: false,   // 👈 This hides it from loops
  writable: false,     // 👈 This makes it read-only
  configurable: false  // 👈 This prevents deletion
});

// 1. It is "hidden" from keys
console.log(Object.keys(user)); // ["name"] (id is missing!)

// 2. But you can still access it directly
console.log(user.id); // 123

// 3. It is "read-only"
user.id = 456; 
console.log(user.id); // 123 (Change failed silently or threw error in strict mode)

// 4. It cannot be deleted
delete user.id;
console.log(user.id); // 123 (Still there!)
 */

/**
 3. Why use this? :-
Library Privacy: Developers use enumerable: false to add "meta-data" or internal utility methods to objects so they don't clutter up the user's for...in loops.
Data Integrity: Use writable: false and configurable: false to create constants inside an object that can't be accidentally overwritten or deleted by other parts of the code.
Pro-Tip: If you want to see the current flags for any property, use Object.getOwnPropertyDescriptor(obj, 'prop').
 */

