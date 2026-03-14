

const score = 400; // most common way

const newScore = new Number(400); // ab iska type object ho jayega so ab ispe wo saare methods apply kar sakte hai
console.log(newScore);
console.log(typeof newScore);
console.log(newScore.toString().length); 
console.log(newScore.toFixed(2));

const otherNumber = 122.7484;
console.log(otherNumber.toPrecision(3));

////////////////////////////////////////////// Maths ////////////////////////////////////////////////////////////////

console.log(Math); // it's datatype is also object. it also has many mehtods which we can explore on browser console.

// explore below or more methods on browser console.
console.log(Math.abs(-4));
console.log(Math.round(-4));
console.log(Math.ceil(-4));
console.log(Math.floor(-4));
console.log(Math.sqrt(-4));

//VVI Math.random()
console.log(Math.random()); // hamesa 0 se 1 ke beech me deta hai




