/**
 To master split() and join(), think of them as inverses of each other. They are the primary bridge between Strings (text) and Arrays (lists).
 
1. split() — [String] → [Array]
split(separator, limit) breaks a string into an array. It does not mutate the original string.
The Separator ("", " ", ","): This is where the "cut" happens. The separator itself is removed from the final result.
The "Hole" Catch: If the separator is at the very beginning or end of the string, you’ll get an empty string in the resulting array.
Common Scenarios:
javascript
const text = "Apple,Banana,Mango";

// 1. Split by comma
text.split(",");     // ["Apple", "Banana", "Mango"]

// 2. Split by space (Words)
"Hello World".split(" "); // ["Hello", "World"]

// 3. Split by empty string (Characters)
"Code".split("");    // ["C", "o", "d", "e"]

// 4. No separator (Whole string in one index)
text.split();        // ["Apple,Banana,Mango"]
 */


/**
 2. join() — [Array] → [String] :-

join(separator) takes all elements of an array and glues them into one string.
The Glue: You choose what goes between the items. If you leave it blank, it defaults to a comma (e.g., ["a","b"].join() → "a,b").
The Empty String Glue: Using join("") is how you stitch characters back together without any gaps.
Common Scenarios:

const words = ["I", "love", "JS"];

// 1. Join with space
words.join(" ");     // "I love JS"

// 2. Join with nothing (Seamless)
words.join("");      //3. The "Power Combo" (The Chaining Secret)
In high-paying job interviews, they look for how you combine these with other methods. This is the standard pattern:
String → .split() → .map()/.filter()/.reverse() → .join() → Result
Example: Title Case a Name
javascript
const name = "ankur raj";

const formatted = name
  .split(" ")                    // ["ankur", "raj"]
  .map(w => w[0].toUpperCase() + w.slice(1)) // ["Ankur", "Raj"]
  .join(" ");                   // "Ankur Raj"
Use code with caution.

 "IloveJS"

// 3. Join with a dash
words.join("-");     // "I-love-JS"
Use code with caution.
 */


/**
 VVI
 
3. The "Power Combo" (The Chaining Secret)
In high-paying job interviews, they look for how you combine these with other methods. This is the standard pattern:
String → .split() → .map()/.filter()/.reverse() → .join() → Result

Example: Title Case a Name
const name = "ankur raj";

const formatted = name
  .split(" ")                    // ["ankur", "raj"]
  .map(w => w[0].toUpperCase() + w.slice(1)) // ["Ankur", "Raj"]
  .join(" ");                   // "Ankur Raj"
Use code with caution.

 */