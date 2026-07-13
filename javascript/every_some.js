/**
 ✅ 2. .every()
The .every() method checks if every single element in the array passes the test.
Returns: true or false.
Stops: It stops and returns false immediately if it finds one element that fails.

const ages = [21, 18, 42, 33];

// Check if everyone is an adult
const allAdults = ages.every(age => age >= 18); 
console.log(allAdults); // true


💡 3. .some()
The .some() method checks if at least one element in the array passes the test.
Returns: true or false.
Stops: It stops and returns true immediately if it finds one element that passes.
javascript
const scores = [45, 80, 32, 99];

// Check if at least one person passed (score > 50)
const hasPassed = scores.some(score => score > 50);
console.log(hasPassed); // true
Use code with caution.


⚖️ Quick Comparison Table
Method      	Goal	                       Returns	                When does it stop?
.find()	        Find a specific item	       The Item itself	        After the first match
.every()	    Check total consistency	        Boolean	                After the first failure
.some()     	Check for a possibility     	Boolean             	After the first success


🚩 Interview Performance Note
All three methods are Short-Circuiting methods. This means they don't always look at every item in the array.
If you use .some() on a million items and the first one is a match, it finishes instantly.
If you use .every() and the first one fails, it finishes instantly.

This makes them much faster than using a .forEach() or .filter() loop when you only need a quick answer.
 */