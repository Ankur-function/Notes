/**
 
What exactly happens when 'new' runs let's understand with an example :-

function User(name,age) {
    console.log(this); // {name:'ankur',age:28}
    
    this.name=name;
    this.age=age
}

User.prototype.city = function() {
    return 'patna'
}

const user1 = new User('Ankur',28);
console.log(user1);

// step 1:- user1 = {}

// step 2 :- user1.__proto__ === User.prototype;

// step 3 :- User.call(user1,'Ankur',28);

// step 4 :- finally return user1

 */

const a = { x: 1 };
const b = Object.create(a);
b.x = 5;
a.y = 20;
console.log(b.y);






