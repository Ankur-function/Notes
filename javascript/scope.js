{// curly braces introduces scope.
}

// let b = 300;
// if (true) {
//     const a =10;
//     let b =20;
//     var c =30;
//      d =40; // same as var
// console.log(b); // gives 20

// }
// console.log(a);// this gives an error.perfectly fine
//  console.log(b);// this also gives an error for inner b and 300 for outer b . perfectly fine
// console.log(c);// it give '30'. so here is the problem.
// console.log(4);// it give '40'. so here is the problem.


//Note :- scope is different when you run your code directly in to browser console and when you run code through command node file_name.js

// function one(){
//     const username = 'ankur';

//     function two(){
//         const website = "youtube";
//         console.log(username);
//     }
//     console.log(website); // yhi pe error de diya so two() execute hi nhi hoga. because line by line code execution hota hai JS me.
//     two()
// }
// one();

/*Note :- 
In case of nested functions we can access outer function variables from inner function but vice verso is not true. we can't access inner function variables from outer function.
Similarly in case of if else conditions same phenomena happens.
*/

// if (true) {
//     const username = "ankur"
//     if (username === "ankur") {
//         const website = " youtube"
//         console.log(username + website); 
//     }
  // console.log(website);// gives error  
// }
// console.log(username);// gives error

//--------------------------------------------- scope difference for funciton declaration vs function expression -------------------------

console.log(one(1));
function one(num){// function declaration
    return num+1;
}

// console.log(two(2));// gives error can't access two before intialization
const two = function(num){// function expression. here we store function value inside a variable.
     return num+2;
}
console.log(two(2));// works fine

//Note:- function declaration and expression don't work in a same way.

