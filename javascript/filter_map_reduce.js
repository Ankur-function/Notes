//Filter :-
//  const myNums = [1,2,3,4,5,6,7,8,9,10];

 // const result = myNums.filter((item)=>(item>6)); // no need to write return in this syntax
// const result = myNums.filter((item)=>{
//     return item >4 // return is must here with this syntax
// });
// console.log(result);

//  const myNums = [1,2,3,4,5,6,7,8,9,10];
// const result = myNums.filter((item)=>(item+10)); // filter does not work like this use map instead.
// console.log(result);

// using forEach :-
// const newNums = [];
// myNums.forEach((item)=>{
// if (item>5) {
//     newNums.push(item);
// }
// })
// console.log(newNums);


//map :-
// const myNums = [1,2,3,4,5,6,7,8,9,10];

 // const result = myNums.map((item)=>(item+10)); // works fine
// const result = myNums.map((item)=>(item>7)); // for this map will return true/false values. it will give all values even false one.
// console.log(result);

// chaining :-
// const myNums = [1,2,3,4,5,6,7,8,9,10];
// const result = myNums.map((num)=>(num*10)).map((num)=>(num+1)).filter((num)=>(num>81));
// console.log(result);

//reduce :-

/**
  const array1 = [1,2,3,4];
 const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator,currentValue) => accumulator + currentValue, intialValue
)
console.log(sumWithInitial)
 */
//   const array = [1,2,3,4];
//  const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator,currentValue) => accumulator + currentValue, initialValue // jo bhi intial value rehti hai 1st time pe wo accumulator me chali jaati hai.fir uske baad sum har baar accumulator me jata rehta hai.
// )// and currentValue is the each element in an array. 
// console.log(sumWithInitial);

//   const array = [1,2,3];
// const sumWithInitial = array.reduce((acc,cur) => {return acc + cur}, 0)
// console.log(sumWithInitial);

// const shoppingCart = [
//     {
//         itemName:'js course',
//         price:2999
//     },
//     {
//         itemName:'python course',
//         price:999
//     },
//     {
//         itemName:'mobile development course',
//         price:4999
//     },
//     {
//         itemName:'data sciencecourse',
//         price:12999
//     },
//     {
//         itemName:'ML course',
//         price:15999
//     }
// ]

// const result = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
// console.log(result);

/**
 Note :-
1) always remember HOF like map,filter,forEach and reduce ko jab bhi apply kar rhe ho to usme agar normal function or expression function
 pass kar rahe ho to always bss uska reference pass karte hai. function ko method ke andar call nhi karte hai.
 e.g. 
 const ctx = { m: 10 };
function fn(v){ return v + this.m; }
const res = [1,2].map(fn, ctx);// yha fn reference pass hoga na ki fn()
console.log(res);

2) return keyword inside HOF :- In map,filter,forEach,reduce yha pe return karne par pura function se return nhi hota hai instead 
   sirf current item ke liye skip hota hai. loop will still continues for the rest of the items.
   e.g. :-

    const nums = [1, 2, 3, 4];
nums.forEach((num) => {
  if (num === 2) return; // yha pe sirf iss element ke liye skip hoga so loop will still work as usual for 3,4
  console.log(num);
});

3) mutation happens in HOF in below conditions :-
   The mutation only happens if YOU write code inside the callback that changes the objects.
   so agar callback function me agar object ko change kiye to original values bhi change ho jayegi.

   The "Reference" Summary Table :-
If your array contains objects (e.g., [{id:1}]), here is what happens:

Method	        Returns New Array?	          Can it Mutate?
map	                Yes	                        Yes, if you do obj.val = 2
filter	            Yes	                        Yes, if you modify obj inside the logic
forEach	            No (undefined)	            Yes, this is its primary use case
reduce	            No (returns acc)	          Yes, if acc is a reference to the original

Examples :-
Mutate using map example :-
const original = [{ val: 1 }, { val: 2 }];
const doubled = original.map(obj => {
  obj.val = obj.val * 2; // yha pe original object bhi change ho jayega
  return obj;
});
console.log(original[1].val);

How to do it correctly (Immutability) :-
If you want to use .map() without changing the original array, you must create a new object inside the function using the Spread Operator or Object.assign():

const doubled = original.map(obj => {
  // Create a COPY of the object with a new 'val'
  return { ...obj, val: obj.val * 2 };// pehla shallow copy bana lo fir karo to original object will not change now.
});
console.log(original[0].val); // Output: 1 (Safe!)
console.log(doubled[0].val);  // Output: 2


Scenario A: The normal loop is inside a function :-

If the loop is inside a function, return will exit the entire function immediately. This means the loop stops, and any code after the loop (inside that function) is ignored.
javascript
function testLoop() {
  const nums = [1, 2, 3, 4];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2) return; // Exits the WHOLE function. haan yha pe pura function se exit ho jayega agar ek bar v ye condition true hui to but HOF ke case me aisa nhi hota hai.
    console.log(nums[i]);
  }
  console.log("This will never print");
}

testLoop();
// Output: 1
 */



