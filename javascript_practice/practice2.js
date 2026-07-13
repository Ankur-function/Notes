/**
 Topics included :-

 forEach, map, filter , reduce, find, some,every , Sets, Maps. you can also inlcude like splice, slice, any array or object methods ,
Object.entries,Object.keys inside it etc.
 */

//------------------------------------------------------------ Advance Problems Only -----------------------------------------------------------

/**
The Scenario :-You are building a Project Management dashboard. You receive a flat array of "Task" objects. However, your UI needs to display them grouped by Status, but only for tasks assigned to active users.The Input Data 
const tasks = [
  { id: 1, title: 'Fix Bug', status: 'todo', userId: 101 },
  { id: 2, title: 'Write Docs', status: 'in-progress', userId: 102 },
  { id: 3, title: 'Update UI', status: 'todo', userId: 101 },
  { id: 4, title: 'Deploy App', status: 'done', userId: 103 },
  { id: 5, title: 'Code Review', status: 'in-progress', userId: 101 }
];

const users = [
  { id: 101, name: 'Alice', isActive: true },
  { id: 102, name: 'Bob', isActive: false },
  { id: 103, name: 'Charlie', isActive: true }
];
The Goal :- Create a function getProjectSnapshot(tasks, users) that returns an object where: Only tasks belonging to isActive: true users are included.The tasks are grouped by their status.Inside the group, the userId is replaced by the full User Object.There is a summary field showing the total count of active tasks.Expected Output :-
{
  groups: {
    todo: [
      { id: 1, title: 'Fix Bug', status: 'todo', user: { id: 101, name: 'Alice', isActive: true } },
      { id: 3, title: 'Update UI', status: 'todo', user: { id: 101, name: 'Alice', isActive: true } }
    ],
    done: [
      { id: 4, title: 'Deploy App', status: 'done', user: { id: 103, name: 'Charlie', isActive: true } }
    ],
    "in-progress": [
      { id: 5, title: 'Code Review', status: 'in-progress', user: { id: 101, name: 'Alice', isActive: true } }
    ]
  },
  totalActive: 4
}
Why this is Advanced :- Relational Lookup: You must efficiently find user data for each task. (Hint: Using .find() inside a loop is $O(n^2)$—Advanced devs use a Map or Object lookup for $O(1)$ efficiency).
Filtering & Mapping: You must remove inactive data while transforming the structure.
Dynamic Grouping: You cannot hardcode "todo", "in-progress", etc. The code must create keys dynamically based on whatever statuses exist in the data.
Constraints :-
Use a Map or Object to "index" your users first for performance.Use a combination of filter, reduce, and map.Ensure the original arrays are not mutated.Show me how you handle complex relational mapping!
 */



/**
 The Scenario :-
 You are merging user records from two different old databases into a new one. Sometimes the same person has two different email addresses, but their phone number or username is identical.
 The Goal :- 
 Write a function mergeAccounts(users) that looks through an array of accounts, identifies duplicates based on phone OR username, and merges them into a single record.
 Input :-
 const userRecords = [
  { id: 1, name: "Alice Smith", username: "alice1", phone: "12345" },
  { id: 2, name: "Bob Jones", username: "bjones", phone: "67890" },
  { id: 3, name: "Alice S.", username: "alice1", phone: "11111" }, // Duplicate username!
  { id: 4, name: "Charlie M.", username: "charliem", phone: "12345" } // Duplicate phone!
];
Expected Output :-
An array where the duplicate accounts are merged. For simplicity, just keep the first account's data you encounter.
[
  { id: 1, name: "Alice Smith", username: "alice1", phone: "12345" },
  { id: 2, name: "Bob Jones", username: "bjones", phone: "67890" }
]
Constraints:No global variables.Optimize for speed ($O(n)$ time complexity using Map or Set).Do not mutate the original input array.
 */

//======================================================= Intermediate to Advance problems only ==================================================

/**
 Detailed Explanation of Problem 1: Deep Group & Aggregate (VVI)
Objective:
Write a function that processes an array of transaction objects and produces a nested Map with the following structure:

Outer Map: Key = category (string)
Inner Map: Key = month (string), Value = total amount (number)
Detailed Explanation of Problem 1: Deep Group & Aggregate
Objective:
Write a function that processes an array of transaction objects and produces a nested Map with the following structure:

Outer Map: Key = category (string)
Inner Map: Key = month (string), Value = total amount (number)

Example Input:
const transactions = [
  { id: 1, category: "Food", amount: 25, date: "2025-01-15" },
  { id: 2, category: "Food", amount: 40, date: "2025-01-20" },
  { id: 3, category: "Travel", amount: 100, date: "2025-02-10" },
  { id: 4, category: "Food", amount: 30, date: "2025-03-05" },
  { id: 5, category: "Travel", amount: 75, date: "2025-02-18" },
];
Expected Output Structure:
Map(2) {
  "Food" => Map(2) {
    "2025-01" => 65,
    "2025-03" => 30
  },
  "Travel" => Map(1) {
    "2025-02" => 175
  }
}
Requirements in Detail:

Grouping Logic
Primary grouping: by category
Secondary grouping: by month extracted from the date field

Month Format
You must extract year and month from the date string and format it as "YYYY-MM" (e.g., "2025-01", "2025-02").
Do not use day.

Aggregation
For each category + month combination, calculate the sum of amount.

Data Assumptions & Edge Cases (Important)
date is a string in "YYYY-MM-DD" format (mostly).
Some transactions may have missing or invalid dates (Bonus part).
amount is always a positive number.
category can be any string.
Array can be empty.
You should handle null, undefined, or missing properties gracefully.

Bonus Requirements
Immutability: The original transactions array must not be mutated.
Missing Dates: Decide on a strategy (e.g., put them under "Invalid-Date" or "Unknown" key) and handle it cleanly.

Output Type
Must return a Map (not a plain object), with nested Maps.
You should not convert it to JSON or plain object unless asked.

Function Signature (suggested)

function groupTransactionsByCategoryAndMonth(transactions) {
  // return nested Map
}
Example Input:
const transactions = [
  { id: 1, category: "Food", amount: 25, date: "2025-01-15" },
  { id: 2, category: "Food", amount: 40, date: "2025-01-20" },
  { id: 3, category: "Travel", amount: 100, date: "2025-02-10" },
  { id: 4, category: "Food", amount: 30, date: "2025-03-05" },
  { id: 5, category: "Travel", amount: 75, date: "2025-02-18" },
];
Expected Output Structure:
Map(2) {
  "Food" => Map(2) {
    "2025-01" => 65,
    "2025-03" => 30
  },
  "Travel" => Map(1) {
    "2025-02" => 175
  }
}
Requirements in Detail:

Grouping Logic
Primary grouping: by category
Secondary grouping: by month extracted from the date field

Month Format
You must extract year and month from the date string and format it as "YYYY-MM" (e.g., "2025-01", "2025-02").
Do not use day.

Aggregation
For each category + month combination, calculate the sum of amount.

Data Assumptions & Edge Cases (Important)
date is a string in "YYYY-MM-DD" format (mostly).
Some transactions may have missing or invalid dates (Bonus part).
amount is always a positive number.
category can be any string.
Array can be empty.
You should handle null, undefined, or missing properties gracefully.

Bonus Requirements
Immutability: The original transactions array must not be mutated.
Missing Dates: Decide on a strategy (e.g., put them under "Invalid-Date" or "Unknown" key) and handle it cleanly.

Output Type
Must return a Map (not a plain object), with nested Maps.
You should not convert it to JSON or plain object unless asked.

Function Signature (suggested)

JavaScriptfunction groupTransactionsByCategoryAndMonth(transactions) {
  // return nested Map
}
 */

const transactions = [
  { id: 1, category: "Food", amount: 25, date: "2025-01-15" },
  { id: 2, category: "Food", amount: 40, date: "2025-01-20" },
  { id: 3, category: "Travel", amount: 100, date: "2025-02-10" },
  { id: 4, category: "Food", amount: 30, date: "2025-03-05" },
  { id: 5, category: "Travel", amount: 75, date: "2025-02-18" },
];
/**
 Map(2) {
  "Food" => Map(2) {
    "2025-01" => 65,
    "2025-03" => 30
  },
  "Travel" => Map(1) {
    "2025-02" => 175
  }
}
 */
// const map = new Map();


/**
 Detailed Explanation of Problem 3: Advanced Filtering & Transformation Pipeline
Objective:
Write a pure function named processUsers that takes two parameters:

users → array of user objects
criteria → an object defining filter conditions

The function should perform three major operations in sequence:

Filter users who fully match the criteria
Map (transform) each filtered user into a new object shape
Reduce to calculate average score per department


Input Format:
const users = [
  {
    id: 1,
    firstName: "Rahul",
    lastName: "Sharma",
    age: 28,
    isActive: true,
    department: "Engineering",
    roles: ["developer", "mentor"],
    tags: ["javascript", "react"],
    salary: 120000
  },
  // ... more users
];

const criteria = {
  ageRange: { min: 25, max: 40 },
  isActive: true,
  allowedRoles: ["developer", "manager"]
};
Expected Output:
A plain object with two properties:
{
  processedUsers: [ //array of transformed user objects ],
  averageScoreByDepartment: {
    "Engineering": 78.5,
    "Marketing": 65,
    // ...
  }
}
Detailed Breakdown of Requirements:

Filtering Logic (All conditions must match) :-
User’s age must be within criteria.ageRange.min and criteria.ageRange.max
User’s isActive must match criteria.isActive (if provided)
User must have at least one role from criteria.allowedRoles
You should use Object.entries() + every() cleverly for criteria matching.

Mapping / Transformation :-
Each filtered user should be transformed into this new shape:
fullName: "FirstName LastName" (combined string)
tags: array (keep original or transform if needed)
score: calculated value (you decide a reasonable formula, e.g., based on age, salary, number of roles, etc.)
You can keep other useful fields if you want, but fullName, tags, and score are mandatory.

Reduce for Average Score
Group by department
Calculate the average score for each department from the transformed users.



Important Rules:

The function must be pure (no mutation of original users array).
Handle missing or incomplete data gracefully (missing criteria properties, missing user fields, etc.).
If no users match the filter, processedUsers should be empty array and departments should be empty object.
criteria object may have partial fields (not all filters always present).

Suggested Function Signature:
function processUsers(users, criteria) {
  // return { processedUsers: [], averageScoreByDepartment: {} }
}
 */

/**
 
Detailed Explanation of Problem 4: Frequency Analysis with Map & Set
Objective:
Write a function that analyzes a large array of strings (which can be words or full sentences) and returns the top K most frequent words.
Key Requirements:

Case-insensitive (e.g., "The" and "the" should be counted as same word)
Ignore punctuation (e.g., "hello," "hello!" and "hello" should be same)
Return the top K words with their frequencies
Must use Map for frequency counting
Must use Set to track unique punctuation characters

Example Input:
const textData = [
  "Hello world! This is a test.",
  "Hello again, world.",
  "This is a beautiful world.",
  "Test, test, test!"
];

const k = 3;
Expected Output:
[
  { word: "world", count: 3 },
  { word: "test", count: 3 },
  { word: "hello", count: 2 }
  // or any order if count is same
]
Detailed Rules:

Word Cleaning
Convert everything to lowercase.
Remove punctuation from words.
You must use a Set to store punctuation characters (e.g., .,!?;:"' etc.).

Frequency Counting
Use a Map where key = cleaned word, value = frequency count.

Performance
Target: O(n) time complexity, where n is the total number of characters/words across all strings.
Avoid nested loops or inefficient operations.

Output
Return an array of objects: [{ word, count }, ...] sorted by frequency (highest first).
If two words have same frequency, order doesn’t matter.

Edge Cases to Consider
Empty array
Array with empty strings
Strings with only punctuation
Very large input (performance matters)
Words with numbers (e.g., "hello2" — should be kept as is)
Multiple spaces, tabs, newlines



Function Signature (Suggested):
function topKFrequentWords(textData, k) {
  // return array of {word, count}
}
 */

/**
 Detailed Explanation of Problem 7: Data Transformation Challenge
Objective:
You are given a nested array of departments, teams, and members. You have to flatten and transform this complex structure into a clean, flat report.

Input Structure:
JavaScriptconst departments = [
  {
    name: "Engineering",
    teams: [
      {
        name: "Frontend",
        members: [
          {
            name: "Alice",
            skills: ["JS", "TS", "React"]
          },
          {
            name: "Bob",
            skills: ["JS", "Node.js"]
          }
        ]
      },
      {
        name: "Backend",
        members: [ ... ]
      }
    ]
  },
  {
    name: "Marketing",
    teams: [ ... ]
  }
];

Required Output:
A flat array of objects with this structure:
JavaScript[
  {
    department: "Engineering",
    team: "Frontend",
    employee: "Alice",
    skillCount: 3,
    skillList: ["JS", "TS", "React"]
  },
  {
    department: "Engineering",
    team: "Frontend",
    employee: "Bob",
    skillCount: 2,
    skillList: ["JS", "Node.js"]
  },
  // ... more rows
]
Important Rules:

One row per employee (not per skill).
skillCount = length of skills array.
skillList = original skills array.
Final array must be sorted by skillCount in descending order (highest skills first).
Use map, filter, flat (or flatMap), and reduce effectively.


Requirements in Detail:

Flattening:
You have to go through departments → teams → members

Transformation:
Create the new object shape for every employee.

Sorting:
Sort the final report by skillCount (descending).

Edge Cases to Consider:
Departments with no teams
Teams with no members
Employees with no skills (empty array)
Missing properties (name, skills, etc.)
Empty departments array



Suggested Function Signature:
JavaScriptfunction generateEmployeeReport(departments) {
  // return flat array of transformed objects
}

Key Skills Being Tested:

Working with deeply nested data
Using flatMap / map + flat
Clean data transformation
Sorting
Writing readable code for complex transformations
 */


