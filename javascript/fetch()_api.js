// fetch() :- Superpower given by browser to us to call the external APIs.

/**
 * Important Doubts :-
 
 Q) why do you write .json while using Promise. ?? how this json connected with the returning promise form fetch() api ??

 Great question. It’s a common point of confusion because there are actually two separate promises happening back-to-back.

 1. The first promise: fetch() :-
When you call fetch(), it returns a promise. When that promise resolves, it gives you a Response Object.
The catch: At this moment, you only have the "envelope" (headers, status code). The "letter" (the actual data) is still a stream of raw data that hasn't been read yet.

2. Why the .json()?
The .json() method is a tool on that Response object. Its job is to take that raw stream and turn it into a JavaScript object you can actually use.
Crucial Part: Because reading a large stream takes time, .json() also returns a promise

How they connect :-
You use them in a chain. The first then receives the response, and the second then receives the actual data see below.

fetch("============api.url==============") // 1. Promise: Starts the network request
  .then((response) => {
    // This is the Response Object (the envelope)
    return response.json(); // 2. Promise: Starts reading/parsing the body
  })
  .then((data) => {
    // This is the final JS Object (the letter)
    console.log(data);
  });

Why not just return the data immediately?
Imagine you're downloading a huge 1GB file. If fetch waited to give you the data until the whole file was parsed, your app would freeze. By using two steps, React/JavaScript can:
Check if the request was successful (response.ok). (The Envelope (response.ok))
Start parsing the data in the background without blocking your code. (The Letter (Final JS Object))


 */