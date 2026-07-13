/**
 Topics included :-

 forEach, map, filter , reduce, find, some,every , Sets, Maps. you can also inlcude like splice, slice, any array or object methods ,
Object.entries,Object.keys inside it etc.
 */

/**
 1)
 Problem 1: The Audit Log NormalizerTopics: reduce, Object.entries, filter/map logic, and Memory Efficiency.
 The ScenarioImagine you are building a dashboard for a security team. You receive a "flat" array of log entries from a database.
This array is unsorted and contains data for many users.Your Goal: Transform this flat array into a "Normalized Object" grouped by
userId.
The Data :-

const logs = [
  { userId: 'u1', action: 'login', timestamp: '2024-05-01T10:00:00Z' },
  { userId: 'u2', action: 'login', timestamp: '2024-05-01T11:00:00Z' },
  { userId: 'u1', action: 'click', timestamp: '2024-05-01T10:05:00Z' },
  { userId: 'u3', action: 'login', timestamp: '2024-04-01T10:00:00Z' }, // Older log
  { userId: 'u2', action: 'logout', timestamp: '2024-05-01T12:00:00Z' }
];

The RequirementsFilter by Time: Only include logs where the timestamp is within the last 24 hours.
(For the sake of this exercise, assume "now" is 2024-05-01T23:59:59Z).Grouping: Use .reduce() to create an object where each key is a 
userId.Transformation: The value for each key should be an array of objects, but remove the userId key from those objects (
since it's now the parent key).Final Polish: Use Object.entries() at the end to print a string for each user: "User [ID] performed [X] actions".
The Expected Output :-// The intermediate object should look like:
{
  u1: [ { action: 'login', timestamp: '...' }, { action: 'click', timestamp: '...' } ],
  u2: [ { action: 'login', timestamp: '...' }, { action: 'logout', timestamp: '...' } ]
}
// Note: u3 is gone because it's too old.
The "Senior" ChallengeTry to accomplish the Filter, Grouping, and Transformation in a single pass (one .reduce() call) 
to keep it $O(n)$ time complexity. Avoid running .filter().map().reduce() as that iterates over the data 3 times.
 */


/**
 Problem 2: The Relationship Mapper (Sets & Maps)Since you handled the array manipulation well, let's test your ability to handle
Relational Data and Performance using Map and Set.The ScenarioYou are building a "Contact Sync" feature. You have two sources of
data: existingContacts: A Map where the key is email and the value is a user object.newLeads: An Array of user objects coming from 
a marketing tool.The Goal :- Create a function syncContacts(existingContacts, newLeads) that returns an object with three specific 
lists:toUpdate: Leads that already exist in the Map (match by email).toAdd: Leads that do not exist in the Map.duplicatesInLeads: 
A list of emails that appeared more than once in the newLeads array itself.

const existingContacts = new Map([
  ['alice@test.com', { name: 'Alice', role: 'Admin' }],
  ['bob@test.com', { name: 'Bob', role: 'User' }]
]);

const newLeads = [
  { email: 'alice@test.com', name: 'Alice Smith' }, 
  { email: 'charlie@test.com', name: 'Charlie' },
  { email: 'bob@test.com', name: 'Robert' },      
  { email: 'charlie@test.com', name: 'Charlie' },  
];

Expected Output :-
{
  toUpdate: [
    { email: 'alice@test.com', name: 'Alice Smith', role: 'Admin' },
    { email: 'bob@test.com', name: 'Robert', role: 'User' }
  ],
  toAdd: [
    { email: 'charlie@test.com', name: 'Charlie' }
  ],
  duplicatesInLeads: ['charlie@test.com']
}
Constraints :- You must use a Set to track duplicates in the newLeads array.The function should only iterate through newLeads once.
The final toUpdate list should contain the merged data (Existing data + New lead data).Show me how you handle the $O(1)$ lookups with
the Map and Set!
 */

/**
 Problem 3: The Permission Gate
Topics: some, every, includes, and logical abstraction.

The Data :-

const user = {
  roles: ['editor', 'viewer'],
  tier: 'premium',
  flags: ['beta-tester']
};

const requirements = {
  allowedRoles: ['admin', 'editor'],
  requiredTier: 'pro', 
  prohibitedFlags: ['banned', 'suspended']
};

The Logic (Your Goal)
Write a function canAccess(user, requirements) that returns true only if all three conditions are met:-

1) Role Check: Does the user have at least one of the roles listed in allowedRoles?

2) Tier Check: Is the user's tier exactly the requiredTier OR does the user have the 'admin' role? (Admins bypass tier requirements).

3) Flag Check: Are none of the user's flags present in the prohibitedFlags list?

The "Senior" Constraints :-

No if statements.
Use Array methods (some, every, includes).
Try to structure the function so it returns the result of a single boolean expression.

Expected Output for the provided data: -

false
(Explanation: They pass the Role check (editor) and Flag check (not banned), but they fail the Tier check because they are 'premium' and not an 'admin').
 */

/**
 Problem 4:-

 Create a function moveTask(tasks, fromIndex, toIndex) that returns a new array with the item moved to the new position.

Constraints :-

Do Not Mutate the original tasks array.
You must use slice() to clone or extract parts.
You must use splice() to perform the move (but only on a copy!).
Handle Edge Cases: If the fromIndex or toIndex are out of bounds, return the original array.

The Data :-

const tasks = ['Email', 'Meeting', 'Coding', 'Lunch'];

// Move 'Meeting' (index 1) to the end (index 3)
Expected Output

// Result of moveTask(tasks, 1, 3):
['Email', 'Coding', 'Lunch', 'Meeting']

// tasks array remains: 
['Email', 'Meeting', 'Coding', 'Lunch']
 */

// Move 'Meeting' (index 1) to the end (index 3)

/**
 * Problem 5 :-

You are building a Shopping Cart Summary. You have an array of items, but some items are categorized, and some have discounts.

The Goal :-

Create a function getCartSummary(items) that returns an object showing:

totalPrice: The sum of all items after applying their specific discount %.

categoryCounts: An object showing how many items are in each category.

onSaleItems: A comma-separated string of the names of all items that had a discount > 0.

const cart = [
  { name: 'Laptop', price: 1000, category: 'Tech', discount: 10 }, // 10% off
  { name: 'Mouse', price: 50, category: 'Tech', discount: 0 },
  { name: 'Shirt', price: 20, category: 'Fashion', discount: 5 },
  { name: 'Jeans', price: 60, category: 'Fashion', discount: 0 },
  { name: 'Watch', price: 200, category: 'Fashion', discount: 15 }
];
Expected Output

{
  totalPrice: 1129, // (900 + 50 + 19 + 60 + 170)
  categoryCounts: { Tech: 2, Fashion: 3 },
  onSaleItems: "Laptop, Shirt, Watch"
}

Constraints :-

Use a single .reduce() call to generate the entire object.
Use Object.keys() or Object.entries() if needed for post-processing.
Use Template Literals for the string building.
 */

// totalPrice: The sum of all items's price after applying their specific discount %.

/**
 Problem VVI :-

The Scenario: The "Notification Hub"
Imagine you are building a central hub for an application. Different parts of your app want to "listen" for certain things to happen, and other parts of your app want to "broadcast" that those things have occurred.

Your task is to write a function called createEventBus. When this function is executed, it should return an object that acts as this hub.

The Three Core Requirements
Subscription (on):
You need a way to tell the hub: "Hey, whenever 'X' happens, run this specific function."

It should accept an event name (string) and a callback function.

One event name should be able to hold multiple different callback functions.

Broadcasting (emit):
You need a way to tell the hub: "Event 'X' just happened! Here is some data for everyone listening."

It should accept an event name (string) and a data object.

It must find all functions registered for that event and execute them one by one, passing the data into them.

Unsubscribing (off):
You need a way to tell the hub: "I don't want this specific function to run anymore when 'X' happens."

It should accept an event name and the specific callback function you want to remove.

It should only remove that one function, leaving other listeners for that same event name untouched.

The Architecture Goal
You need to figure out how to store these relationships internally so that you can quickly find them, loop through them, or delete them. Since you aren't using classes, you will be relying on closures—where your internal storage variable is defined inside createEventBus but accessed by the methods it returns.

The Test Case
If your logic is correct, this code should work:

JavaScript
const bus = createEventBus();

const action1 = (val) => console.log("Action 1:", val);
const action2 = (val) => console.log("Action 2:", val);

bus.on('ping', action1);
bus.on('ping', action2);

bus.emit('ping', 'First Broadcast'); 
// Should see both logs

bus.off('ping', action1);

bus.emit('ping', 'Second Broadcast');
// Should only see Action 2 log
Show me your implementation!
 */

/**
 🧩 Problem 1 — User Session Tracker

You need to build a function:

createSessionTracker()

When this function is executed, it should return an object that manages user sessions.

Think of this like a backend system that keeps track of which users are currently logged into the application.

✅ The returned object must have three methods
1) login(userId)
Marks the user as logged in.
If the same user calls login again, it must not create duplicates.
A user can be logged in only once at a time.
2) logout(userId)
Removes the user from the active session list.
If the user is not logged in, nothing should break.
3) getActiveUsers()
Returns an array of all currently logged-in userIds.
🧠 Behavioral Expectations (very important)

After this sequence:

const tracker = createSessionTracker();

tracker.login('u1');
tracker.login('u2');
tracker.login('u1');   // duplicate login attempt

tracker.logout('u2');

console.log(tracker.getActiveUsers());

The output must be:

['u1']
❗Constraints
You are not allowed to use classes.
You must rely on closures (like Event Bus problem).
You must choose appropriate data structures.
You must ensure no duplicates.
The internal storage must not be directly accessible from outside.
🎯 What this problem is testing
Choosing between Array / Object / Set
Using array/object methods correctly
Closure-based private state
Real-world session logic thinkingx
 */

/**
 🧩 Problem 2 — Product Inventory Manager (Detailed)

You must create:

createInventory()

This returns an object that manages products in a store.

Each product looks like:

{ id, name, stock }

The returned object must have these methods:-

1) addProduct(product)
Adds product to inventory
If a product with same id already exists, do not add duplicate

2) updateStock(id, qty)
Increase or decrease stock of that product
If product doesn’t exist → nothing should break

3) getOutOfStock()
Return array of products whose stock is 0

4) getAllProducts()
Return array of all products


Behavioral Example :-
const store = createInventory();

store.addProduct({id:1, name:'Pen', stock:10});
store.addProduct({id:2, name:'Book', stock:5});
store.addProduct({id:1, name:'Pen', stock:10}); // duplicate

store.updateStock(2, -5);

console.log(store.getOutOfStock());
// [{id:2, name:'Book', stock:0}]

console.log(store.getAllProducts());
// all products
Constraints
No classes
Must use closure
Must choose proper data structure
Use array/object methods where needed
 */

/**
 
🧩 Problem 3 — “Tag Based Article Manager”

You are building a mini system to manage articles for a blog platform.

Each article looks like:

{
  id: number,
  title: string,
  tags: ['js', 'react', 'node'],   // array of strings
  views: number
}
🎯 Your Task

Create a function:

createArticleManager()

This should return an object with the following methods.

All data must be private using closure.

1️⃣ addArticle(article)
Add article only if id is unique.
Store internally.

2️⃣ addView(id)
Increase views of that article by 1.

3️⃣ getArticlesByTag(tag)
Return all articles that contain this tag.

4️⃣ getMostViewedArticle()
Return the article with highest views.

5️⃣ getTagReport()

This is the main thinking part.

Return an object like:

{
  js: 3,
  react: 2,
  node: 1
}

Meaning: how many articles are using each tag.

This should be calculated from stored articles (not hardcoded).

6️⃣ getAllArticles()

⚠️ Very important (trap from previous problem)

Return articles in a way that external code cannot modify internal storage.


🧪 Test Case (your code should pass this)
const manager = createArticleManager();

manager.addArticle({ id: 1, title: 'JS Basics', tags: ['js'], views: 0 });
manager.addArticle({ id: 2, title: 'React Guide', tags: ['js','react'], views: 0 });
manager.addArticle({ id: 3, title: 'Node Intro', tags: ['js','node'], views: 0 });

manager.addView(2);
manager.addView(2);
manager.addView(3);

console.log(manager.getArticlesByTag('js')); 
console.log(manager.getMostViewedArticle()); 
console.log(manager.getTagReport()); 
console.log(manager.getAllArticles());
🧠 What this problem tests

You must naturally use:

some
forEach
filter
reduce
array + object thinking
closure
copying data safely

Exactly interview-level for 4+ years JS dev.
 */

/**
 * VVI
 Problem 9: The "Throttled" Action Logger
The Scenario
Imagine you are tracking how a user moves their mouse on a screen. The mouse moves hundreds of times per second. If you try to save every single movement to your database, your server will explode.

You need to build a Throttle Manager. It will accept many logs, but it will only "commit" (save) the most recent one at a specific time interval.

The Goal
Create a function createThrottledLogger(delay) that returns an object with:

log(data): Accepts data. It updates the "pending" log but does not print it yet.

forceFlush(): Immediately logs the most recent "pending" data to the console and clears the pending state.

The Challenge (The "Senior" Part)
Inside your closure, you need to use setInterval or setTimeout to automatically call forceFlush() every delay milliseconds.

Expected Usage
JavaScript
// Automatically logs every 2 seconds
const tracker = createThrottledLogger(2000); 

tracker.log("User at X: 10");
tracker.log("User at X: 20");
tracker.log("User at X: 30");

// ... 2 seconds pass ...
// Console: "Committed: User at X: 30" (The intermediate 10 and 20 are ignored/overwritten)

tracker.log("User at X: 100");
// ... 2 seconds pass ...
// Console: "Committed: User at X: 100"
Key Concepts to Use:
Closures: To store the lastData and the intervalID.

Timers: Use setInterval(() => { ... }, delay) inside the factory function so the "clock" starts ticking as soon as the logger is created.

State Overwriting: Notice how we only care about the latest data within that time window.
 */

///---------------------------------------------------Advance Problems------------------------------------------------------------

/**
 🧩 Problem 1 — Transaction Analytics Engine

You receive an array of transactions:

[
 { id: 1, userId: 101, amount: 500, type: 'credit', category: 'salary' },
 { id: 2, userId: 102, amount: 200, type: 'debit', category: 'food' },
 ...
]

Write a function that returns:

Total balance per user
Top spending category overall
Users who never did any debit
Category-wise total debit
Detect duplicate transaction ids
User who has done the highest number of transactions

All in one pass using reduce.



🧩 Problem 2 — Log Deduplication & Session Builder

You get raw logs:

[
 { userId: 1, timestamp: 1000 },
 { userId: 1, timestamp: 1005 },
 { userId: 1, timestamp: 2000 },
 ...
]

Rules:

If time gap > 300 → new session
Build sessions per user
Return:
Total sessions per user
Longest session duration
Users with more than 3 sessions
Remove duplicate logs (same userId + timestamp)

Use Map, Set, reduce.

🧩 Problem 3 — Product Variant Normalizer

Input:

[
 { name: 'iPhone', color: 'black', storage: '128GB' },
 { name: 'iphone ', color: 'Black', storage: '128 gb' },
 ...
]

Normalize data and return unique variants.

Rules:

Case insensitive
Trim spaces
Same product variant must appear once
Group by product name → list all unique variants
🧩 Problem 4 — Permission Resolution System

You have:

users = [
 { id: 1, roles: ['admin','editor'] },
 ...
]

roles = {
 admin: ['read','write','delete'],
 editor: ['read','write'],
 viewer: ['read']
}

Return final permission set per user.

Also find users having exact same permission set.

🧩 Problem 5 — Deep Object Difference Finder

Given two deeply nested objects, return:

Added keys
Removed keys
Updated values (with old/new)
Paths like: "address.city"

Must work for nested objects and arrays.

🧩 Problem 6 — Dependency Resolver (Topological Thinking)

Input:

[
 { task: 'A', dependsOn: [] },
 { task: 'B', dependsOn: ['A'] },
 { task: 'C', dependsOn: ['B'] }
]

Return correct execution order.

Also detect circular dependency.

🧩 Problem 7 — Smart Cache with Eviction

Implement a cache with limit N.

Rules:

Most recently accessed stays
Least recently used gets removed
Methods: get, set
Must be O(1)

Use Map cleverly.

🧩 Problem 8 — Data Consistency Auditor

Given array of orders:

Same user placing >5 orders in 1 minute → flag
Same product ordered by different users at exact same millisecond → flag
Orders with impossible sequence (timestamp going backwards per user) → flag

Return report.

🧩 Problem 9 — Nested Comment Flattener

Input nested comments with replies inside replies.

Return:

Flat array with depth level
Most replied comment
Comment tree rebuilt from flat list
🧩 Problem 10 — Schema Validator Engine

Given schema:

{
 name: 'string',
 age: 'number',
 address: {
   city: 'string'
 }
}

Validate array of objects against schema.

Return all validation errors with paths.
 */

/**
 * VVI
 Problem 1 (this problem hai below 6 parts in it.)
 You receive an array of transactions:

[
 { id: 1, userId: 101, amount: 500, type: 'credit', category: 'salary' },
 { id: 2, userId: 102, amount: 200, type: 'debit', category: 'food' },
 ...
]

Write a function that returns:

✅ 1) Total balance per user

For every user:

credit → add amount
debit → subtract amount

Final result example:

{
  101: 1200,
  102: -300,
  103: 450
}

✅ 2) Top spending category overall (debit only) :-

Among all debit transactions:

Which category has the highest total debit amount?

Example result:

'food'

✅ 3) Users who never did any debit :-

Some users might have only credit transactions.

Return:

[101, 108, 115]
These users never spent money.

✅ 4) Category-wise total debit

For debit transactions only:

{
  food: 1200,
  travel: 800,
  shopping: 450
}

✅ 5) Detect duplicate transaction ids

Transaction id is supposed to be unique, but data is dirty.

Return array of duplicate ids:

[3, 7, 18]

✅ 6) User who has done the highest number of transactions

Not amount.
Not debit/credit.

Purely count of transactions.

Return:

101

Constraints :- 
You must write one function that processes this array in a single reduce pass and returns a single analytics object containing ALL of the following insights.
You are not allowed to loop multiple times.Everything must be derived during that one reduce traversal.
All in one pass using reduce.
 

sample data input to test :-

const transactions = [
  { id: 1,  userId: 101, amount: 500,  type: 'credit', category: 'salary' },
  { id: 2,  userId: 102, amount: 200,  type: 'debit',  category: 'food' },
  { id: 3,  userId: 101, amount: 150,  type: 'debit',  category: 'shopping' },
  { id: 4,  userId: 103, amount: 1000, type: 'credit', category: 'salary' },
  { id: 5,  userId: 104, amount: 300,  type: 'debit',  category: 'travel' },
  { id: 6,  userId: 102, amount: 400,  type: 'credit', category: 'refund' },
  { id: 7,  userId: 101, amount: 100,  type: 'debit',  category: 'food' },
  { id: 8,  userId: 105, amount: 700,  type: 'credit', category: 'salary' },
  { id: 9,  userId: 105, amount: 200,  type: 'debit',  category: 'shopping' },
  { id: 10, userId: 106, amount: 50,   type: 'debit',  category: 'food' },

  // Duplicate IDs
  { id: 3,  userId: 107, amount: 900,  type: 'credit', category: 'salary' },
  { id: 7,  userId: 102, amount: 120,  type: 'debit',  category: 'travel' },

  // Users with only credit
  { id: 11, userId: 108, amount: 1000, type: 'credit', category: 'salary' },
  { id: 12, userId: 108, amount: 500,  type: 'credit', category: 'bonus' },

  // Users with only debit
  { id: 13, userId: 109, amount: 250,  type: 'debit',  category: 'food' },
  { id: 14, userId: 109, amount: 300,  type: 'debit',  category: 'shopping' },

  // Mixed heavy activity
  { id: 15, userId: 110, amount: 800,  type: 'credit', category: 'salary' },
  { id: 16, userId: 110, amount: 200,  type: 'debit',  category: 'travel' },
  { id: 17, userId: 110, amount: 100,  type: 'debit',  category: 'food' },
  { id: 18, userId: 110, amount: 50,   type: 'debit',  category: 'food' },
  { id: 19, userId: 110, amount: 75,   type: 'debit',  category: 'shopping' },

  // More noise
  { id: 20, userId: 103, amount: 300,  type: 'debit',  category: 'travel' },
  { id: 21, userId: 104, amount: 600,  type: 'credit', category: 'salary' },
  { id: 22, userId: 105, amount: 100,  type: 'debit',  category: 'food' },
  { id: 23, userId: 106, amount: 400,  type: 'credit', category: 'salary' },
  { id: 24, userId: 107, amount: 200,  type: 'debit',  category: 'shopping' },
  { id: 25, userId: 101, amount: 250,  type: 'credit', category: 'bonus' },

  // Another duplicate
  { id: 10, userId: 111, amount: 1000, type: 'credit', category: 'salary' }
];

*/

/**
 
🧩 Problem 2 —  VVVVVVVVVVVVIIIIIIIIIIIIIIIII
Log Deduplication & Session Builder (Detailed Spec)

You are given a large unordered array of user activity logs.

Each log looks like:

{
  userId: 1,
  timestamp: 1000
}

This means:

“User 1 did some activity at time 1000”

You don’t know what the activity is. Only when it happened.

Step 1 — Remove duplicate logs

Data is dirty.

You may receive logs like:

{ userId: 1, timestamp: 1000 }
{ userId: 1, timestamp: 1000 }  // duplicate

These must be treated as one log.

Duplicate rule:

Same userId AND same timestamp.

Step 2 — Build Sessions

This is the heart of the problem.

For each user independently, you must build sessions based on time gaps.

Session rule

If the gap between two consecutive logs for the same user is:

≤ 300 → same session
> 300 → new session starts

Very Important Detail

Logs are not guaranteed to be in order.

So for each user, you must consider their timestamps in sorted order.

Example:

User 1 logs:

1000
1005
2000
2300
2600

Now apply rule:

1000 → start session 1
1005 → gap 5 → same session
2000 → gap 995 → new session
2300 → gap 300 → same session
2600 → gap 300 → same session

          lastTime: time,
          sessionStart: time,
          sessionCount: 1,
          longest: 0
So sessions for user 1:

Session 1: [1000, 1005]
Session 2: [2000, 2300, 2600]
What you must compute from these sessions

After sessions are built for all users, return:

✅ 1) Total sessions per user
{
  1: 2,
  2: 1,
  3: 4
}
✅ 2) Longest session duration (across all users)

Session duration = last timestamp − first timestamp in that session.

Return the maximum duration among all sessions of all users.

Example:

Session: [2000, 2300, 2600]
Duration = 2600 - 2000 = 600
✅ 3) Users with more than 3 sessions

Return array of userIds:

[3, 7, 10]
✅ 4) Deduplication already applied

Your logic must behave as if duplicates never existed.

Required tools

You must use:

Map
Set
reduce

Because this is testing:

grouping → sorting → sessionizing → aggregating

What interviewer is testing here

This problem checks whether you can:

Clean dirty data
Group data per user
Sort within groups
Apply time-window logic
Compute analytics from derived structure

This is very common in real backend log processing.

Important Clarifications
Sessions are per user, never mixed between users
Sorting is per user, not entire array
Duration is from first to last log in that session
Users may have 0, 1, or many sessions

When you’re ready, implement it and send.
I’ll review like a strict interviewer.

sample data input to test :- .

Here is a rich, messy, unordered dataset to properly test every rule:

Duplicates present
Logs out of order
Multiple users
Users with many sessions
Edge gaps exactly 300
Gaps just above 300

const logs = [
  { userId: 1, timestamp: 1000 },
  { userId: 1, timestamp: 1005 },
  { userId: 1, timestamp: 1000 }, // duplicate
  { userId: 1, timestamp: 2000 },
  { userId: 1, timestamp: 2300 },
  { userId: 1, timestamp: 2600 },

  { userId: 2, timestamp: 500 },
  { userId: 2, timestamp: 900 },
  { userId: 2, timestamp: 1305 }, // gap >300 → new session
  { userId: 2, timestamp: 1600 },
  { userId: 2, timestamp: 1600 }, // duplicate

  { userId: 3, timestamp: 100 },
  { userId: 3, timestamp: 200 },
  { userId: 3, timestamp: 600 },  // new session
  { userId: 3, timestamp: 650 },
  { userId: 3, timestamp: 1200 }, // new session
  { userId: 3, timestamp: 1500 },
  { userId: 3, timestamp: 1510 },
  { userId: 3, timestamp: 3000 }, // new session

  { userId: 4, timestamp: 700 },
  { userId: 4, timestamp: 1000 }, // gap = 300 → same session
  { userId: 4, timestamp: 1401 }, // gap >300 → new session

  { userId: 5, timestamp: 50 },
  { userId: 5, timestamp: 55 },
  { userId: 5, timestamp: 60 },
  { userId: 5, timestamp: 65 },

  { userId: 6, timestamp: 5000 },
  { userId: 6, timestamp: 5401 }, // new session
];

This dataset is sufficient to validate:

Deduplication
Sorting per user
Session breaks at >300
Edge case at =300
Users with many sessions (user 3)
Users with single session (user 5)
 

const logs = [
  { userId: 1, timestamp: 1000 },
  { userId: 1, timestamp: 1005 },
  { userId: 1, timestamp: 1000 }, // duplicate
  { userId: 1, timestamp: 2000 },
  { userId: 1, timestamp: 2300 },
  { userId: 1, timestamp: 2600 },

  { userId: 2, timestamp: 500 },
  { userId: 2, timestamp: 900 },
  { userId: 2, timestamp: 1305 }, // gap >300 → new session
  { userId: 2, timestamp: 1600 },
  { userId: 2, timestamp: 1600 }, // duplicate

  { userId: 3, timestamp: 100 },
  { userId: 3, timestamp: 200 },
  { userId: 3, timestamp: 600 },  // new session
  { userId: 3, timestamp: 650 },
  { userId: 3, timestamp: 1200 }, // new session
  { userId: 3, timestamp: 1500 },
  { userId: 3, timestamp: 1510 },
  { userId: 3, timestamp: 3000 }, // new session

  { userId: 4, timestamp: 700 },
  { userId: 4, timestamp: 1000 }, // gap = 300 → same session
  { userId: 4, timestamp: 1401 }, // gap >300 → new session

  { userId: 5, timestamp: 50 },
  { userId: 5, timestamp: 55 },
  { userId: 5, timestamp: 60 },
  { userId: 5, timestamp: 65 },

  { userId: 6, timestamp: 5000 },
  { userId: 6, timestamp: 5401 }, // new session
];

*/

/**
 * 🧩 Problem 3 — Product Variant Normalizer

Input:

[
 { name: 'iPhone',  color: 'black', storage: '128GB' },
 { name: 'iphone ', color: 'Black', storage: '128 gb' },
 { name: 'IPHONE',  color: 'BLACK ', storage: '128GB ' },
 { name: 'iPhone',  color: 'white', storage: '256GB' }
]

Normalize data and return unique variants.

Rules:

Case insensitive
Trim spaces
Same product variant must appear once
Group by product name → list all unique variants :-
output :-

{
  iphone: [
    { color: 'black', storage: '128gb' },
    { color: 'white', storage: '256gb' }
  ]
}
 */

/**
 🧩 Problem 4 — Permission Resolution System

🧾 Data You Have :-

Users
users = [
 { id: 1, roles: ['admin','editor'] },
 { id: 2, roles: ['viewer'] },
 { id: 3, roles: ['editor','viewer'] }
]

A user does not have permissions directly.
A user has roles.

Roles Definition
roles = {
 admin: ['read','write','delete'],
 editor: ['read','write'],
 viewer: ['read']
}

A role contains permissions.

🎯 What you must compute

Users → Roles → Permissions

You must resolve this chain and compute:

“What permissions does each user actually have?”

🧠 Important Realization

A user can have multiple roles.

Roles can have overlapping permissions.

Example:

User 1 has admin and editor

Permissions from admin: read, write, delete
Permissions from editor: read, write

Final permissions for user 1:

['read','write','delete']

No duplicates.

✅ Requirement 1 — Final permission set per user

Return something like:

{
  1: ['read','write','delete'],
  2: ['read'],
  3: ['read','write']
}

Order does not matter.
Uniqueness matters.

✅ Requirement 2 — Users having exact same permission set

This is the tricky part.

After computing permissions, you must detect:

Which users end up with identical permissions?

Example:

If:

User 5 → ['read','write']
User 8 → ['write','read']

They are SAME.

You must detect that.

Return something like:

[
 [5, 8]
]

Meaning: these users are permission-equivalent.

⚠️ Important difficulty

This is not string compare.

Because:

['read','write'] !== ['write','read']

So you must compare sets logically, not arrays blindly.

🧠 What this problem is testing

You must combine:

array methods
Set usage
Object/Map usage
Deduplication
Grouping by computed value
Logical equality of collections

This is very typical senior JavaScript thinking.

Mental Model You Should Have

For each user:

Take all roles
Get permissions of each role
Merge permissions uniquely
Store per user

Then:

Compare users based on their final permission sets
Group users who match exactly
 */

/**
 
🧩 Problem 5 — Deep Object Difference Finder

Given two deeply nested objects, return:

Added keys
Removed keys
Updated values (with old/new)
Paths like: "address.city"

Must work for nested objects and arrays.


🧾 What you receive

Two objects:

const obj1 = {
  name: "Ankur",
  address: {
    city: "Patna",
    pin: 800001
  },
  skills: ["js", "react"]
};

const obj2 = {
  name: "Ankur Raj",
  address: {
    city: "Delhi"
  },
  skills: ["js", "node"],
  age: 25
};
🎯 What you must return

You must compare obj1 and obj2 deeply and report three things:

✅ 1) Added keys (exist in obj2, not in obj1)
[
  "age"
]
❌ 2) Removed keys (exist in obj1, not in obj2)
[
  "address.pin"
]
🔁 3) Updated values (same key, value changed)

With full path:

[
  {
    path: "name",
    oldValue: "Ankur",
    newValue: "Ankur Raj"
  },
  {
    path: "address.city",
    oldValue: "Patna",
    newValue: "Delhi"
  },
  {
    path: "skills.1",
    oldValue: "react",
    newValue: "node"
  }
]

Final output shape (example)
{
  added: ["age"],
  removed: ["address.pin"],
  updated: [
    { path: "name", oldValue: "Ankur", newValue: "Ankur Raj" },
    { path: "address.city", oldValue: "Patna", newValue: "Delhi" },
    { path: "skills.1", oldValue: "react", newValue: "node" }
  ]
}
 */

























