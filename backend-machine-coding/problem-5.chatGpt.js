/**
5. API Rate Limiter

Implement a rate limiter that restricts how many requests a user/IP can make within a time window.
*/

// 1) router.get('/user/profile',rateLimiter,getProfile)

const map = new Map();

const rateLimiter = (req,res,next) =>{
    const ip_address = req.ip;

    const currDate = new Date();
    const currTime = currDate.getTime();
    const value = map.get(ip_address);
 
    if(map.has(ip_address)){

        const date =  value.windowStart;
        const time =  date.getTime();

        if(currTime-time<60000){
            if(value.count>=100){
                return res.status(429).json({message:'API limit exceeded'});
            }
            map.set(ip_address,{windowStart:date,count:value.count + 1});
        }else{
            map.set(ip_address,{windowStart:currDate,count:1})
        }
    }else{
        map.set(ip_address,{windowStart:currDate,count:1})
    }
    next();
}

/**
 * Follow up 1 :-
 * 
 * Above one is a basic rate limiter and it works like 100 requests per 60-second window, where the window starts when the first request occurs.
 * 
 * but what if interviewer says :-
 * "Your above limiter allows 100 requests per 60 seconds, but we want to guarantee that a client cannot make more than 100 requests in any rolling 60-second period."
 * 
 * but now we want At every request, look at the previous 60 seconds and make sure there weren't already 100 requests.and for this we
 * need sliding window concept.
 * 
 * NOTE :- sliding-window limiter controls the number of requests in the last 60 seconds at every point in time.
 * 
 sliding window says:-

"At every request, independently look backward 60 seconds and count only the requests that are still inside that period."
 */

const map = new Map();

const rateLimiterUsingSlidingWindow = (req,res,next) =>{
    const ip_address = req.ip;

    const currDate = new Date();
    const currTime = currDate.getTime();
    const value = map.get(ip_address);
    const set = new Set();
 
    if(value){
        const date =  value.currentReqWindow;
        date.forEach((d)=>{
            const time =  d.getTime();
            if(((currTime-60000)<time) && (time<currTime)){
                set.add(d);
            }
        });
        const updatedValue = [...set];
        if(updatedValue.length>=100){
            return res.status(429).json({message:'API limit exceeded'});
        }
        updatedValue.push(currDate);
        map.set(ip_address,{currentReqWindow:updatedValue});
    }else{
        map.set(ip_address,{currentReqWindow:[currDate]})
    }
    next();
}


/**
 * Follow-ups we'll eventually cover

Follow-up 1 — Fixed Window

Why can a simple counter have a boundary/burst problem?

Follow-up 2 — Sliding Window

How does a sliding-window rate limiter work?

Follow-up 3 — Token Bucket

What is the token-bucket algorithm and why is it useful?

Follow-up 4 — Redis

Why does an in-memory Map fail when you have multiple Node.js servers?

Follow-up 5 — Redis implementation

We'll implement the rate limiter using Redis.

Follow-up 6 — Atomicity / Race Conditions

What happens if 100 requests arrive simultaneously?

Follow-up 7 — Distributed Rate Limiting

How would the design work behind a load balancer with multiple Node.js instances?

Follow-up 8 — User vs IP

When should you rate-limit by IP, user ID, API key, or some combination?
 */

// ! follow up 3 se 8 baaki hai i will do it later if i get time.