/**
 * 
 * Practice all below ones :-
 
Array.prototype.map(): Transforms elements by applying a function to each.
Array.prototype.filter(): Selects elements that meet a condition.
Array.prototype.reduce(): Accumulates a single value from array elements.
Array.prototype.forEach(): Executes a function for each element (primarily for side effects).
Array.prototype.some(): Checks if at least one element passes a test.
Array.prototype.every(): Checks if all elements pass a test.
Array.prototype.find(): Returns the first element that satisfies a test.
Array.prototype.findIndex(): Returns the index of the first element that satisfies a test.
Array.prototype.sort(): Sorts elements (can use a comparison function). 
 * 
 */


// some problems using map and filter :-

/**
 🧩 1) const students = [
  ["John", "A", "Doe", "S1234", "Active"],
  ["Priya", "", "Sharma", "S5432", "Inactive"],
  ["", "", "Khan", "S9999", "Active"]
];

For each student, generate output like:

<b>John A Doe</b>
ID: S1234
Status: Active


Rules:

Combine only non-empty name parts (first, middle, last).

Use map and filter.

Skip any field that is empty.

Join fields with <br>.

 */

//  const students = [
//   ["John", "A", "Doe", "S1234", "Active"],
//   ["Priya", "", "Sharma", "S5432", "Inactive"],
//   ["", "", "Khan", "S9999", "Active"]
// ];

// students.map(data=>{
//     const first = data[0];
//     const mid = data[1];
//     const last = data[2];
//     const id = data[3];
//     const status = data[4];    
    
//     let fullName = [first,mid,last].filter(val=>val !='').join(' ');
//     console.log(fullName);
//     console.log("Id :", id);
//     console.log("Status :", status);
// });


/**
 🧩 Problem 2 — Clean Up a Product List

Given:

const products = [
  { name: "Laptop", price: 55000, discount: 0.10 },
  { name: "Mouse", price: null, discount: 0 },
  { name: "", price: 999, discount: 0.05 }
];

Your task

Return an array like:

Laptop → Final Price: 49500
Mouse → Final Price: N/A
Product Name Missing → Final Price: 949.05


Rules:

Use .map()

If name is empty → use "Product Name Missing"

Price missing → write "N/A"

If valid, apply discount: price * (1 - discount)
 * 
 */


// const products = [
//   { name: "Laptop", price: 55000, discount: 0.10 },
//   { name: "Mouse", price: null, discount: 0 },
//   { name: "", price: 999, discount: 0.05 }
// ];

// products.map(data=>{
//     const name = data.name !=''?data.name:'Product name is missing';
//     let off = data.price * data.discount;
//     const finalPrice = data.price - off;
//     console.log(`${name} -> final price: ${finalPrice}`);
//     // console.log("finalPrice: ",finalPrice != 0?finalPrice:'N/A');

// })

/**
 * 🧩 Problem 3 — Filter Students Who Passed

Given:

const marks = [
  { name: "Riya", score: 88 },
  { name: "Kunal", score: 43 },
  { name: "Meena", score: 92 },
  { name: "Amit", score: 35 }
];

Your task

Return an array of names of students who scored ≥ 50, using:

.filter()

.map()

Output:

["Riya", "Meena"]
 */

// const marks = [
//   { name: "Riya", score: 88 },
//   { name: "Kunal", score: 43 },
//   { name: "Meena", score: 92 },
//   { name: "Amit", score: 35 }
// ];

// const eligibleStudents = marks.filter(data=> data.score>=50);

// const eligibleNames = eligibleStudents.map(data=>data.name);
// console.log("eligibleNames: ",eligibleNames);

/**
 * 🧩 Problem 4 — Generate Display Text for Transactions

Given:

const transactions = [
  { amount: 1200, mode: "UPI", date: "2024-10-01" },
  { amount: 450, mode: "", date: "2024-09-15" },
  { amount: null, mode: "Card", date: "2024-09-01" }
];

Your task
output : 

Amount: 1200  
Mode: UPI  
Date: 2024-10-01


Rules:

Use map

Use .filter to remove empty values before joining

Keep order: Amount → Mode → Date

If field empty, skip it
 */

// const transactions = [
//   { amount: 1200, mode: "UPI", date: "2024-10-01" },
//   { amount: 450, mode: "", date: "2024-09-15" },
//   { amount: null, mode: "Card", date: "2024-09-01" }
// ];

// const finalTransactionData = transactions.map(data=>{
//     const amount = data.amount?`Amount: ${data.amount}`:'';
//     const mode = data.mode?`Mode: ${data.mode}`:'';
//     const date = data.date?`Date: ${data.date}`:'';

//     const finalData = [amount,mode,date].filter(v=>v!='').join(' ');
    
// return finalData;
    
// }
// )
// console.log("finalTransactionData 123=====>>>>>>>",finalTransactionData);

/**
 * 🧩 Problem 5 — Convert Array of Rows into Objects

Given:

const rows = [
  ["Ankur", "Raj", 28, ""],
  ["Priya", "", 24, "Engineer"],
  ["", "Sharma", null, "Designer"]
];

Your task

Convert each into:

{
  name: "...",    // combine only non-empty parts
  age: ...,       // if empty → null
  profession: ... // if empty → null
}


Rules:

Use map + filter

Use default values (null)

Format name intelligently
 */

const rows = [
  ["Ankur", "Raj", 28, ""],
  ["Priya", "", 24, "Engineer"],
  ["", "Sharma", null, "Designer"]
];

rows.map(data=>{
    const firstName = data[0];
    const lastName = data[1];
    const age = data[2];
    const profession = data[3];

    const fullName = [firstName,lastName].filter(v=>v!=='').join(' ');
let obj = {
    "name" : fullName,
     "age" : age,
     "profession":profession !==''?profession:null
}
    console.log("obj: ", obj);
    
}
)