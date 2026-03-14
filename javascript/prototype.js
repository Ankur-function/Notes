// Need to watch this video again and also do self study alot for this.
// 
//  In Javascript everything is an Object. for e.g. string, function etc.

// function multiplyBy5(num){
//   return num*5;
// }
// console.log(multiplyBy5(5));

// multiplyBy5.anything_here = 2;// see we use '.' to access elements for Object. and here function is also working like this so hence proved that funcitons works like an object too.

// console.log(multiplyBy5.anything_here);
// console.log(multiplyBy5.prototype);//{} gives empty object


// below concepts are not clear . need to study more.
function createUser(username,score) {
    this.userName = username
    this.score = score
}

createUser.prototype.increament = function () {
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(this.userName);   
}

// const ankur = createUser('ankur',50);
const rahul = createUser('rahul',20);

// console.log(ankur.printMe); // here this will throw an error because by doing like this we will have only the access of this
//  'function createUser(username,score)' main function and not the addition properties that we are adding in this later. to access all properties
// we must use 'new' keyword.


const ankur = new createUser('ankur',50); // now below console will work.
console.log(ankur.printMe);





