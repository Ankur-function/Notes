/**
 1) async function always returns a promise.
 2) async and await together are used to handle promises.
 3) await can only be inside async functions. and we put await in front of promise.
 4) just like how we handle errors using .catch block in promises here we use try-catch block.
 4) we know that js is single thread and synchronous by nature and it has only one call stack. so what happends during async await is
    when we do await "any promise/any asynchronous task here" . so js is not waiting in this line it actually pops out the entire function from
    call stack and when that asynchronous task is completed then that function comes again inside call stack and then it process it.
 */

//  const p = new Promise((resolve,reject)=>{  

//     setTimeout(()=>{
//     return resolve("Promise is resolved now")
//     },5000)//change timer to 10000 to see magic
//  });

//  const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      resolve("Promise is resolved now 2")
//     },10000) // change timer to 5000 to see magic
//  })

 
//  async function asyncGetData() {
//     const val = await p // using async keyword now javascript Engine seems to be waiting till this promise gets resolved.(but in reality it won't instead entire function i.e. 'asyncGetData' will be poped out from call stack and comes later when this promise is fulfilled)
//     console.log(val);
//     console.log("async Ankur Raj");

//     const val2 = await p2
//     console.log(val2);
//     console.log("async Ankur Raj 2");
    
//  }

//  asyncGetData();

//  function promiseGetData() {
//     p.then((value)=>{console.log(value); // here javascript Engine will not wait for the promise to resolve.
//     });
//     console.log("Promise Ankur Raj");
//  }
//  promiseGetData();

/*
function step1(cb) {
  setTimeout(() => cb('Step 1 done'), 0);
}
function step2(data, cb) {
  setTimeout(() => cb(data + ' -> Step 2 done'), 0);
}
step1(data => step2(data, final => console.log(final)));
*/

/**
 See above is a classic example of the problem with the callbacks :-

 "Inversion of Control."
1. The Problem with Callbacks: "Giving Away Control"
In the original callback version, you are handing your next step (the callback function) into the previous function.

Dependency: step1 has to "know" how to call your callback. If step1 has a bug and calls your callback twice, or never calls it at all, you lose control.

Callback Hell: As you saw, to do 3 steps, you have to nest them: step1(step2(step3())). The code grows horizontally (the "Pyramid of Doom").

Error Handling Nightmare: You have to handle errors inside every single nested function. If step1 fails, you handle it there. If step2 fails, you handle it in a different nested block. It's messy.

So to prevent all this we must use Promise here see below :-
 */

function step1() {
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('step 1 done')
        },0)
    });
    return p;
}

function step2(data) {
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data + '-> Step 2 done')
        },0)
    })
    return p;
}

async function runSteps() {
  try {
    // 1. Wait for step1 to finish and store the result in 'val1'
    const val1 = await step1(); 

    // 2. Pass 'val1' to step2, wait for it, and store the final result
    const finalResult = await step2(val1);

    // 3. Print the result
    console.log(finalResult);
  } catch (error) {
    // 4. If ANY step fails, it jumps straight here
    console.log("Error happened:", error);
  }
}
runSteps();

/**
 Why is async/await better than .then()?
While Promises are great, async/await is the "final boss" of clean code for three main reasons:-

1. It looks "Synchronous"
With .then(), you still have to pass small functions (val) => ... into every step. With await, the code looks like a normal list of instructions. There are no arrows (=>) or extra parentheses to keep track of. It reads top-to-bottom, just like a recipe.

2. Better Variable Sharing
Imagine you need the result of Step 1 inside Step 3.
With .then(): You have to nest the calls anyway just to keep val1 in scope, or create a variable outside the chain.
With async/await: val1 is just a regular variable. It stays available for the entire function!

3. Standard Error Handling (try/catch)
With .then(), you use .catch(). With async/await, you use try/catch. This is the exact same way you handle errors in normal, non-async JavaScript. It makes your code more consistent.

The "Mental Model" Shift :-
Callbacks: "Here is a function; call it when you're done." (Messy)
Promises (.then): "Give me a receipt, and I'll attach the next step to it." (Better)
Async/Await: "Pause this function right here until the receipt is ready, then give me the value and move to the next line." (Best)

 */

//-----------------------------------------fetch Api using async await--------------------------------------------------
/*
async function handleFetchApi(){

    try{
    const data = await fetch("https://api.github.com/users/Ankur-function"); // fetch api returns promise
    const jsonData = await data.json();// this line will only be executed once above line is resolved
    console.log(jsonData);// similarly this line will only be executed once above line is resolved
    }catch(error) {
        console.log(error);
    }

}

handleFetchApi();
*/
