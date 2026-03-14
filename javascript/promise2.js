/*
let cart = ["shoes","pants","kurtas"] ;

 createCart()
 .then((val)=>{return val})
.then((value)=>{return proceedToPayment(value);
})
.then((value)=>{return showOrderSummary(value);
})
.then((value)=>{console.log(value);
})
.catch((e)=>{console.log(e);
})


 function createCart(){
    let p = new Promise((resolve,reject)=>{
        
         if (!validateCart()) {
            const e = new Error();
            reject("You are not validated try again");
         }else{
            let cartId = '1234';
            setTimeout(()=>{
            resolve(cartId);
            },3000)
         }

    })
    return p;
}

function proceedToPayment(value) {
    let p = new Promise((resolve,reject)=>{
        if (value=="1234") {
        resolve("Payment is successful");
        }
    });
    return p;
}

function showOrderSummary(value){

    let p = new Promise((resolve,reject)=>{
        if (value=="Payment is successful") {
            resolve("your order summary is fullfilled")
        }
    });
    return p;
}

function validateCart(){
return true;
}

*/

  function step1(cb) {
  setTimeout(() => cb('Step 1 done'), 0);
}
function step2(data, cb) {
  setTimeout(() => cb(data + ' -> Step 2 done'), 0);
}
step1(data => step2(data, final => console.log(final)));

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

step1().then((val)=>(val)).then((val)=>(step2(val))).then((val)=>(console.log(val)
)).catch((error)=>{console.log(error)});

/**
 2. How Promises Make it Better: "Keeping the Receipt"
When a function returns a Promise, it’s like the function giving you a receipt for a task that isn't finished yet.

You Keep Control: step1() doesn't take your next step as an argument. It just gives you the "receipt" (the Promise). You decide what happens next by attaching .then().

Flattening the Code: Because .then() always returns a new Promise, you can chain them vertically.
Callback: step1 -> step2 -> step3 (Nested like a box inside a box)
Promise: step1 -> .then -> .then -> .then (Like a vertical list)
The "Catch-All" Error: This is the biggest win. You can put one .catch() at the very bottom. If any step in the chai
 */


//---------------------------------------------Promise.all(), Promise.Settled(), Promise.race(), Promise.any()------------------------------------------------------------------

   const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("P1: promise is resolved now.");
        reject("P1: promise is rejected now");
    },1000)
   });

   const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("P2: promise is resolved now");
        reject("P2: promise is rejected now");
    },2000)
   });

   const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P3: promise is resolved now");
    },3000)
   });


// 1) Promise.all() :-

/**
1) when to use :-  Use Promise.all() when you need to perform multiple asynchronous tasks simultaneously and the success of your next step depends on all of them completing successfully.

2) it takes an array of promises as an input and it will wait for all the promises to finish and then only it returns values.
   if any of the promise from the array fails then entire promise will fail and output will be the error. and it will not check other promises.
 */


//    const result = Promise.all([p1,p2,p3]).then((val)=>{console.log(val);
//    }).catch((err)=>console.log(err));
//    console.log(result);
   


// 2)Promise.allSettled() :- (here settles means got the result, this does not mean it resolves)

/**
 1) It will wait for all the promises to setteled.
 2) It will give the results even if any promise rejects. so it will always gives an output containing all success and failure in response.here respomse comes in form of object.
 */

//  const result2 = Promise.allSettled([p1,p2,p3]).then((val)=>{console.log(val);
//  }).catch((err)=>{console.log(err)});

 // 3) Promise.race() :-

 /**
  whatever promise settels first from the array of promises only that promise value(even if it fails then error will be returned) will be returned.
  */
// const result3 = Promise.race([p1,p2,p3]).then((val)=>{console.log(val);
//  }).catch((err)=>{console.log(err)});

// 4) Promise.any() :-

  /**
   Similar to Promise.race() it also returns the value of first promise only difference is that it waits for the promise to be resolved successfully.
   If one promise rejects then it will check for other one to be resolved successfully and so on. so it returns the success or resolved
   value only of the first promise. if none of the promise from the array gets successful then it will return an array of all aggregated errors.
   */
  const result4 = Promise.any([p1,p2,p3]).then((val)=>{console.log(val);
 }).catch((err)=>{console.log(err)});