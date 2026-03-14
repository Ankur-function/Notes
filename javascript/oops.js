// study yourself.

// Object literal :-

const user = {
    userName: "ankur",
    loginCount: 3,
    signedIn: true,
    getUserDetails: ()=>{console.log("fetched user details");
    }
}

// Constructor :-
// constructor function will always give new instance(new empty object) to work upon.

const date = new Date() // here 'new' is constructor function.

function User(name,count,islogin){

    this.name= name;
    this.count= count;
    this.islogin=islogin;

    return this
}
const userOne = new User('ankur',22,true);// yha new user karne se ab nya instance(means empty object) bann jayega. 
const userTwo = new User('rahul',39,true);

console.log(userOne.constructor);
