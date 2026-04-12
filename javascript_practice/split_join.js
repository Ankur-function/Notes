/**
 Topics :- split() and join()
 */


/**
Input: "10 Best Ways to Learn JavaScript"
Task: Convert to lowercase, remove spaces, and join with dashes.
Expected Output: "10-best-ways-to-learn-javascript"
 */

// const arr = '10 Best Ways to Learn JavaScript'.split(' ')
// console.log(arr.join('-'));

/**
 Problem: Given a full name, return the person's initials in uppercase.
Input: "ankur raj"
Task: Split by space, take the first letter of each word, and join them.
Expected Output: "AR"
 */

/**
 Problem: You receive a messy CSV string. Clean it up by removing extra spaces and turning it into a clean, semicolon-separated string.
Input: "apple, banana,orange , grape"
Task: Split by comma, use .map(s => s.trim()) to clean spaces, then join with ; .
Expected Output: "apple; banana; orange; grape"
 */

/**
 Problem: Mask a credit card number so only the last 4 digits are visible.
Input: "1234567812345678"
Task: Split into individual characters, replace all but the last 4 with #, and join back.
Expected Output: "############5678"
 */

// const arr = 'ankur raj'.split('')
// console.log(arr[0].toUpperCase()+ arr[4].toUpperCase());
