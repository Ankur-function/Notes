const arr = [1,2,3,4,5]// most common way
const myArr = new Array(1,2,3,4,5); // another way
// console.log(myArr[2]);

// // array methods
// myArr.push(6); // push methods mutates the array and it returns the value that is being added.
// myArr.pop();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr); // iska type string ho jayega

// slice, splice
// console.log("A",myArr);

//const newArr1 = myArr.slice(1,3) // does not include index 3
// console.log(newArr1); // [2,3]
// console.log("B",myArr);

// const newArr2 = myArr.splice(1,3) // it includes index 3 too and also changes original array.
// console.log(newArr2); //
// console.log("C",myArr); // see this very imp.

// merging or combining arrays :-

// const marvel_heroes = ['thor','ironman','spiderman']
// const dc_heroes = ['superman','flash','batman']

// // marvel_heroes.push(dc_heroes); // ye pura array hi push kar dega which is not good.
// console.log("A",marvel_heroes);
// const marvel_dc_heroes = marvel_heroes.concat(dc_heroes);
// console.log("B",marvel_heroes);// concat has worked but here you will still see nested array because concat returns new array and you are logging existing array.
// console.log("C",marvel_dc_heroes); // see here

// spread opeartor (better approach)

// const all_heroes = [...marvel_heroes, ...dc_heroes]; // better approach to merge two arrays.
// console.log("all heroes",all_heroes);


// flat array
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const new_another_array = another_array.flat(Infinity); // Infinity means doesn't matter how many nested arrays are it will open all
// console.log(new_another_array);


// console.log(Array.isArray("Ankur"));
// console.log(Array.from("Ankur")); // it will make new array using these elements
// console.log(Array.from({name:"ankur"})); // VVI
// console.log(Array.of(100,200,300));// study about .of

// shift, unshift :-
/**
 * In JavaScript, shift() and unshift() are built-in array methods used to manipulate elements at the beginning of an array.
 * 
 * The shift() method removes the first element from an array and returns that removed element. 
 * 
 * let fruits = ["Apple", "Banana", "Cherry"];
        let first = fruits.shift(); 
        console.log(first);  // "Apple"
        console.log(fruits); // ["Banana", "Cherry"]

    The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array
    let fruits = ["Banana", "Cherry"];
    let newLength = fruits.unshift("Apple", "Mango");
    console.log(newLength); // 4
    console.log(fruits);    // ["Apple", "Mango", "Banana", "Cherry"]

 */

 // concat() :-
 
 /**
  The concat() method is used to merge two or more arrays (or values) into a single new array. 
  It is a non-mutating method, meaning it does not change the original arrays but returns a brand-new one.

  Just like the Spread Operator, concat() performs a Shallow Copy.
Primitives: Copied by value (safe).
Objects/Arrays: Copied by Reference. If you change a nested object in the original, it changes in the concatenated result too.

Summary
Creates a new array: Safe for the original data.
Flattens one level: If you pass an array as an argument, it "unpacks" it into the new array.
Returns: The merged result.
Pro-Tip: If you call concat() without any arguments (e.g., let copy = arr.concat()), it’s a classic way to create a Shallow Clone of an array.

let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]
console.log(arr1);   // [1, 2] (Original is unchanged)

  */
//1)
// let letters = ["a",[2,3],[[[[[4,6,7,'q']]]]]];
// let alphaNumeric = letters.concat(1, [2, 3], "b",[[[5,5]]],[9,9]);

// console.log(alphaNumeric); 


//2) 
// let nested = [["old"]];
// let result = [].concat(nested);

// console.log(result);

// nested[0][0] = "new";
// console.log(result[0][0]); // "new" (Shared reference!)

//.sort() :-

/**
 By default, the .sort() method converts all elements into Strings and then sorts them according to their UTF-16 code 
 unit values (alphabetical order).

 Important Warning: .sort() is Mutating!

 const numbers = [2, 10, 3];
numbers.sort(); 

console.log(numbers); // [10, 2, 3] (The original is changed!)


  Q)
  console.log([2, 10, 3].sort());

In a dictionary, "10" comes before "2" because "1" comes before "2".
JavaScript sees "10" as a string starting with "1", so it puts it at the beginning of the list, just like "Apple" comes before "Banana".

 */

// find :-
/**
 1. The find() Method
The find() method returns the first element in an array that passes a certain test. Once it finds a match, it stops searching immediately. 
Behavior: It returns a single value, not an array.
Failed Search: If no element matches the condition, it returns undefined.
Does not Mutate: It does not change the original array. 
Syntax:
const found = array.find((element, index, array) => {
  return element > 10; // Your condition
});
Key Difference from filter():
filter(): Keeps looking through the entire array and returns a new array of all matches.
find(): Stops at the first match and returns only that single item.
 */

//----------------------------------------------------Array like Objects--------------------------------------------------------------

//jinke pas length property hoti hai
//aur jinko index se access kar sakte hai
//e.g. string

const firstName= "ankur";
console.log(firstName.length);
console.log(firstName[3]);


