// polyfill practice :-

/**
 For each polyfill:-

    First write:
    1) what it does (in words)

    Then:
    2) what is this

    Then:
    3) input arguments

    Then:
    4) return value

    5) Then code


two more remaing to do :-

7. Function.prototype.bind

👉 Return new function + control this

8. Promise (basic version)

👉 Just resolve/reject + then()
 */



//1) map :-

/**
 Observe original map method :-

 let arr=[1,2,3,4,5];

let newArr = arr.map((ele)=>{return ele*2});

console.log(newArr);

 1) this map() method is inside every array in javascript. so first implement this in myMap() i.e.
   ---->>> Array.prototype.myMap = function() {
           }
 2) It transfroms the given array by applying given callback function in to it.
 3) It takes callback function as an input and returns an array after transformation.
 

 Array.prototype.myMap = function (fun) {
    // here this represents arr
    let originalArray = this;
  let finalArr = [];
    for(let i=0; i<=originalArray.length-1;i++){
     finalArr.push(fun(originalArray[i]));
    }
    return finalArr;
 }
let callBackFunc = (ele)=>{
    return ele*2
}
 let newArr2 = arr.myMap(callBackFunc);
 console.log(newArr2);
 */


 //2) filter() :-
 /**
 const arr = [70,34,18,40,22,55,48];

 const filteredArray = arr.filter((ele)=>{return ele>40});

 console.log(filteredArray);


  Observe original filter() method first :-
  1) every array has filter() method in javascript so my own myFilter() method should also be doing this.
  2) It transform by filtering the given array by applying given callback function to each item from the array.
  3) It finally returns the transformed array.


  Array.prototype.myFilter = function (func) {
  // here this refers to arr
  let originalArray = this
  let newArr=[];
for (let i = 0; i <=originalArray.length-1; i++) {
    let num = func(originalArray[i])
    
    if (num) {
        newArr.push(originalArray[i])
    }
}
return newArr;
  }

   function callBack(ele) {
   return ele>40
  }

  const filteredArray2 = arr.myFilter(callBack);
console.log(filteredArray2);
  */

//3) reduce() :-
/*
let arr = [5,10,15,20,30]

let sum = arr.reduce((acc,curr)=>{
 acc = acc +curr
 return acc
},0)
console.log("reduce============ ",sum);


 Observations on original reduce :-
 1) every array has reduce() method in javascript so my own myReduce function should be too.
 2) it takes a callback function and an intial value as input.
 3) it loops over an array and calculate final answer as per given condition inside callback function.
 

 Array.prototype.myReduce = function (func,intialValue) {
  // here this refers to arr
  let originalArray = this;
let acc= intialValue;
  for (let i = 0; i <= originalArray.length-1; i++) {
        acc = func(acc,originalArray[i]);
  }
  return acc;
 }
 function callBack(acc,ele) {
  return ele+acc;
 }

let result = arr.myReduce(callBack,0);
console.log("myReduce============ ",result);

*/

// call() :-
/**
let obj = {
  name:'Ankur',
  location:'gurugram'
}

function print(role,food) {
  return `my name is ${this.name} and location is ${this.location} role is ${role} and favorite food ${food}`;
}

let result = print.call(obj,'engineer','pasta');
console.log("result===========",result);



 Observations in call() method :-

 1) original call() method is always available in all functions in javascript. so my own myCall() should be too.
 2) we apply call() on function and call method takes an object as an input and immediately invoke that input object as a this keyword inside
    that function on which we had applied call().


 Function.prototype.myCall = function (obj, ...args) {
  // here this refers to the print function
  let originalFunction = this;

    obj.temp = originalFunction;
     let res =  obj.temp(...args);
     delete obj.temp
      return res
 }
 
 let myResult = print.myCall(obj,'engineer','pasta')
 console.log(myResult);
  */

 //apply() :-

 let obj = {
  name:'Ankur',
  location:'gurugram'
}

function print(role,food) {
  return `my name is ${this.name} and location is ${this.location} role is ${role} and favorite food ${food}`;
}

let result = print.apply(obj,['engineer','pasta']);
console.log("result===========",result);

 Function.prototype.myApply = function (obj,arr) {
   let originalFunction = this;
    obj.temp = originalFunction;
    let res =  obj.temp(...arr);
    delete obj.temp
    return res;
 }

 let myResult = print.myApply(obj,['engineer','pasta']);
 console.log("myResult==============",myResult);
 

 

