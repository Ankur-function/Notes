/**
 Topics Covered :-

 Callbacks, Asynchronous, Promises, async-await, setTimeout
 */

 /**
Write a function applyAndSum(arr, fn) that applies fn to each number in arr (callback style) and returns the sum of results.

Example: applyAndSum([1,2,3], x => x*2) // 12
  */

/**
 Problem 1: The Delayed Calculator
Objective: Write a function that takes two numbers and a callback function. It should wait 1.5 seconds, add the numbers together,
           and then pass the result to the callback.
 */

/**
 Problem 2: The Classic Loop Trap
Objective: The following code is supposed to print 0, 1, 2, 3, 4 with a one-second delay between each print. Instead,
           it prints 5 five times. Fix the code so it works as intended without changing the setTimeout timing logic.

            // Broken Code
            for (var i = 0; i < 5; i++) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
            }
            // Fix the code above!
 */

/**
 Problem 3: Promisifying a Callback
Objective: The setTimeout function uses callbacks. Your task is to wrap it in a Promise. Create a function called delay(ms) that
           returns a Promise that resolves after ms milliseconds.
 */

/**
 Problem 4: Chaining Promises
Objective: You have two simulated API calls. getUser(id) fetches a user, and getPosts(username) fetches their posts.
 Chain these Promises together to get User #1, then use their username to get their posts. Log the final posts array. Catch any errors.
 */

/***
 Problem 6: Parallel vs. Sequential Execution
Objective: You have three slow functions. Write an async function that runs them concurrently (at the same time) rather than
           waiting for one to finish before starting the next. Return the total combined array of results.
 */

/**
 VVI
 Problem 7: Auto-Retrying an API Call
Objective: Network requests fail sometimes. Write an async function fetchWithRetry(url, retries) that attempts to call fakeFetch().
           If it fails, it should wait 1 second, and try again. It should do this up to retries times. If it fails on the last retry, it should finally throw the error.
 */
/**
 * VVI
 * what will be the output and also perfrom below task using promises and async-await
 function step1(cb) {
  setTimeout(() => cb('Step 1 done'), 0);
}
function step2(data, cb) {
  setTimeout(() => cb(data + ' -> Step 2 done'), 0);
}
step1(data => step2(data, final => console.log(final)));
 */

/**
 Write a function mapAsync that takes an array and a callback, uses forEach with setTimeout(0) to asynchronously map elements,
 collects results in an array, logs when all done. Test with [1,2], cb x=>x*2, log [2,4].
 */

 /**
  predict output :

  console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
console.log('End');
  */

/**
 * VVI
 predic output ?

 setTimeout(() => console.log('First'), 100);
setTimeout(() => console.log('Second'), 50);
 */

/**
 * VVI
 Write code using setTimeout to log numbers 1 to 3 with 100ms delay between each.
 */

 /**
  * VVI
  const timer = setTimeout(() => console.log('Will run?'), 100);
clearTimeout(timer);
console.log('Cleared');
  */

/**
 * VVI
 let i = 0;
function tick() {
  console.log(i++);
  if (i < 3) setTimeout(tick, 0);
}
tick();
 */

/**
 * VVI
 What is the output?

 let calls = 0;
const throttled = () => {
  if (calls++ < 2) setTimeout(throttled, 0);
  else console.log('Throttled at ' + calls);
};
throttled();
 */

/**
 console.log('Sync');
setTimeout(() => {
  setTimeout(() => console.log('Deep'), 0);
  console.log('Inner');
}, 0);
 */

/**
 Implement a setInterval polyfill using setTimeout that runs a callback every ms, stops after n runs, returns stop function.
 Test every 100ms, 3 times, log 1,2,3.
 */

 /**
  Predict the result:

  new Promise((_, reject) => reject('Error')).catch(err => console.log(err));
  */

/**
 Write a promise that resolves after 100ms with 'Done', then logs it.
 */

 /**
  new Promise(resolve => setTimeout(() => resolve(1), 0))
  .then(x => x * 2)
  .then(y => console.log(y));
  */
/**
 VVI
 new Promise((_, reject) => reject(42))
  .then(null, err => err * 2)
  .then(z => console.log(z));
 */

/**
 Write a function fetchUser that returns a promise resolving to {id:1, name:'Alice'} after 50ms. Chain .then to log name.
 */

/**
 * VVI
 const p1 = new Promise(resolve => setTimeout(resolve, 200, 'Slow'));
const p2 = new Promise(resolve => setTimeout(resolve, 100, 'Fast'));
Promise.race([p1, p2]).then(console.log);
 */

/**
 Promise.all([
  Promise.resolve(1),
  new Promise((_, reject) => reject('Fail'))
]).catch(err => console.log('All failed: ' + err));
 */

/**
 Implement promiseAll polyfill that takes array of promises, returns promise resolving to array of values when all succeed,
 rejects on first fail. Test with two resolves and one reject, log reject.
 */

 /**
  console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');
  */
/**
 async function test() {
  console.log('Async');
}
test();
console.log('Sync');
 */

/**
 Write code to fetch two async values (use setTimeout promises) and log their sum.
 */

 /**
  * VVI
  setTimeout(() => console.log('T1'), 0);
Promise.resolve().then(() => console.log('P1'));
console.log('Sync');
  */

 /**
  let arr = [];
[1,2].forEach(n => {
  setTimeout(() => arr.push(n * 2), 0);
});
console.log(arr.length); // Immediately after?
// also write a code to make it work and that give [2,4] as output
  */

/**
 Write a function parallelTasks that runs two async ops (setTimeout promises), waits for both, logs 'All complete'.
 */

 /**
  setTimeout(() => console.log('Macro'), 0);
Promise.resolve().then(() => console.log('Micro'));
  */

/**
 VVI
 function asyncDeep(n) {
  if (n === 0) return Promise.resolve('Done');
  return Promise.resolve().then(() => asyncDeep(n-1)).then(x => x + ' ' + n);
}
asyncDeep(2).then(console.log);
 */

/**
 Implement an async queue: function that takes tasks (callbacks), executes them sequentially with delays, returns promise resolving when all done. 
 Test with three tasks logging 'Task 1', etc.
 */

 /**
  async function fetch() {
  return 'Data';
}
fetch().then(console.log);
  */

/**
 async function test() {
  await new Promise(resolve => setTimeout(resolve, 0));
  console.log('After await');
}
test();
console.log('Before');
 */

/**
 Write an async function getData that awaits a 100ms promise, returns 'Loaded', call and log.
 */

 /**
  async function risky() {
  throw new Error('Oops');
}
risky().catch(e => console.log(e.message));
  */

/**
 async function chain() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(2);
  return a + b;
}
chain().then(console.log);
 */

/**
 Write async function sequential that awaits two delayed promises (100ms 'A', 200ms 'B'), logs 'A then B'.
 */

/**
 VVI

 async function parallel() {
  const p1 = new Promise(r => setTimeout(r, 100, 'P1'));
  const p2 = new Promise(r => setTimeout(r, 50, 'P2'));
  const [a, b] = await Promise.all([p1, p2]);
  console.log(a + ' ' + b);
}
parallel();
 */

/**
 VVI

 async function handle() {
  try {
    await Promise.reject('Fail');
  } catch (e) {
    console.log('Caught: ' + e);
  }
  console.log('Continue');
}
handle();
 */
/*
async function handle() {
  try {
    await Promise.reject('Fail');
  console.log('Continue');
  } catch (e) {
    console.log('Caught: ' + e);
  }
}
handle();
*/
 
/**
 VVI
 Implement an async generator-like function using async/await that yields values from an array with delays, consumes with a loop, sums them.
 Test [1,2,3] 100ms each, log 6.
 */


