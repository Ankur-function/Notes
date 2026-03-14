//-------------------------------------------- this ------------------------------------------------------------------------
/**
 * Note :- 'this' always refer to current context(context ka matlab hai abhi kis ke baare me baat ho rhi hai). 
 *  and this only works in case of object.
 * practice more on 'this' for functions and objects.
 * 
 */
// const user = {
//     username:"ankur",
//     price:999,
//     welcomeMessage: function(){
//         //  console.log(this);
//         // console.log(`Welcome ${username}, to our website`);// here it will not work and gives error.
//         console.log(`Welcome ${this.username}, to our website`);// here it will not work and gives error.
//     }
// }
// console.log(this); // give {} empty here using node file_name command. but when you run this on browser console we get window object.
// user.welcomeMessage();
// user.username = 'sammy'; // ab yha current context me values update kar di.
// user.welcomeMessage();// sammy update ho jayega.

// function chai(){
//     let username='ankur';
//     // console.log(this);// this will give so many values because currently it is inside funciton.
//     console.log(this.username);// gives undefined because this work only in case of object.
// }
// chai();

//-------------------------------------------- arrow funcitons ------------------------------------------------------------

// const chai = () =>{//arrow function
//     let username='ankur';
//     // console.log(username);
//     console.log(this.username); // undefined
// }
// chai();

// const addTwo = (num1,num2)=>{ // when you use {} i.e. curly braces you must write return keyword.
//     return num1+num2;
// }
// const addTwo = (num1,num2)=> num1+num2; // implicit return way to represent arrow function no need to write return.
// const addTwo = (num1,num2)=> (num1+num2); // implicit return way to represent arrow function using().
// const addTwo = (num1,num2) =>{username:"ankur"} // undefined because wrong syntax for objects.
const addTwo = (num1,num2) =>({username:"ankur"}) // works return object must put {} inside ().

console.log(addTwo(2,2));

