/**
Topics covered :-
    Function declaration
    Function Expression
    Arrow Functions
 */

/**
 function foo() { return 1; }
console.log(typeof foo, foo());
 */

/**
 function add(a, b) { return a + b; }
console.log(add(2));
 */
/**
 * VVI
function f() { return; }
console.log(f(), typeof f());
 */

/**
 function args() { return arguments[0] + arguments[1]; }
console.log(args(2,3));
 */

/**
 function whoAmI() { return this && this.name; }
const obj = { name: 'A', fn: whoAmI };
console.log(obj.fn());
 */

/**
 const fn = function named(){ return named.name; };
console.log(fn(), typeof named);
 */

/**
 try {
  console.log(fnExpr());
} catch (e) {
  console.log('error');
}
const fnExpr = function(){ return 'hi' };
 */

/**
 VVI
 Fix (only change RHS) to make counter() increase on each call:-
let counter = ????;
console.log(counter()); // 1
console.log(counter()); // 2
 */

/*
const fe = function foo() { return typeof foo; };
console.log(typeof foo, fe());
*/
/*
let res;
const fn = function(x){ 
    return function(){
         return x
         };
 };

res = fn(5);
console.log(res());
*/
/**
 const add = (a) => (b) => a + b;

const addFive = add(5);
console.log(addFive(10));
 */
/**
 * VVI
 const a = x => ({ x });
const b = x => { x };
console.log(a(2), b(2));
 */

/*
const obj = {
  id: 1,
  arrow: () => this && this.id,
  regular() { return this.id; }
};
console.log(obj.arrow(), obj.regular());
*/
/**
 const f = () => arguments;
try { console.log(typeof f()); } catch (e) { console.log('error'); }
 */

/**
 try { hoisted(); console.log('called'); } catch(e) { console.log('err') }
function hoisted(){ console.log('hi') }
 */

/**
 'use strict';
{
  function f(){ return 1; }
}
try { console.log(typeof f); } catch (e) { console.log('blocked'); }
 */

/*
function make(){ let x = 1; return function(){ return x } }
const m = make();
console.log(m());
*/

/**
 const obj = {
  name: 'A',
  greet: function() {
    function inner() {
      console.log(this.name); 
    }
    inner(); 
  }
};

obj.greet();

 */

/*
const obj = {
  name: 'A',
  greet: function() {
     const inner = ()=>{
      console.log(this.name); 
    }
    inner(); 
  }
};
obj.greet();
*/
/**
 var hero = "Batman";

function gotham() {
  console.log(hero); 
  
  var hero = "Superman";
  
  if (true) {
    let hero = "Flash";
    console.log(hero); 
  }
  
  console.log(hero); 
}

gotham();
 */

/**
 * VVI
 const connectDB = ({ host = "localhost", port, ...rest } = {}, ...options) => {
  console.log(host);
  console.log(rest);
  console.log(options.length);
};

// Call 1 (what will it print)
connectDB({ port: 8080, secure: true, retries: 3 }, "debug", "verbose");

// Call 2 (what will it print)
connectDB();
 */

/**
 * VVI 
 const dataService = {
  prefix: "Status: ",
  
  fetchData: function(callback) {
    // Simulating a network request
    setTimeout(() => callback("200 OK"), 100);
  },
  
  process: function() {
    this.fetchData(function(response) {
      console.log(this.prefix + response);
    });
  }
};

dataService.process();
 */

/**
 * VVI
 function mathFactory(operation) {
  return function(a, b) {
    if (operation === "add") return a + b;
    if (operation === "multiply") return a * b;
    return 0;
  };
}

const adder = mathFactory("add");
const multiplier = mathFactory("multiply");

console.log(adder(5, 5) + multiplier(2, 5));
 */


