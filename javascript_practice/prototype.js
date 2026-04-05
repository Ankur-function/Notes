
// ------------------------------------------------ Beginner Level Problems ------------------------------------------------------------
/**
 🧩 Problem 1 — Basic Constructor + Prototype Method

Create a constructor function User(name, age).

Requirements:

Properties: name, age
Add a method on prototype: introduce() → prints
"Hi, I am <name> and I am <age> years old"

Create 2 users and call the method.

Goal: Practice constructor + prototype method.
*/

/**
 🧩 Problem 2 — Check Prototype Chain Manually

Using Problem 1 objects:

Log and verify:

user1.__proto__ === User.prototype
User.prototype.__proto__ === Object.prototype
Object.prototype.__proto__

Explain via console logs.

Goal: See real prototype chain.
*/
/**
🧩 Problem 3 — Method NOT inside constructor

Modify Problem 1:

❌ Do NOT put introduce inside constructor.
Only on prototype.

Then check:

Does user1 have its own introduce property?
Use hasOwnProperty

Goal: Understand memory efficiency.
*/

/**
 🧩 Problem 4 — Add method later

After creating users, add a new method to prototype:

sayBye() → "Bye from <name>"

Check if old objects can access it.

Goal: Understand live prototype linking.
*/

/**
 🧩 Problem 5 — Parent → Child Inheritance

Create:

Parent constructor: Animal(type)
property: type
prototype method: eat()
Child constructor: Dog(name)
property: name

Make Dog inherit from Animal using Object.create.

Add Dog prototype method: bark()

Create dog object and call:

eat()
bark()

Goal: Prototype inheritance.
 */

/**
 🧩 Problem 7 — Multi-level inheritance

Create:

LivingBeing → Animal → Dog

Each with one prototype method.

Dog should access all.

Goal: Deep prototype chain.
 */

/**
 🧩 Problem 8 — Override parent method

In Dog, override eat().

Call eat() from dog.

Goal: Method overriding in prototype.
 */


/*
🧩 Problem 10 — Pure prototype object (no constructor)

Create an object using:

let admin = Object.create(user1);

Access methods and properties.

Goal: Object-to-object inheritance.
 */

/**
 🧩 Problem 11 — Prototype vs Instance Shadowing

Create a constructor Car.

Add start() on prototype.
Create two objects.
Override start() only for one object.
Prove via logs where JS is picking the method from.
 */

/**
  🧩 Problem 12 — Dynamic Prototype Change After Object Creation
Create constructor User.
Create two objects.
After objects are created, add logout() to User.prototype.
Call logout() from both objects.
 */

/**
 🧩 Problem 13 — Replacing Entire Prototype
Create constructor Animal.
Create one object.
Replace Animal.prototype completely with a new object containing eat().
Create another object.
Test method availability on both objects.
 */

/**
🧩 Problem 14 — Constructor Property Trap
Create constructor Person.
Replace its prototype with a new object.
Create an object.
Log obj.constructor and explain what it shows through behavior.
 */

/**

🧩 Problem 15 — Multi-Level Prototype Chain (3 Levels)

Create:

LivingBeing
Human
Engineer

Implement pure prototype inheritance (no classes).

Call a method from LivingBeing using an Engineer object.
 */

/**
🧩 Problem 16 — Borrowing Constructor + Prototype Chain
Create constructor Vehicle with properties.
Create constructor Bike.
Borrow Vehicle constructor inside Bike.
Also inherit its prototype methods.
 */

/**
 
🧩 Problem 17 — Object.create with Null Prototype

Create an object using:

Object.create(null)
Add properties.
Try accessing toString().
Log and observe behavior.
 */

/**
 
🧩 Problem 18 — Function is an Object (Prototype on Function)
Add a property on a function itself.
Add a method on its prototype.
Create object using new.
Access both and observe difference.
 */

/**
 

🧩 Problem 19 — Deleting Prototype Method at Runtime
Create constructor Account.
Add deposit() on prototype.
Create objects.
Delete Account.prototype.deposit.
Call from existing objects.
 */

/**
🧩 Problem 20 — Prototype Chain Check Without proto

Create 3-level inheritance and prove the chain using:

isPrototypeOf
Object.getPrototypeOf

(No __proto__ allowed.)
 */

/**
 🧩 21). Identifying the Source
Create an object parent with a property heritage: "Irish". Create an object child using Object.create(parent).
Log child.heritage.
Check if child has the property heritage as its own property (using hasOwnProperty).
Add heritage: "German" directly to child and log it again. What happened to the parent's value?
 */

/**
 🧩 23). The Constructor Link
Define a constructor Car. Create an instance myCar. Without looking at the original code, use the myCar instance to create a
second instance secondCar of the same type (Hint: use the .constructor property found on the prototype).
 */

/**
 🧩 24). Array Prototype Extension (Practice only!)
Add a method called last() to the global Array.prototype that returns the last element of any array.
Test it: [1, 2, 3].last() should return 3.
Note: In real projects, "monkey patching" built-in prototypes is generally discouraged, but it’s great for understanding how inheritance works.
 */

//-------------------------------------------- Intermediate Level Problems ----------------------------------------------------------------

/**
Intermediate Level: Prototypal Inheritance :- (All are VVI)

🧩 1). Building the Chain
Create a Vehicle constructor with a move() method. Then, create a Bicycle constructor. Manually set up the prototype chain so
that Bicycle inherits from Vehicle. Ensure that a new Bicycle() has its constructor property correctly pointing to Bicycle, not Vehicle.

🧩 2). Method Overriding
Using the Vehicle and Bicycle example from the previous task:

Add a move() method to Bicycle.prototype that logs something specific like "Pedaling the bike...".

Call move() on a Bicycle instance. Explain why it doesn't use the Vehicle version anymore.

🧩 3). Functional Inheritance with Object.setPrototypeOf
Create two plain objects: human (with a method breathe) and developer (with a method code). Use Object.setPrototypeOf to make human the prototype of developer. Demonstrate that the developer can now breathe.

🧩 4). The "Super" Call Pattern (Pre-ES6)
Create a constructor Person that sets this.name. Create a constructor Student that needs name and grade. Inside the Student constructor,
do not write this.name = name. Instead, call the Person constructor in a way that it initializes the name property on the Student instance. 
Then, link the prototypes so Student inherits methods from Person.

🧩 5). Checking the Chain
Create a chain: Grandparent -> Parent -> Child.
Create an instance of Child. Use the instanceof operator to verify that the child is an instance of all three constructors. Then, use Object.getPrototypeOf() repeatedly on the child instance until you reach null.

🧩 6). Shared vs. Unique State
Create a constructor Folder. Add an array files = [] to Folder.prototype. Create two instances, f1 and f2. Push a string "bio.txt" into f1.files.
Check f2.files. Does it have the file?
Explain why placing arrays or objects on a prototype can be dangerous for storing instance-specific data.
 */














