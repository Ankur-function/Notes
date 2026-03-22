// call, apply, bind :-
/*
let user = {
    firstName:'Ankur',
    lastName:'Raj'
}

function print(city,state){
console.log(`full name is: ${this.firstName} ${this.lastName} and belong from ${city} ${state}`);
}

print.call(user,'patna','bihar'); //isme call ka first parameter i.e. user print function ke this me chala jata hai. 
print.apply(user,['patna','bihar']); // only difference compare to call is that we must pass extra parameters inside an array.
let myDetails = print.bind(user,'patna','bihar'); // bind method simply binds the function with the object we provide and returns a method or function that we can use later.
myDetails();// now we can call this function any where as per our need.
*/

//-------------------------------------------------- Function Currying --------------------------------------------------------------
/*
let user = {
    firstName:'Ankur',
    lastName:'Raj'
}

function print(city,state){
    console.log(`full name is: ${this.firstName} ${this.lastName} and location is ${city} ${state}`);
}

let myInfo = print.bind(user,'gurugram');

myInfo('Haryana');// this is called as function currying
myInfo('Delhi');//we can call this as many times as we want

*/

// we can also achieve this by using closure :-

function outer (x){
    return function inner (y){
    console.log(x*y);
    }
}

let myFunc = outer(2);
myFunc(3)
