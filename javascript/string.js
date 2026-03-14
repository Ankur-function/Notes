
// practice questions from string methods VVI.
// most imp ones :- substsring, slice, trim, replace, includes,split etc.   
const name = "ankur" // one most common way to declare string.
console.log(typeof name); // string


const gameName = new String('ankurrrr'); // put this in browser console and see how it works and learn about string methods.
console.log(typeof gameName);// object hai so we can access it like all object properties.
console.log(gameName);

console.log(gameName[0]);//a
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('r'));

const newgamestring = gameName.substring(0,4) // ye 4 index wale ko unclude nhi karta hai.
console.log(newgamestring);
const anothergamestring = gameName.slice(-1,3) // ye 4 index wale ko unclude nhi karta hai.
console.log(anothergamestring);

const url = "www.ankur%20raj.com"
const newurl = url.replace('%20','-');// jisko replace karna hai wo , and jiss value se replace karna hai wo.
console.log(newurl);
console.log(url.includes('raj'));
console.log(url.split('.'));



