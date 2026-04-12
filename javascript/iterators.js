// study about how we use break and continue in loops

// break :- when break occurs it will immediatly stops functioning and exit the loop.

// continue :- this will not end the loop instead it continues loop as usual.

// for (let index = 0; index < 20; index++) {
//     if (index == 5) {
//         console.log('Detected');
//         // break;
//         continue;
//     }
//     console.log("value of i is",index); // 5 will not be printed in case of continue.
// }

// while loop :-

// let index =0;
// while (index<=10) {
//     console.log(`index is ${index}`);
//     index = index+2;
// }

// do while loop :- it first works then check condition.
// let index=0;
// do {
// console.log("index is ",index);
// index++;
// }while(index<=10);

//------------------------------------------------- Higher Order Array Loops -------------------------------------------------------------

// For of loop :- where you just need the values, this loop does not work with object. it works fine with array and strings.

// const arr = [10,20,30,40,50,60];

// for(const num of arr){
//     console.log(num);   
// }

// const greetings = "Hello World";

// for(const greet of greetings){// works fine with strings too.
//     console.log(greet); 
// }

// Map :- map is an object which contains key:value pair.and key in the map is always unique.
// study about Map in more detail.

const map = new Map();
map.set('IN','India');
map.set('USA', 'United states of america');
map.set('FR','France');
map.set('IN','India');// get ignores because below one has same key.
map.set('IN','test');// only this will come inside map object because always unique key. and this one is the latest one.

console.log(map);

// for(const [key,val] of map){ // yha [key,val] syntax hai for of loop ka. ye kind of destructure kar deta hai object me here key means keys of object and val means object ke values.
//     console.log(`key is ${key} and value is ${val}`);
// }

// Note :- by above method we can't iterate over the object see below example.
// const myObject = {
//     'game1':'chess',
//     'game2':'cricket',
//     'game3':'tennis'
// }
// for(const [key,val] of myObject){ // it will not work and throws an error
//     console.log(`games key is ${key} and value is ${val}`);
// }


// For in loop :-

// const myObject = {
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by apple'
// }

// for(const key in myObject){ // aise kar ke object pe iterate kar sakte hai.
//     console.log(`${key}: ${myObject[key]}`);
// }
// Note :- isme const key in myObject me key sirf keys ko contain karta hai and to get it's value we need to do object[key].
// and agar array pe for in lagaye to ye index leta hai value nhi for e.g. :-
/**
 let arr = ["a", "b", "c"];

for (let index in arr) {
  console.log(index); // 0,1,2
}
 */

/**
 other best way to iterate over an object is using Object.entries() method this one is best because for in loop can contain
 prototype chain functionalites like it can inheret parent properties.

 for (const [key, value] of Object.entries(user)) {// This gives you an array of [key, value] pairs, which you can destructure right in the loop.
  console.log(`${key}: ${value}`); // name: John, age: 25
}

 */

// const map = new Map();
// map.set('IN','India');
// map.set('USA', 'United states of america');
// map.set('FR','France');

// for(const key in map){ //remember we can't itreate using for in loop in Map.
//     console.log(`key is ${key}`);
// }


//-----------------------------------------------------------forEach loop-----------------------------------------------------------------------

// const coding = ['c','cpp','java','js','python'];
// coding.forEach((item,index,arrList)=>{ // syntax of forEach
//     console.log(`item is ${item}, and it's index is ${index} and array list is ${arrList}`);
// });
// const result = coding.forEach((item,index,arrList)=>{ // result will be undefined.
//     console.log(`item is ${item}, and it's index is ${index} and array list is ${arrList}`);
//     return item;
// });

// Note:- forEach never returns anything . it will always return undefined.

// const coding =[
//     {
//         langName:'Javascript',
//         langFileName:'js'
//     },
//     {
//         langName:'Ruby',
//         langFileName:'rb'
//     },
//     {
//         langName:'Python',
//         langFileName:'py'
//     },
//     {
//         langName:'Java',
//         langFileName:'java'
//     }
// ]

// coding.forEach((item)=>{
//  console.log(item.langName);
 
// })