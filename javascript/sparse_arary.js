
/**
In JavaScript, the array const a = [0, , 2]; is known as a sparse array(because of gap). 

What it is :-
The "gap" between the first and last element is an empty slot (sometimes called a "hole" or "elision"). It is fundamentally different from a slot containing undefined or null: 

Length: The array has a length of 3 because the highest index is 2.
Missing Key: The index 1 does not exist as a property on the array object. If you check '1' in a, it returns false, whereas 0 in a returns true.
Value Access: If you try to access the empty slot via a[1], JavaScript returns undefined as a fallback, just as it does when you access any non-existent property on an object. 

The forEach() method (along with map(), filter(), and reduce()) skips empty slots entirely. 

It will only execute the callback for indices 0 and 2.
The callback for index 1 is never triggered. 

How it behaves with other methods :-
for...of loop: Unlike forEach(), a for...of loop does not skip empty slots; it will iterate 3 times and treat the middle value as undefined.
Newer methods: Methods like Array.from(), find(), and includes() treat empty slots as if they contain undefined.
Spread operator: Spreading the array [...a] will "fill" the hole, creating a new array [0, undefined, 2] where the middle slot is no longer empty. 

Pro Tip: If you want to convert all empty slots to undefined so that forEach() processes them, use Array.from(a) or [...a] before iterating. 
 */

/**
 How sparse array behaves with forEach, map, filter and reduce methods :-

When you use these methods on a sparse array like const a = [0, , 2];, they all share one critical behavior: they ignore empty slots. 

Here is exactly how each method processes that specific array:-
1. forEach() :-
Action: Executes your code only for index 0 and index 2.
Effect: It simply skips index 1. If you are counting iterations, it will only count 2 times.
2. map() :-
Action: Calls your function for indices 0 and 2, but preserves the hole at index 1.
Result: a.map(x => x * 2) returns [0, <1 empty slot>, 4]. The new array is also sparse and has the same length as the original. 
3. filter() :-
Action: Only checks values at indices 0 and 2.
Result: Since it ignores the empty slot, it removes the hole entirely from the resulting array.
a.filter(() => true) returns [0, 2] (a "dense" array of length 2).
4. reduce() :-
Action: Only visits elements with assigned values (0 and 2).
Result: If you don't provide an initial value, it uses the first non-empty element as the starting point.
a.reduce((acc, val) => acc + val) results in 2 (skipping the middle slot entirely).

Summary Table :-
Method 	    Visits Empty Slot?	    Resulting Length	                    Effect on Hole
forEach	        No	                    N/A (returns undefined)	                Ignored
map	            No	                    3	                                    Preserved (remains empty)
filter	        No	                    2 (if all pass)	                        Removed (compacted)
reduce	        No	                    1 (single value)	                    Ignored

Note: If you actually wanted to include that middle slot, you would first need to "fill" it using Array.from() or the spread operator [...a], both of which convert holes into undefined. 
 */