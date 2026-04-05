//What is a Prototype?
//Every JavaScript function automatically gets a property called prototype.

// One golden line :-

// Prototype is the mechanism by which objects inherit features from other objects.

// function Person() {}
// console.log(Person.prototype);

//Why does this exist?
//Because when you create objects using new, JS links that object to this prototype.

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log("Hi " + this.name);
};

let p1 = new Person("Ankur");
p1.sayHi();

/**
 How does p1 access sayHi()?

sayHi is not inside p1.

Answer → Prototype chain

What happens internally when you do new Person()?

JS does 4 hidden steps:

Creates empty object: {}
Links it to Person.prototype
Sets this to that object
Returns the object

So :-
p1  ---->  Person.prototype  ---->  Object.prototype  ----> null
This chain is called the Prototype Chain.


Prototype Inheritance :-

When you try:

p1.sayHi()

JS searches:

Inside p1 → not found
Goes to Person.prototype → found ✅

This is inheritance.

Object inherits properties from its prototype.

Visual chain
p1
 ↓
Person.prototype
 ↓
Object.prototype
 ↓
null

How to see prototype?
console.log(p1.__proto__ === Person.prototype); // true

(__proto__ is the internal link)

Prototype with normal objects :-
let obj = {};

This is same as:

obj → Object.prototype → null

That’s why you can do:

obj.toString();

Because it comes from Object.prototype.

Prototype Inheritance between functions :-

function Animal() {}
Animal.prototype.eat = function () {};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let d = new Dog();
d.eat(); // works

Dog inherits from Animal.
 */


/**
Difference between prototype and __proto__ :-

1. prototype (The Blueprint) :-

Where it exists: Only on constructor functions and classes.

Purpose: It acts as a template or blueprint. It contains properties and methods that will be shared by all instances created using the new keyword.

Usage: You add methods to it to save memory so every instance doesn't have its own copy of the same function. 

2. __proto__ (The Link) :-

Where it exists: On all objects (except for null-prototype objects).

Purpose: It is an accessor property (getter/setter) that points to the actual prototype the object inherits from.

Usage: JavaScript uses this internal link to traverse the "prototype chain" when you look up a property that doesn't exist on the object itself.

Key Comparison Table :-

Feature 	            prototype	                                         __proto__
Found on	            Functions and Classes	                             All Object instances
Role	                Provides properties to future instances	            Points to the object's parent in the chain
Nature	                A regular property	                                An accessor (getter/setter)
Standard	            Standardized	                                    Legacy/Deprecated (use Object.getPrototypeOf)

 */

//-----------------------------------------------------------------------------------------------


// one important example :-

/**

🧩 Problem 15 — Multi-Level Prototype Chain (3 Levels)

Create:

LivingBeing
Human
Engineer

Implement pure prototype inheritance (no classes).

Call a method from LivingBeing using an Engineer object.
 
Solution :-

function LivingBeing(living){
    this.living= living
}
LivingBeing.prototype.live = function(){
    return `${this.living} is a living being`
}

function Human(human,living){
    LivingBeing.call(this,living)
    this.human=human
}
Human.prototype = Object.create(LivingBeing.prototype);
Human.prototype.constructor = Human;
Human.prototype.huma = function(){
    return `${this.human} is a human`
}

function Engineer(engineer,human,living){
    Human.call(this,human,living);
    this.engineer=engineer
}
Engineer.prototype = Object.create(Human.prototype)
Engineer.prototype.constructor = Engineer;
Engineer.prototype.engin = function(){
    return `${this.engineer} is an engineer`
}

const person = new Engineer('Ankur','Ankur Raj','He');

console.log(person.constructor);
console.log(person.engin());
console.log(person.huma());
console.log(person.live());

**/

// one important example :-
/**
 function Vehicle(type){
    this.type=type
}
Vehicle.prototype.move = function() {
    return `${this.type} is a vehicle method`
}

function Bicycle(brand,type){
     Vehicle.call(this,type)
    this.brand=brand;
}
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.move = function() {
    return `${this.brand} is a bicycle method`
}
Bicycle.prototype.constructor = Bicycle;

const myBike = new Bicycle('TVS','2 Wheeler');
console.log(myBike);

console.log(myBike.move()); // since Bicycle.prototype is closer to myBike and it is directly available inside Bicycle prototype so it will choose from here itself.
console.log(myBike.__proto__.__proto__.move.call(myBike));// now this will go inside nested prototype i.e. Vehicle one and call the move() from there.
 */


//-------------------------------------------------------------------------------------------------------------------------------------



/** 
 
Doubts :-

1) i am still confused from where these toString etc. functions come from ??

Great question. This is the heart of understanding prototypes.

Those functions like toString, hasOwnProperty, valueOf come from:

👉 Object.prototype

This is the root of almost all objects in JavaScript.

Normal object creation

When you do:

const obj = {};

Internally JS does:

const obj = Object.create(Object.prototype);

So the chain is:

obj
  ↓
Object.prototype
  ↓
null

And Object.prototype contains:

Object.prototype = {
  toString: function(){...},
  hasOwnProperty: function(){...},
  valueOf: function(){...},
  ...
}

So every normal object gets these for free.

That’s why this works
const obj = {};
console.log(obj.toString());        // works
console.log(obj.hasOwnProperty()); // works

Because JS finds them here:

obj → Object.prototype → method found
But in Problem 17 you did this
const obj = Object.create(null);

Now the chain is:

obj
  ↓
null

There is no Object.prototype in the chain.

So:

obj.toString      // undefined
obj.hasOwnProperty // undefined
Then why did this work?
obj.name.toString()

Because obj.name is a string.

Strings have their own chain:

string → String.prototype → Object.prototype

So that toString came from String.prototype, not from your object.

The big realization

toString is NOT a feature of objects.
It is a feature of Object.prototype.

And most objects silently inherit it.

Problem 17 removes that inheritance so you can see the truth.




2) so this was for objects and what for arrays, strings , functions etc ??

Excellent. Now you’re asking the right prototype question.

Every built-in type in JavaScript has its own prototype, and all of them ultimately link to:

👉 Object.prototype

That’s the universal root.

Here’s the real prototype map interviewers expect you to know.

🧱 Arrays

From Array.prototype

arr
 ↓
Array.prototype   (map, filter, push, pop…)
 ↓
Object.prototype  (toString, hasOwnProperty…)
 ↓
null

That’s why arrays have both:

arr.map()          // from Array.prototype
arr.toString()     // from Object.prototype
🧵 Strings

From String.prototype

"hello"
 ↓
String.prototype   (slice, includes, charAt…)
 ↓
Object.prototype
 ↓
null

That’s why:

"hi".includes()    // String.prototype
"hi".toString()    // Object.prototype
🔢 Numbers

From Number.prototype

num
 ↓
Number.prototype   (toFixed, toPrecision…)
 ↓
Object.prototype
 ↓
null
🧠 Functions (very special)

From Function.prototype

function
 ↓
Function.prototype (call, apply, bind)
 ↓
Object.prototype
 ↓
null

That’s why every function can do:

fn.call()
fn.bind()

Because of Function.prototype.

🧍 Plain Objects
obj
 ↓
Object.prototype
 ↓
null
The universal rule

Every built-in type has its own prototype
And that prototype links to Object.prototype

Except when you do:

Object.create(null)

Then you cut the chain.

One interview sentence to remember

Arrays, Strings, Numbers, and Functions don’t get toString from themselves.
They get it from Object.prototype at the end of their prototype chain.


Interview-level statement to remember :-

Arrays, Strings, Numbers, and Functions are specialized objects.
Their prototypes link to Object.prototype, so they inherit object methods through the prototype chain.


That's why we say in javascript everything is an object.
 */