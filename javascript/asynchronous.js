/**
 
 */


/**
 The Technical Difference :-

Feature	            Promises (.then)	                                async/await
Execution	        Non-blocking (moves to next line immediately)	    Pauses the function (waits for result)
Syntax	            Functional (uses callbacks/arrows)	                Procedural (looks like normal code)
Variables	        Data is trapped inside the .then block	            Data is stored in a regular variable
Error Handling	    Uses .catch()	                                    Uses try/catch
 */



//-----------------------------------------------------------setTimeout--------------------------------------------------------------

/**
 Q)
 so i mean setTimeout works asynchronously so do we always have to use either calllbacks, promises or async-await to
 get the data from setTimout ???? or can we use any normal variable or 'return' keyword inside it to get the data ??

 Answer :

To get data "out" of a setTimeout, you must use one of the asynchronous patterns (callbacks, Promises, or async/await).
You cannot simply use a normal return keyword inside the timeout to pass data back to the outer function. 

Why return inside setTimeout doesn't work :
When you call setTimeout, it schedules a task to run in the future and then finishes immediately. 

The Problem: By the time the code inside your setTimeout finally runs and tries to return something, the outer function has already finished and is gone from memory.
Result: The return value essentially goes "nowhere" because there is no function waiting to receive it

Why normal variables are tricky :
While you can update a global or outer variable from inside a setTimeout, it won't help you in the way you expect:

let myData;
setTimeout(() => { myData = "Done!"; }, 1000);
console.log(myData); // Prints: undefined

In this example, console.log runs instantly, but the variable won't be updated for 1 second. Your code will always see undefined 
because it doesn't "wait" for the timer to finish. 

Summary of options :-

To get data out safely, you have three standard paths:
Callbacks: Pass a function that gets called when the data is ready.
Promises: Wrap the timeout in a Promise so you can "chain" the result.
Async/Await: Use await on that Promise to pause your code until the data arrives.
 */


/**
 Note :-
 To reliably get data out of any asynchronous operation (like setTimeout, database queries, or API calls), 
 you must use one of these three patterns :-
 1)Callbacks (Poor way)
 2)Promises (Better)
 3)Async-Await (Best)

 The "Big Three" are your only bridges:
Callbacks: "Don't call me, I'll call you (and give you the data) when I'm ready."
Promises: "Here is a 'IOU' note. I'll swap it for real data as soon as I have it."
Async/Await: "Stop everything on this line until that 'IOU' note turns into real data."

 */
