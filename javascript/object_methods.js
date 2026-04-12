/**
 
 Object methods in JavaScript are unique because most are static—meaning you call them on the global Object constructor (e.g., Object.keys()) rather than on the object instance itself.

1. Extracting Data (The "Big Three")
These are the most used for loops and transformations.
Object.keys(obj): Returns an array of all key names (strings).
Object.values(obj): Returns an array of all values.
Object.entries(obj): Returns an array of [key, value] pairs (useful for forEach or map).


2. Modifying & Merging
Object.assign(target, source): Copies properties from one or more source objects to a target object (mutates the target).
Object.create(proto): Creates a new object using an existing object as its prototype.
Object.fromEntries(arr): The reverse of entries(); turns an array of pairs back into an object.


3. Protection & Restrictions (Security)
Used when you want to "lock" an object so it can't be changed.
Object.freeze(obj): The strictest. Prevents adding, removing, or changing any properties.
Object.seal(obj): Prevents adding or removing properties, but you can still change the values of existing ones.
Object.preventExtensions(obj): Only prevents adding new properties.


4. Checking State
Object.isFrozen() / Object.isSealed(): Checks if the object is locked.
Object.hasOwn(obj, "prop"): (Modern) Checks if the object has a specific property (replaces the older obj.hasOwnProperty()).
Object.is(val1, val2): Determines if two values are the same (more accurate than === for things like NaN).


5. Advanced / Metadata
Object.defineProperty(): Allows you to add a property with special rules (like making it read-only or invisible in loops).
Object.getOwnPropertyDescriptor(): Shows the hidden "rules" for a specific property.

6. Creating Object :-
Standard way. most common one.
Using 'new' keyword
Object.create()
 */