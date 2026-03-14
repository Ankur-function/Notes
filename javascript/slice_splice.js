// slice and splice both are array methods.

//slice :-

/**
slice is a Photographer. It takes a picture of a section of the array and hands you a copy.
The original array is never changed (No Mutation).

1. slice(): The Photographer (Non-Mutating) :-
The slice() method returns a shallow copy of a portion of an array into a new array.
Syntax:
array.slice(startIndex, endIndex)

The Rules:-
startIndex (Inclusive): Where the extraction begins.
endIndex (Exclusive): Where the extraction ends. It extracts up to, but NOT including, this index.
If you leave out the endIndex, it slices all the way to the end of the array.
If you pass a negative number, JavaScript counts backward from the end of the array. -1 is the last item.
Sure it is a shallow clone. and it doesn't mutate the original array by itself but If your array contains objects, slice copies the reference to the object, not the object itself. so here changing the object properties will change the original object too.

Example A: Basic Slicing :-

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); 
// Output: ["camel", "duck", "elephant"] (Starts at index 2 to the end)

console.log(animals.slice(2, 4)); 
// Output: ["camel", "duck"] (Starts at 2, STOPS before 4. Does not include 'elephant')

console.log(animals); 
// Output: ['ant', 'bison', 'camel', 'duck', 'elephant'] (Original is UNTOUCHED)

Example B: The Negative Index Trick (Interview Favorite) :-
If you pass a negative number, JavaScript counts backward from the end of the array. -1 is the last item.

const colors = ['red', 'green', 'blue', 'yellow'];
// "Give me the last two items"
console.log(colors.slice(-2)); // Output: ["blue", "yellow"]

// "Give me from the second-to-last item, up to the last item (exclusive)"
console.log(colors.slice(-2, -1)); // Output: ["blue"]

Example C: The Shallow Copy Trap (Advanced) :-
If you do array.slice() with no arguments, it creates a clone of the array. But beware: it is a shallow clone. If your array contains objects, slice copies the reference to the object, not the object itself.

const users = [{ name: "John" }, { name: "Jane" }];
const clonedUsers = users.slice();
clonedUsers[0].name = "Batman"; // We change the clone...
console.log(users[0].name); 
// Output: "Batman" (The original changed too, because they point to the same object in memory!)
*/



// splice :-

/**
 splice is a Surgeon. It takes a scalpel to the array, ripping things out and stitching new things in. The original array is permanently changed (Mutation).

 2. splice(): The Surgeon (Mutating) :-
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

Syntax:-
array.splice(startIndex, deleteCount, item1, item2, ...)

The Rules:-
startIndex: Where the surgery begins.
deleteCount: How many items you want to delete. (Notice this is a count, not an ending index like slice).
item1, item2...: The new things you want to stitch into the array at the startIndex.
Return Value: splice returns an array containing the items it deleted.

Example A: Deleting Items :-

const months = ['Jan', 'March', 'April', 'June'];
// Start at index 1, delete 1 item.
const deleted = months.splice(1, 1); 

console.log(months);  // Output: ["Jan", "April", "June"] (Original is MUTATED)
console.log(deleted); // Output: ["March"] (It returns what it killed)

Example B: Inserting Items (Without Deleting) :-
If you set deleteCount to 0, splice acts as an insert function.

const months = ['Jan', 'March', 'April', 'June'];
// Start at index 1, delete 0 items, insert 'Feb'
months.splice(1, 0, 'Feb');
console.log(months); 
// Output: ["Jan", "Feb", "March", "April", "June"]

Example C: Replacing Items:-
You can delete and insert at the exact same time.

const cars = ['Toyota', 'Honda', 'Ford'];
// Start at index 1, delete 1 item ('Honda'), and insert 'Mazda' and 'BMW'
cars.splice(1, 1, 'Mazda', 'BMW');
console.log(cars); 
// Output: ["Toyota", "Mazda", "BMW", "Ford"]
 */

/**
 The Ultimate Summary Table
    Feature                         slice()                                     splice()
 Meaning of 2nd Argument            endIndex (Stop before this index)           deleteCount (Remove this many items)
 Mutates Original?                  ❌ No (Returns a new array)                 ✅ Yes (Modifies original array)
 What it Returns                    The extracted items                         The deleted items
 Can it Add items?                  ❌ No                                       ✅ Yes


 The "Aha!" Mental Check for Interviews:-
If an interviewer asks: "Extract the 2nd and 3rd items from this array," you should immediately think:

Do they want me to destroy the original array?
If no -> slice.
If yes -> splice.

Note :-

so in one note cwe can i say that :
if i change the property using '.' then only original array/objects changes else original remains as it is even if we make changes in the new object/array ??
Example :
const a = [{ x: 1 }];
const b = a.slice(); // New box, same item inside

b[0] = { x: 99 }; // Using '=' to swap the WHOLE object
console.log(a[0].x); // 1 (Original remains as it is!)
 */
