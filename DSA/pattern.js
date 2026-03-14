/*1)
   * * * * *
   * * * * *
   * * * * *
   * * * * *
   * * * * *
   
   for n=5
 

let n=5;
let m=5;
function printStar(n,m) {
let i=0;
while (i<n) {
  let j=0;
  let column = " ";
    while (j<m) {
       column = column + "* "
        j++;
    }
    console.log(column);
    i++;
}
}
printStar(n,m)
*/


 /**
 * 2) 
 * 1 1 1 1
 * 2 2 2 2
 * 3 3 3 3 
 * 4 4 4 4
 * 
 * for n=4
 

 function printNumber(n) {
  let i=1
  while (i<=n) {
    let j=1;
    let column=" "
    while (j<=n) {
      column = column + i
      j++;
    }
    console.log(column);
    i++;
  }
 }
 printNumber(4)
 */
/**
  3) 
  1 2 3 4
  1 2 3 4
  1 2 3 4 
  1 2 3 4
 
  for n=4
 

  function printNumber(n) {
    let i=1;
    while (i<=n) {
      let j=1;
      let column=""
      while (j<=n) {
        column = column + j
        j++;
      }
      console.log(column);
      i++;
    }
  }
  printNumber(4)
*/

/**
  1 2 3
  4 5 6
  7 8 9

  for n=3
 
  function printNumber(n){
    let i=1
    let sum=0;
    while (i<=n) {
      let j=1;
      let column=" "
      while (j<=n) {
        sum++;
        column = column +sum;
        j++;
      }
      console.log(column);
      i++;
    }
  }
  printNumber(3);
  */

  /**
 * 5)
  *
  * *
  * * *
  * * * *
  * * * * *
  
  for n=5;
 

  function starPattern(n){
   let i=1
   while (i<=n) {
    let j=1;
    let column=" "
    while (j<=i) {
      column = column + '*';
      j++;
    }
    console.log(column);
    i++;
   }
  }
  starPattern(5)
  */

/**

 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 

function starPattern(n){
let i=1;
while(i<=n){
  let j=1;
  let column='';
  while(j<=i){
  column+=i;
  j++;
  }
  console.log(column);
  i++;
}
}
starPattern(4);
*/

/**
 * 1
 * 2 3
 * 4 5 6
 * 7 8 9 10

function printNumber(n){
let i=1;
let sum=0;
while(i<=n){
  let j=1;
  let column=''
  while(j<=i){
 sum = sum+1;
 column+=sum;
 j++;
  }
  console.log(column);
  i++;

}
}
printNumber(4)
*/

/**
 * 8)
 * (Important)
 * 1
 * 2 3
 * 3 4 5
 * 4 5 6 7
 */

function printNumber(n){
  let i=1;
  while (i<=n) {
    let j=1;
    // let sum=i;
    let column='';
    while(j<=i){
      column+=` ${i+1}`
      // sum++;
      j++;
    }
    console.log(column);
    i++;
  }
}
printNumber(4)