/**
 In JavaScript, the main difference between a normal function and a constructor function isn't how they are defined, 
 but how they are called and their intended purpose. 

 A normal function is typically used to perform a specific task or calculation and return a value, while a constructor function
 is used as a "blueprint" to create and initialize multiple objects of the same type.

 Key Differences :-

Feature 	                        Normal Function	                                                                Constructor Function

Invocation	                        Called directly: myFunc().	                                                    Called with the new keyword: new MyFunc().
this Binding	                    Depends on how it's called (often window or undefined in strict mode).	        Refers to the newly created object instance.
Return Value	                    Returns whatever is explicitly stated, or undefined by default.         	    Implicitly returns the new object (this) unless an object is explicitly returned.
Naming	                            Usually camelCase.	                                                            Conventionally PascalCase (starts with capital).
Prototypes	                        Not typically used for inheritance.	                                            Automatically sets up the prototype chain for shared methods.


What happens with the new keyword? :-

When you call a function with new, the JavaScript engine automatically performs four steps :-

1)Creates a new empty object.
2)Sets the [[Prototype]] of this new object to the function's .prototype property.
3)Binds the this context of the function to the new object.
4)Returns the new object (unless the function explicitly returns its own non-primitive object).


Examples :-

1. Normal Function :-
Think of this as a task. It takes some input, does a job, and gives you a result.

function greet(name) {
  return "Hello, " + name + "!";
}

// You call it directly
const message = greet("Alice"); 
console.log(message); // "Hello, Alice!"

Behavior: The this keyword inside usually refers to the global object (or undefined in strict mode). It just runs the code inside and exits.

2. Constructor Function :-
Think of this as a blueprint. Its only job is to manufacture new objects.

function User(name, age) {
  // 'this' is automatically created as a new object { }
  this.name = name;
  this.age = age;
  
  this.sayHi = function() {
    console.log("My name is " + this.name);
  };
  // 'this' is automatically returned
}

// You MUST use the 'new' keyword
const user1 = new User("Bob", 25);
const user2 = new User("Charlie", 30);

console.log(user1.name); // "Bob"
user2.sayHi();           // "My name is Charlie"


 */



/**
 Doubt :- can you explain what exactly changes before adding 'new' keyword and afer adding 'new' keyword in a function call ??

 Answer :-


 To understand that line, you need to know that every function in JavaScript has a property called .prototype.
It's just a regular object sitting there, waiting to be used. 

When you add the new keyword, the engine performs a "linkage" that doesn't happen during a normal call.
The Breakdown
Let’s use this function as an example:

function Person(name) {
  this.name = name;
}

// We add a shared method to the "blueprint"
Person.prototype.sayHi = function() {
  console.log("Hi, I'm " + this.name);
};

1. Without new (Normal Call) :-

const result = Person("Alice");

this: Points to the window (global object). It accidentally creates window.name = "Alice".

The Link: Nothing happens with the .prototype property. The function doesn't care it exists.

Return: Returns undefined because there is no return statement.

Result: result is undefined. You cannot call result.sayHi(). 

2. With new (Constructor Call) :-

const result = new Person("Alice");

this: A brand new empty object {} is created and assigned to this.

The Link (The part you asked about): The engine takes the new object and gives it a "hidden link" (internally called [[Prototype]] or __proto__)
that points directly to Person.prototype.

Return: The engine automatically returns this (the new object).

Result: result is now an object { name: "Alice" }. Even though sayHi isn't inside result, it can still use it. 

Why does this link matter?
When you try to run result.sayHi(), JavaScript does this:-

Checks inside the result object for sayHi. (Not found).
Follows that hidden link to Person.prototype.
Checks Person.prototype for sayHi. (Found!)
Runs that function. 

Before new: The function is just code running.
After new: The function becomes a factory that builds an object and "plugs" it into a specific prototype chain so it can inherit methods. 

 */

