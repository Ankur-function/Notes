/**
 We can take a function and pass it to another function and when we do so then that function which we passed in to another function
 is called as callback function.

 These callback functions are very powerful it gives a whole asynchronous operation in a synchronous single threaded language.
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

 */

/**
 When can we use callback functions :-

 We use callback functions when we need to perform asynchronous operation(i.e. something that will happen later) like , Fetching APIS, 
 setTimeout , or any event (e.g. onClick etc)

 In asynchronous task normal funciton invocation won't work. callback allows us to invoke the function later.

Fetch API: The trigger is the Server responding.
setTimeout: The trigger is the Clock ticking.
onClick Callback: The trigger is the User clicking.

In all three cases, you use a callback function because you are telling JavaScript: "Don't run this code during the normal flow; wait for the trigger, then run it."

 */

 

