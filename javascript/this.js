/**
  this is a special keyword that refers to an object. Which object it refers to depends entirely on how and where the function is called.

Think of it like a pronoun in English. If I say "Ankur is eating; he is hungry," "he" refers to Ankur. If I say "The dog is barking; it is loud," "it" refers to the dog. 
In JS, this changes its "meaning" based on the call site.

1) when we write this keyword in global space then this refers to the global object in browser it is called as window.in different differnet 
   runtime environment global space can be different. like for e.g. on browser it is window and in node js environmet it is global etc.

2) this keyword behaves differently in strict and non-strict mode for e.g. 

"use strict"

function test(){
console.log(this) // it will give undefined if we use strict mode and it will give global object in non strict mode.
}
test()

3) this substitution :- in above function test value of this keyword is undefined originally at first and If value of 'this' keyword is undefined or null then 'this' keyword will be replaced by global object (only in case of non strict mode)
   because of this substitution phenomena in js.

4) function vs method :- when you write a function inside an object then that function is called as method. for e.g.

   let obj = {
   name:'ankur',
   role:'developer',
   bio: function(){ // this bio is called as method of the obj object.
   // anything here
   }
   }

5) const student = {
    name:'Ankur',
    printName: function(){
    console.log(this.name)
    }
}
    const student2 = {
    name:'Sakshi'
    }

    student.printName.call(student2)// ab printName me  this ki value student2 object ho jayegi and ab this student2 ko refer karega.so basically first argument inside 
                                       call reflects this.
    so value of 'this' can be modified using call,apply and bind method.

6) Arrow functions don't have their own 'this' keyword. it retains this value from enclosing lexical context. for e.g.

 let obj = {
    name:'ankur',
    printName: ()=>{
        console.log(this.name);
    }
 }
 obj.printName(); // undefind because remember object ka koi scope nhi hota hai so iske upar to global object hi bacha and global object me to name
                     property hai nhi so that's why undefined.

7) const obj2 = {
   a:20,
   x: function(){
   console.log(this);
   //enclosing lexical context
      const y = ()=>{
        console.log(this);
        }
   }
}
obj2.x(); // see yha pe arrow function ek normal function ke andar hai and function ka scope hota hai so yha pe 'this' keyword global object
             ko refer nhi karega instead ye 'x' function se context lega.

8) 'this' keyword inside DOM elements :- reference to the HTML element.

"this" keyword in javascript refers to the object i.e. currently executing the code.It is determined dynamically at runtime 
 based on how a function is invoked.

 note :- this keyword in arrow function will not behave as per above defination instead. arrow function ke case me this keyword
         inherit kar lega scope se. means arrow function jaha par likha hua hai waha pe uss scope me this ki kya value hai wo le
         lega this keyword.
         
Note :- Arrow function does NOT care where it is written syntactically. It only cares about which execution context is active when it is created

"this" in normal function vs arrow function :-

🧠 First: One rule you must lock in :-

👉 Normal function:
this depends on how it is called
or “I’ll decide this when I’m called”

👉 Arrow function:
this depends on where it is written (lexical scope)
or “I don’t decide anything. I’ll just use my parent’s this”
 */

/*
const person = {
    name:'John',
    regularFunction: function () {
        console.log(`person name is ${this.name}`);
    },
    arrowFunction: () => {
     console.log(`person name is ${this.name}`); // gives undefined here
    }
}

person.regularFunction();
person.arrowFunction();


 In the above example , The "arrowFunction" here is an arrow function. and arrow function does't have their own binding for this 
 like regular functions have. instead arrow function inherit 'this' from surrounding lexical scope. which in above example is 
 the global scope where the arrow function is defined.in this case accessing this.name gives undefined because there is no name
 property defined in the global object. 
 */


 /**
 //Example :-

 // using regular function :-
 let person = {
    name:'Ankur',
    intro: function() {
        setTimeout(function (){
        console.log(`name is ${this.name}`); // undefined 
        },5000)
    }
 }
 person.intro();

 //using arrow function :-
 let person2 = {
    name:'Ankur',
    intro: function(){
        setTimeout(()=>{
        console.log(`name is ${this.name}`); // Ankur Why? 
        },5000)
    }
 }
person2.intro();


EXACT REASON WHY USING REGULAR FUNCTION FAILED IN ABOVE EXAMPLE :-

 🔍 Step 1: How intro() is called
person.intro();

👉 Here:

intro is called using person

So inside intro,
👉 this === person ✅

So far everything is correct.

🔍 Step 2: Now inside intro

setTimeout(function (){
    console.log(`name is ${this.name}`);
},5000)

👉 Important thing:
You are passing a function to setTimeout

🔥 Step 3: What setTimeout actually does

Think of it like this:

“We all know setTimeout is given by browser so it says Hey browser, after 5 seconds, execute this function”

So internally, it behaves like:

// after 5 seconds
somewhereElse(function (){
    console.log(`name is ${this.name}`);
});

❗ Step 4: HOW that function gets called (THIS IS THE KEY)

After 5 seconds, the browser calls your function like this:

function (){
    console.log(`name is ${this.name}`);
}()

👉 Notice carefully:

It is NOT called like:

person.function()

It is called like a normal standalone function

🧠 Rule of this (very important) :-

In a normal function, this depends on how the function is called

So here:

Your function is called like:

someFunction()

👉 Therefore:

In browser → this = window

In strict mode → this = undefined

🔍 Step 5: So what is actually happening?

This line:
console.log(`name is ${this.name}`);

becomes:
console.log(`name is ${window.name}`);

👉 And window.name is usually empty or undefined

🎯 FINAL REASON (in one clean statement)

The function inside setTimeout is executed as a standalone function,
not as a method of person,
so this no longer points to person.

🔥 One powerful analogy

Think like this:

You told someone:

“After 5 seconds, say my name”

But you didn’t tell them who you are 😄

So when they speak, they don’t know:

who “my” refers to
 */

/**
 EXACT REASON WHY USING ARROW FUNCTION WORKED IN ABOVE EXAMPLE :-

 🧠 First: One rule you must lock in
👉 Normal function:

this depends on how it is called

👉 Arrow function:

this depends on where it is written (lexical scope)

🔍 Step 1: Enter intro()
person.intro();

👉 So inside intro:

this === person ✅

🔥 Step 2: Arrow function is CREATED here
() => {
    console.log(`name is ${this.name}`);
}

👉 Important:

At the time of creation:

Arrow function looks at its surrounding scope

And says:

“I will use whatever this is OUTSIDE me”

What is outside?

👉 intro function
👉 And inside intro, this = person

🎯 So arrow function locks this:-
this = person (fixed forever)
🔍 Step 3: After 5 seconds

Now setTimeout calls it like:

arrowFunction()

👉 BUT here’s the key:

Normal function → would lose this

Arrow function → doesn’t care how it’s called

🧠 Why?

Because:

👉 Arrow functions DO NOT HAVE THEIR OWN this

So they don’t look at:

how they are called ❌

They ONLY look at:

where they were created ✅

🔥 So what actually happens?

Even after 5 seconds:

console.log(`name is ${this.name}`);

👉 this is still:

person


🧠 Deep mental model (very important)
Normal function:

“I’ll decide this when I’m called”

Arrow function:

“I don’t decide anything.
I’ll just use my parent’s this”

🧾 Visual difference
❌ Normal function:
setTimeout(function() {
    // this decided at runtime → LOST
})

✅ Arrow function:
setTimeout(() => {
    // this copied from intro → person
})

🔥 One-line killer explanation (interview level)

Arrow functions don’t have their own this,
they lexically inherit this from their surrounding scope,
so even when executed later, this still refers to person.
 */