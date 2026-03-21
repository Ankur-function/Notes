/**
 A Promise is an object representing the eventual completion or failure of an asynchronous operation
 and its resulting value.

 Promise States
    A Promise can be in one of three mutually exclusive states:-

Pending: The initial state; the operation is still in progress. The promise has not yet been resolved or rejected.
Fulfilled (or Resolved): The operation completed successfully, and a resulting value is available.
Rejected: The operation failed, and an error (or reason for failure) is provided. 

Key Methods for Consumption
You attach handlers to a promise using the following methods:-

.then(): Takes up to two callback functions as arguments: the first for the fulfilled case, and the second for the rejected case. It returns a new Promise, which enables promise chaining.
.catch(): A more readable way to handle only the rejection case (errors). It is essentially syntactical sugar for .then(null, onRejected).
.finally(): Contains a callback that executes regardless of whether the promise was fulfilled or rejected, often used for cleanup tasks. 
 */

// const promiseOne = new Promise((resolve,reject)=>{
    //Do async task
    //DB task, Network related task
//     setTimeout(()=>{
//         console.log('Async task is complete');
//         resolve();
//     },1000)
// }); 

// promiseOne.then(()=>{// .then directly represents resolve and yha pe upar wale Promise ki task ki value return hoti hai. 
//     console.log('Promise consumed');
    
// }) 

// const promiseTwo = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//      resolve({username:'ankur',email:'ankur@gmail.com'}) // passing value to .then
//     },1000)
// })

// promiseTwo.then((value)=>{
// console.log(value);

// })

// const promiseThree = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         let error = true; // false
//         if (!error) {
//             resolve({username:'ankur',password:1234});
//         }else{
//             reject('Error: Something went wrong');
//         }
//     },1000)
// })

// const usernameValue = promiseThree.then((value)=>{
//     return value.username;
// }).then((username)=>{console.log(username)}).catch((err)=>{console.log(err)}).finally(()=>{console.log("The Promise is either resolved or rejected");
// });

//Note:-  ye above chaining hai .then and catch ka...isme pehle wala .then jo return karega uska value second wale me aayega.
// fir second wala .then jo karega uska value third wale .then me aayega and so on. and .catch error ko pakadta hai agar aata hai to.


// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true; // false
//         if (!error) {
//             resolve({username:'javascript',password:129});
//         }else{
//             reject('Error: JS went wrong');
//         }
//     },1000)
// });

// Method 2 (using async-await) :-
async function consumePromiseFour() { // async await use karne se ab aage nhi badhega jab tak ye function execute nhi ho jata.
   try { // ab agar async-await method se karna hai to try-catch lagana hoga so that error handling kar sake similarly jaise promise me .then and .catch jaise kaam karta hai waise hi ye bhi kaam karta hai.
     const response = await promiseFour;
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
}
consumePromiseFour();

async function getAllUsers(){
try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await response.json();// this gives a promise. and yha response.json() ko bhi convert hone me time lagta hai so ye bhi promise hi return karta hai so isko bhi yha pe await karna hoga. yaa fir below .then ke method se kar lo 
//   data.then((value)=>{// if you don't want to use await in the above line
//   console.log(value);

//   })
  console.log(data);
  
} catch (error) {
    console.log(error);
    
}
}

getAllUsers();


///////////////////////////////////////////////////////// fetch() ///////////////////////////////////////////////////////////////
// Method 2 to do above task :-

const response = fetch('https://jsonplaceholder.typicode.com/users');
response.then((value)=>{return value.json()}).then((data)=>{console.log(data)}).catch((err)=>{console.log(err);
})

/**
 * Note :-
  A fetch() api only rejects when a network error is encountered(which is usually when there is a permission issue or similar)
  A fetch () promise does not reject on HTTP errors (e.g. 404,501 etc). so server se kucch bhi aaye even if it is a error it comes 
  under response and we must handle inside .then()
 */