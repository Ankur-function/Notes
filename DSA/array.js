/*
 *6) Given an array of integers arr, return true if the number of occurrences of each element in the 
 * array is unique, or false otherwise
 * 
 * e.g:-[1,2,2,1,1,3] ==> op: true
 * e.g:-[1,2] ==> op: false
 

function uniqueFrequencies(arr) {
  // Step 1: Count frequencies using Map
  const freq = new Map();

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (freq.has(num)) {
      freq.set(num, freq.get(num) + 1);
    } else {
      freq.set(num, 1);
    }
  }

  // Step 2: Check uniqueness using Set
  const freqSet = new Set();
  const values = Array.from(freq.values()); // get frequency values as array

  for (let i = 0; i < values.length; i++) {
    let count = values[i];
    if (freqSet.has(count)) {
      return false; // duplicate frequency found
    } else {
      freqSet.add(count);
    }
  }

  return true;
}

// Example usage:
console.log(uniqueFrequencies([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueFrequencies([1, 2, 2, 1, 2, 3])); // false

*/

 /*
7) Given an array of integers nums containing n integers containing each number between 1 and n-1 at least once.
and one more repeated number in nums, return this repeated number.
[1,2,3,4,5,5], n=6, op: 5
 
Method 1 :- Using Hashset

function findDuplicate(arr){

    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
       if (seen.has(arr[i])) {
          return arr[i];
       }else{
        seen.add(arr[i]);
       }
     }

     return -1;
}

console.log(findDuplicate([1,2,3,4,5,5]))

Mehtod 2 :- Frequency count , no built in methods here

function findDuplicate(arr){

    let freq=[];
    for (let i = 0; i < arr.length; i++) {
        freq[i]=0;
    }

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        freq[num]++;

        if (freq[num]>1) {
            return num;
        }
    }

}
console.log(findDuplicate([1,2,3,4,5,5]))

*/

/*
 *8) Given an integer array nums of length n where all the integers of nums are in the range [1, n]
 * and each integer appears at most twice, return an array of all the integers that appears twice.
   You must write an algorithm that runs in O(n) time and uses only constant auxiliary space.
 

   // Method 1 :- but not optimised as per question condtion so this solution is not correct and just for understanding.

    function twiceAppeared(arr) {
        // let freq = new Map();
        // or,
        let freq = {};// normal object
        let newArr=[]; 

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];

            // if (freq.has(element)) { // when we use new Map(); method
            //     freq.set(element, freq.get(element) + 1);
            // }else{
            //     freq.set(element,1);
            // }

            // or,
            if (freq[element]) { // for normal object only
                freq[element]++;
            }else{
                freq[element]=1;
            }
        }

        // for (let [key, value] of freq.entries()) { // when we use new Map(); method
        //     if (value === 2) {
        //     newArr.push(key);
        //     }
        // }
        for(let key in freq){ // this works for normal object only not for new Map();
            if (freq[key]==2) {      
                newArr.push(key);
            }
        }

        return newArr;
        
    }

  // Method 2 :- correct one 
    function twiceAppeared(arr) {
        let newArr=[];

        for (let i = 0; i < arr.length; i++) {
            const index = Math.abs(arr[i])-1;

            if (arr[index]<0) {
                newArr.push(Math.abs(arr[index]));
            }else{
                arr[index] = -arr[index];
            } 
        }

        return newArr;
      
    }

    console.log(twiceAppeared([3,2,4,7,4,3,1,5,1,6,8,7]))

    */

    /**
    *9) You are given two arrays 'A' and 'B' of size 'N' and 'M' respectively.Both these arrays are sorted in
    * non-decreasing order. you have to find the intersection of these two arrays.
    * Intersection of two arrays is an array that consists of all the common elements occuring in both arrays
    

    function findIntersection(arr1,arr2) {
    
        let i=0;
        let j=0;
        let newArr=[];

        while (i<arr1.length && j<arr2.length) {
            if (arr1[i]==arr2[j]) {
                newArr.push(arr1[i]);
                i++;
                j++;
            }else if (arr1[i]<arr2[j]) {
                i++;
            }else{
                j++;
            }
        }
        return newArr;
    }

    let arr1=[1,2,2,2,3,3,4,5,10];
    let arr2=[2,3,5,7,9]
    console.log(findIntersection(arr1,arr2));
    
    */

    /**
     *10) You are given an integer array'ARR' of size 'N' and an integer 'S' your task is to return the list
     * of all pairs of elements such that each sum of elements of each pair equals 'S'. 
     */

     // Method 1 :- Two pointers method :-

    //  function pairSumHashing(arr,answer) {

    //      arr.sort((a,b)=>a-b); //[1,2,3,4,5,7,8]
    //      let left=0;
    //      let right=arr.length-1;
    //      let result = [];

    //      while (left<right) {
    //         let sum = arr[left]+arr[right];
    //         if (sum==answer) {
    //             result.push([arr[left],arr[right]]);
    //             left++;
    //             right--;
    //         } else if (sum<answer) {
    //             left++;
    //         }else{
    //             right--;
    //         }
    //      }
    //      return result;
    //  }

    //  console.log(pairSumHashing([1, 4, 5, 3, 2, 7, 8], 9));




    //  *1) Find maximum and minimum values from an array.

//     function findMax(arr) {
//     let max=-1;
//     let min=99999999;
//     for (let i = 0; i< arr.length; i++) {
//    if (arr[i]>=max) {
//     max=arr[i];
//    }
//    if (arr[i]<=min) {
//     min=arr[i];
//    }
//     }
//     return {max,min};
//     }
// console.log(findMax([5,7,11,55,65,89,33,8]));

//  Reverse an array

// function swap(a,b){
//     let temp='';
//      temp=a;
//      a=b;
//      b=temp;


// }

// function reverseArray(arr) {
// let i=0;
// let j=arr.length-1;
// let temp='';

// while(i<=j){
//     temp = arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++;
//     j--;
// }
// }
// console.log(reverseArray([23,56,77,99,88,45]));

    
/**
 *  *4) Swap alternate elements in an array.
 * [1,2,3,4,5]====>[2,1,4,3,5]
 */
// function swapArray(arr){

// let i=0;
// let j=1;
// while (j<arr.length && i<arr.length) {
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i=i+2;
//     j=j+2;
// }
// return arr;
// }
// console.log(swapArray([1,2,3,4,5,7,9]));

/**
 5) Find unique element in an int array
 [3,7,2,2,3,7,4] => op:-4
 */

//  function findUnique(arr){
// let ans=0;
// for (let i = 0; i < arr.length; i++) {
//     ans=ans^arr[i]
// }
// return ans;
//  }
//  console.log(findUnique([3,7,2,2,3,7,4]));

/**
 *9) You are given two arrays 'A' and 'B' of size 'N' and 'M' respectively.Both these arrays are sorted in
 * non-decreasing order. you have to find the intersection of these two arrays.
 * Intersection of two arrays is an array that consists of all the common elements occuring in both arrays
 * 
 * Note: -
 * The length of each array is greater than zero.
 * Both the arrays are sorted in non-decreasing order.
 * The output should be in the order of elements that occur in the original arrays.
 * If there is no intersection present then return a single integer '-1'.
 */

function findIntersection(arr1,arr2){


}
console.log(findIntersection([1, 2, 2, 2, 3, 4],[2, 2, 3, 3]))
 
 


