// learn this keyword first
// learn prototype second

/**
 A polyfill is your own implementation of an existing JS method

 A polyfill is a piece of code (typically JavaScript) used to provide modern functionality to older browsers or environments that do not natively support those features. 

Essentially, it "fills in" the gap between the features available in modern browsers and the limited capabilities of older ones. 

 Polyfill is sort of like a browser fallback, like what if my browser doesn't have a bind() function and we need to write our
 own bind function. so ,

How Polyfills Work :-

Polyfills generally follow a simple process:-

1) Feature Detection: The code checks if a specific feature (like a method or API) already exists in the current environment.

2) Fallback Implementation: If the feature is missing, the polyfill provides a custom implementation of that feature using existing, older JavaScript capabilities
 */

//polyfill for bind() method :-

// first let's see how bind() method works :-

let user = {
    firstName:'Ankur',
    lastName:'Raj'
}

function print(city,state,country){
    console.log(`person name is: ${this.firstName} ${this.lastName} and he belongs from ${city} ${state} ${country}`);
}

let printUser = print.bind(user,'patna','bihar');
printUser('india');

// now let's implement our own bind i.e. myBind() that will behave exactly as original bind() method.

/**
 note :- first observe how original bind() method behaves :-
 1) Every function in javascript has access to this bind() method so first implement that in myBind() function too.
 2) bind() method returns a function that can be later invoked. implement this in myBind() too.
 3) and inside that returned function bind method calls the 'print' function.
 */

 Function.prototype.myBind = function (...args) {
// here 'this' keyword refers to the print function. (need to research why?)
let originalFunction = this; // i.e. print here
let rest = args.slice(1);

    return function(...args2){
       // here print() function should execute
       originalFunction.apply(args[0],[...rest,...args2]);//here first argument must be an object(i.e. context)
    }
 }
 let printMyUser = print.myBind(user,'patna','bihar');
 printMyUser('india')
