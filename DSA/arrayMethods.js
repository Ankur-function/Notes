/**
 * 1) 🧩 1. Array Creation & Basic Operations :-
 
Method	Description
Array()	Creates a new array instance.
Array.of()	Creates a new array from arguments.
Array.from()	Creates a new array from iterable or array-like objects.
Array.isArray()	Checks if a value is an array.

2) 🔄 2. Adding / Removing Elements :-

Method	Description
push()	Adds elements to the end of an array.
pop()	Removes the last element from an array.
unshift()	Adds elements to the beginning of an array.
shift()	Removes the first element from an array.
splice()	Adds/removes elements at a specific index.
slice()	Returns a shallow copy (portion) of an array.
concat()	Merges two or more arrays.

🔍 3. Searching & Checking :-

Method	Description
indexOf()	Finds index of an element.
lastIndexOf()	Finds the last index of an element.
includes()	Checks if array includes a certain element.
find()	Returns the first element that matches a condition.
findIndex()	Returns the index of the first matching element.
some()	Checks if any element matches a condition.
every()	Checks if all elements match a condition.


🧮 4. Iterating / Transforming :-

Method	Description
forEach()	Loops through each element (no return).
map()	Creates a new array by transforming elements.
filter()	Creates a new array with elements passing a condition.
reduce()	Reduces the array to a single value (accumulator).
reduceRight()	Same as reduce(), but from right to left.
flat()	Flattens nested arrays to a single level.
flatMap()	Maps and flattens in one step.


🧱 5. Sorting & Reordering :-

Method	Description
sort()	Sorts array elements (by string by default).
reverse()	Reverses the order of elements.
toSorted()	Returns a sorted copy (non-mutating).
toReversed()	Returns a reversed copy (non-mutating).
copyWithin()	Copies part of an array to another position.
fill()	Fills array elements with a static value.

🧾 6. Conversion & Representation :-

join()	Joins all elements into a string.
toString()	Converts array to string.
toLocaleString()	Converts array to a locale-specific string.

⚙️ 7. Iterator / Advanced

Method	Description
keys()	Returns an iterator of array indices.
values()	Returns an iterator of array values.
entries()	Returns an iterator of key-value pairs.
with() (ES2023+)	Returns a copy of the array with a modified element (non-mutating).
 * 
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arr1 =Array.from({ length: 5 }, (_, i) => i+1);

console.log("arr1",arr1);

let func = (a,b)=>b+1;

console.log("func====>>>",func(0,3));
