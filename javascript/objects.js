//singleton (study about this)

// There are two ways to declare an object 
// 1) literal object 2) constructor object

//Literals object :-
// const ankur = {} // isme singleton nhi banta hai.

// Constructor object way :-
// const ankur1 = Object.create(); // iske andar hi singleton banta hai.

// const mySym = Symbol("key1");
// const jsUser = { // object declaration
//     name:"Ankur",
//     "full name": "Ankur Raj",
//     age:28,
//     location: "Patna",
//     email: "ankur@gmail.com",
//     isLoggedIn: false,
//     lastLoggedInDays: ["Monday","Saturday"],
//     [mySym]:"myKey1"// this is how you declare Symbol property. under [ ] it's a syntax need to remember it.
// }

// console.log(jsUser.email);// accessing the object
// console.log(jsUser['email']);// accessing the object
// console.log(jsUser['full name']);// can't access like the above . method so always use ['any thing'] this way.
// console.log(jsUser[mySym]);

// jsUser.email = "ankur123@gmail.com";
// console.log(jsUser.email);
// Object.freeze(jsUser); // now jsUser object is freeze so can't update any values any more.
// jsUser.email = "ankur456@gmail.com";// it will not work now
// console.log(jsUser.email);// showing old email id 

// jsUser.greeting = function(){
//     console.log(`hello js user ${this.name}`);
// }
// console.log(jsUser.greeting);
// console.log(jsUser.greeting());

//-----------------------------------------------------------------------------------------------------------
//Object Constructor :-

const tinderUser = new Object(); // singleton object

tinderUser.id= "123abc";
tinderUser.name="Ammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "ankur",
            lastName: "raj"
        }
    }
}
// console.log(regularUser.fullName.userFullName);

// merging objects :-

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    1:"c",
    2:"d"
}

const obj3 = {obj1,obj2};// problem here is object ke andar object and so on. nesting object here. 
// console.log(obj3);
 //const obj4 = Object.assign(target object yha pe,wo object jisko target me merge karna hai); // rarely used because we have spread operator.
 //const obj4 = Object.assign(obj1,obj2); // this works as expectation combines all objects in to one. but rarely used because we have spread operator
 // console.log(obj4); 
// const obj5 = {...obj1,...obj2}; // best way to merge always use this.
// console.log(obj5); 

const users = [
    {
        name:"ankur",
        hobbey:"singing"
    }
]
// console.log(users[0].name);

// console.log(Object.keys(tinderUser)); // VVI ,it will give all object keys inside array.

// remeber Object.keys()or values returns an array so now we can use this return value for any use

// console.log(Object.values(tinderUser)); // VVI ,it will give all object values inside array.

// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //hasOwnProperty it checks wether this field exist or not in tinderUser object.

//-----------------------------------------------------------------------------------------------------------------------------

// Object Destructuring
// if you see curly braces to access object that means i.e. destructuring.
const course = {
    courseName: "js in hindi",
    price: '999',
    courseInstructor: 'hitesh sir'
}
// const {courseInstructor} = course
const {courseInstructor:inst} = course; // here we give new name to 'courseInstructor' so now need to access 'courseInstructor' by 'inst'.

//console.log(courseInstructor);// gives error now
console.log(inst);


//Json :-

// {
//     "name":"ankur",
//     "courseName":"js in english",
//     "price":"free"
// }

// How to check whether objects or array have values or not :-

// for arrays :-

// let user = [34,45,67,77];
// if (user.length == 0) {
    
// } 

// for objects :-
const obj = {};
if(Object.keys(obj).length == 0){
    // yha pe Object.keys to hamesa array return karta hai so Object.keys(obj) ke array dega and then we know that
    // ki array pe ek method .length laga sakte hai so that's why above expression we used.
}

//Note :- Object.keys() never calculates Symbol() property. it simply ignores them.

// nullish operator (only works with null and undefined)

// let val1;
 // val1 = 5 ?? 10
 // val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = undefined ?? 10 ?? 20
// console.log(val1);


// ternary operator

// condition ? true : false

/**
 Note :- do you know that in below example this user['name'] behaves totally diferent in left side and right side ???.
 const user = {};
user['name'] = user['name'] || 'Guest';
console.log(user)
 */
