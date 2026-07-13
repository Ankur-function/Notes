//----------------------------------------------------Array like Objects--------------------------------------------------------------

//jinke pas length property hoti hai
//aur jinko index se access kar sakte hai
//e.g. string

// const firstName= "ankur";
// console.log(firstName.length);
// console.log(firstName[3]);

//----------------------------------------------------Iterables---------------------------------------------------------------

//jinpe for of loop laga sakte hai
//e.g. array,string
//Note:- object pe for of loop nhi laga sakte so object is not iterable.

// const firstName2= "ankur";
// for(let name of firstName2){
//     console.log(name);
// }

// const nameObj = {'firname':'ankur','lastname':'raj'}
// for(let name of nameObj){
//     console.log(name); // throws error because objects are not iterable.
// }

//-----------------------------------------------------------Sets----------------------------------------------------------------------
//It is also iterable
//Stores data of any type :- Numbers, Strings, Booleans, null, undefined, Symbols, Objects, Arrays, even other Sets or Functions.
//Sets also have it's own method(e.g. add, has etc).
//No index based index
//Can't use .length property to get size
//Order is not guranteed
//Unique items only(no duplicated allowed)

const items=['item1','item2','item3','item4','item5'];
let numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
// numbers.add(items);

//  console.log(numbers);

//---------------------------------------------------------Maps--------------------------------------------------------------------

//Map is iterable
//store data in ordered fashion
//store key value pair(like object)
//duplicate keys are not allowed like sets
//objects can only have strings or symbol as keys but in Maps you can have anything as keys like array,string,number,object.

const person = new Map();
person.set('firstName','Ankur');
person.set('lastName','Raj');
person.set('age',7);
person.set(1,'one');
person.set([5,9,11],'Ankur Raj');
person.set({3:'three'},'Raj Ankur')
// console.log(person.get(1));
 //console.log(person);
 //console.log(person.keys());

// for(let [key,value] of person){
//     console.log(key,value);   
// }

//another way to create Map :-
const personName = new Map([['firstName','Ankur'],['lastName','Raj']]);
// console.log(personName);

/**
   ⚖️ Map vs. Object :-

In an interview, you must know why you would choose a Map over a plain Object {}.

Feature 	        Object {}	                            Map 🗺️
Key Types	        Strings or Symbols only	                Anything (Functions, Objects, Numbers)
Size	            Manual (Object.keys(obj).length)	    Automatic (map.size)
Order	            Not strictly guaranteed	                Guaranteed insertion order
Performance	        Good	                                Better for frequent adding/removing
Iteration	        Needs Object.entries()	                Directly iterable (for...of)



🚩 When to use a Map :-

When keys are not strings (e.g., mapping a DOM element to some data).
When you need to constantly add and remove pairs (faster memory management).
When you need to maintain the exact order of items.
When you need to quickly get the size of the collection.
 */

