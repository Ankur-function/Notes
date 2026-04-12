/**
 JavaScript arrays are packed with methods. To make them easier to learn, it’s best to group them by what they actually do to the data.

1. The "Big Three" (Most Popular)
Used for transforming and iterating over data without changing the original array.
map(): Creates a new array by transforming every element.
filter(): Creates a new array with elements that pass a test.
forEach(): Runs a function for each element (returns nothing).


2. Adding / Removing Elements
push(): Adds to the end (mutates).
pop(): Removes from the end (mutates).
unshift(): Adds to the beginning (mutates).
shift(): Removes from the beginning (mutates).
splice(): Adds/removes at any position (mutates).
toSpliced(): The pure version of splice (returns a new array).


3. Finding Elements
find(): Returns the first element that matches a condition.
findIndex(): Returns the index of the first matching element.
includes(): Checks if an array contains a specific value (returns true/false).
indexOf() / lastIndexOf(): Finds the position of a specific value.
some(): Returns true if at least one element matches.
every(): Returns true if all elements match.


4. Transforming & Reshaping
reduce(): "Squashes" the array into a single value (number, object, string).
concat(): Merges two arrays.
slice(): Extracts a portion of the array into a new array.
flat(): Flattens nested arrays (e.g., [[1,2]] becomes [1,2]).
flatMap(): Maps then flattens (efficient for one level).
join(): Converts all elements into a single string.


5. Sorting & Reversing
sort(): Sorts elements (mutates).
reverse(): Flips the order (mutates).
toSorted() / toReversed(): Pure versions that return new arrays.


6. Small Helpers
fill(): Fills all elements with a static value.
copyWithin(): Copies part of an array to another location in the same array.
Array.from(): Creates an array from a string or set.
Array.isArray(): Checks if the variable is actually an array.

7. Creating An Array
    Array.create() 
    new Array()
    Array.from()
    Array.of()
 */