/**
 JavaScript is indeed single-threaded and synchronous at its core, but these terms mean slightly different things in practice: 

Single-threaded: It has only one Call Stack. This means it can only execute one line of code or one instruction at any given moment. It cannot perform multiple intentional actions simultaneously on its own.

Synchronous: It executes code sequentially, in the order it appears. Each line must wait for the previous one to finish before starting. 

Why this is a "Paradox" :-
If JavaScript only did one thing at a time and waited for every task to finish, your browser would freeze every time you fetched data or set a timer. 

To solve this, JavaScript uses a Non-blocking model by "teaming up" with the environment (the browser or Node.js): 

The Call Stack: Handles the fast, synchronous code (like console.log).

Web APIs: When JavaScript sees an "asynchronous" task like setTimeout or fetch, it doesn't wait. It hands that task off to the Browser's Web APIs to handle in the background.

The Task Queue: Once the background task is done (e.g., the 5-second timer is up), the result is moved to a "waiting line" called the Task Queue(Callback Queue).

The Event Loop: This is the "conductor." It waits until the Call Stack is completely empty, then it takes the first task from the queue and pushes it onto the stack to be executed. 


What is Asynchronous Operation :-

An asynchronous operation in JavaScript is a task that starts now but finishes at a later time, allowing the rest of your code to keep running in the meantime. 

Because JavaScript is single-threaded, it can only do one thing at a time. Without asynchronous operations, a slow task (like a 5-second API call) would "block" your entire app, making the screen freeze until the data arrives.

How it Works (The Event Loop) :-
When you run an asynchronous task (like fetch or setTimeout), JavaScript doesn't wait around. It offloads the task to the Browser (Web APIs) and moves to the next line of code. 

The Call Stack: Executes your regular, synchronous code line-by-line.
Web APIs: Handle the long-running task in the background.
Callback Queue: Once the background task finishes, its "result" (callback) is placed in a queue.
Event Loop: Constantly checks if the Call Stack is empty. If it is, it pushes the waiting callback from the queue onto the stack to finally execute it.

Common Examples :-
fetch(): Requesting data from a server.
setTimeout(): Delaying code execution for a specific time.
fs.readFile(): Reading a file from a disk in Node.js.
Event Listeners: Waiting for a user to click a button

Why We Use It :-
Responsiveness: It prevents the UI from "freezing" while waiting for data.
Efficiency: You can start multiple tasks simultaneously (like fetching 3 different API calls at once) instead of one-by-one.
 */

