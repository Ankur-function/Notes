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
//Stores data of any type(but must be iterable for e.g. strings,array)
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
numbers.add(items);

// console.log(numbers);

//---------------------------------------------------------Maps--------------------------------------------------------------------

//Map is iterable
//store data in ordered fashion
//store key value pair(like object)
//duplicate keys are not allowed like sets
//objects can only have strings or symbol as keys but in Maps you can have anaything as keys like array,string,number,object.

const person = new Map();
person.set('firstName','Ankur');
person.set('lastName','Raj');
person.set('age',7);
person.set(1,'one');
person.set([5,9,11],'Ankur Raj');
person.set({3:'three'},'Raj Ankur')
// console.log(person.get(1));
// console.log(person);
// console.log(person.keys());

// for(let [key,value] of person){
//     console.log(key,value);   
// }

//another way to create Map :-
const personName = new Map([['firstName','Ankur'],['lastName','Raj']]);
console.log(personName);


