/**
 Topics Covered :-
 1) this keyword
 2) call, apply and bind methods
 */

 /**
  * What will this print?
  * 
  const person = {
  name: "Ankur",
  greet() {
    console.log(this.name);
  }
};
person.greet();
  */

/**
 * VVI
 What will this print?

const person = {
  name: "Ankur",
  greet() {
    console.log(this.name);
  }
};

const fn = person.greet;
fn();
 */

/**
 3) call() with object

What will this print?

function showCity() {
  console.log(this.city);
}

const address = { city: "Gurugram" };

showCity.call(address);
 */

/**
 4) apply() with arguments

What will this print?

function intro(role, food) {
  console.log(`${this.name} is a ${role} and likes ${food}`);
}

const user = { name: "Ankur" };

intro.apply(user, ["developer", "pasta"]);
 */

/**
 VVI 5) bind() and delayed call

What will this print after 1 second?

const user = {
  name: "Ankur",
  sayName() {
    console.log(this.name);
  }
};

const bound = user.sayName.bind(user); // bind method binds the object with function permanently
setTimeout(bound, 1000);
 */

/**
 6) bind() without calling immediately

What will this print?

function greet() {
  return `Hello ${this.name}`;
}

const obj = { name: "Ankur" };

const boundFn = greet.bind(obj); // bind method binds the object with function permanently
console.log(boundFn());
 */

/**
 VVI 7) Arrow function inside object

What will this print?

const obj = {
  name: "Ankur",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet();
 */

/**
 VVI 8) Arrow inside normal method

What will this print?

const obj = {
  name: "Ankur",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

obj.greet();
 */

/**
 VVI 9) Nested object method

What will this print?

const obj = {
  name: "Outer",
  inner: {
    name: "Inner",
    show() {
      console.log(this.name);
    }
  }
};

obj.inner.show();
 */

/**
 10) setTimeout with normal function

What will this print?

const obj = {
  name: "Ankur",
  show() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

obj.show();
 */

/**
 11) setTimeout with arrow function

What will this print?

const obj = {
  name: "Ankur",
  show() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

obj.show();
 */


/**
 12) call() with arguments and return value

What will this print?

function sum(a, b, c) {
  return a + b + c + this.offset;
}

const data = { offset: 10 };

console.log(sum.call(data, 1, 2, 3));
 */

/**
 13) apply() with arguments

What will this print?

function multiply(a, b) {
  return a * b * this.factor;
}

const obj = { factor: 2 };

console.log(multiply.apply(obj, [3, 4]));
 */

/**
 VVI 14) bind() partial application

What will this print?

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const obj = { name: "Ankur" };

const bound = greet.bind(obj, "Hi");
bound("!");
 */

/**
 15) bind() with extra arguments later

What will this print?

function greet(a, b, c) {
  console.log(a, b, c, this.name);
}

const obj = { name: "Ankur" };

const bound = greet.bind(obj, 1);
bound(2, 3);
 */

/**
 VVI 16) Lost this in callback

What will this print?

const user = {
  name: "Ankur",
  show() {
    [1].forEach(function () {
      console.log(this.name);
    });
  }
};

user.show();
 */

/**
 VVI 17) Fixing callback this with call()

What will this print?

const user = {
  name: "Ankur",
  show() {
    [1].forEach(function () {
      console.log(this.name);
    }.call(this));
  }
};

user.show();
 */

/**
 VVI 18) Constructor with bind()

What will this print?

function Person(name) {
  this.name = name;
}

const BoundPerson = Person.bind(null, "Ankur");
const p = new BoundPerson();

console.log(p.name);
 */

/**
 VVI 19) bind() and new

What will this print?

function Test(name) {
  this.name = name;
}

const obj = { name: "Old" };
const BoundTest = Test.bind(obj);

const x = new BoundTest("New");
console.log(x.name);
console.log(obj.name);
 */

/**
 20) Hard mixed one

What will this print?

const obj = {
  name: "Ankur",
  fn() {
    return function () {
      console.log(this.name);
    }.bind(this);
  }
};

const f = obj.fn();
f();
 */
