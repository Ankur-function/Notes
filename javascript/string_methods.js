/**
 Remember: strings in JavaScript are immutable, so these methods always return a new string and never change the original one. 

1. Searching & Checking
Used to find characters or check if a string contains something. 
includes(): Checks if a string contains a specific sequence (returns true/false).
startsWith() / endsWith(): Checks the beginning or end of the string.
indexOf() / lastIndexOf(): Returns the position of a character or substring.
search(): Searches using a Regular Expression.
match() / matchAll(): Returns an array of matches (great for data extraction). 


2. Extracting Parts
slice(start, end): Extracts a section and returns it as a new string (most common).
substring(start, end): Similar to slice, but handles negative indexes differently.
at(index): Returns the character at a specific position (supports negative indexing like -1).
charAt(): The older version of .at(). 


3. Transforming Text
toUpperCase() / toLowerCase(): Changes the casing.
trim(): Removes whitespace from both ends.
trimStart() / trimEnd(): Removes whitespace from only one side.
padStart() / padEnd(): Pads the string with another string (useful for formatting prices or IDs like 0001).
repeat(count): Returns a new string with a specified number of copies. 


4. Replacing & Splitting
replace(): Replaces the first occurrence of a pattern.
replaceAll(): Replaces all occurrences.
split(): Breaks a string into an Array. 


5. Conversion & Info
length: (Property, not a method) Returns the number of characters.
concat(): Joins two or more strings (though most people just use + or backticks).
toString(): Returns the value as a string (useful when dealing with numbers or objects). 
 */