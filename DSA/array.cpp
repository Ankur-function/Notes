/**
 *1) Find maximum and minimum values from an array.
 */

// #include<iostream>
// using namespace std;

// int maxVal(int arr[],int size) {

//  int max=INT8_MIN;
//  for (int i = 0; i < size; i++)
//  {
//    if (arr[i]>=max)
//    {
//     max=arr[i];
//    }
   
//  }
//  return max;
 
// }

// int minVal(int arr[],int size) {

//  int min=INT8_MAX;
//  for (int i = 0; i < size; i++)
//  {
//    if (arr[i]<=min)
//    {
//     min=arr[i];
//    }
   
//  }
//  return min;
 
// }

// int main() {

//     int size;
//     cout<<"Please enter your array size: ";
//     cin>>size;

//     int arr[100];
//   cout<<"Enter your numbers here: ";
//     for(int i=0;i<size; i++){
//         cin>>arr[i];
//     }

//     int maxInt = maxVal(arr,size);
//      int minInt = minVal(arr,size);
//     cout<<"Max value: "<<maxInt;
//     cout<<"Min value: "<<minInt;



// }

/**
 *2) Print sum of all the elements present in an array.
 */

// #include<iostream>
// using namespace std;

// int findSum(int arr[], int size) {

//    int sum=0;
//    for(int i=0; i<size; i++) {
//     sum = sum + arr[i];
//    }
//    return sum;
// }

// int main() {

//     int size;
//     cout<<"Enter your array size: ";
//     cin>>size;

//     int arr[100];
//     cout<<"Enter your numbers here: ";
//     for(int i=0; i<size; i++) {
//         cin>> arr[i];
//     }

//     int result = findSum(arr,size);
//     cout<<"Total sum is: "<<result;

//     return 0;
// }

/**
 *3) Reverse an array
 */

// #include<iostream>
// using namespace std;

// void reverseArray(int arr[], int size) {

// int start=0;
// int end=size-1;

// while (start<end)
// {
//    int temp= arr[start];
//       arr[start] = arr[end];
//       arr[end]= temp;

//       start++;
//       end--;
// }


// }

// int main() {

// int size;
// cout<<"Enter your array size here: ";
// cin>>size;

// int arr[100];
// cout<<"Enter your numbers here: ";
// for (int i = 0; i < size; i++)
// {
//    cin>>arr[i];
// }

// reverseArray(arr,size);

// for (int i = 0; i <size; i++)
// {
//    cout<<arr[i]<<" ";
// }

// return 0;

// }

/**
 *4) Swap alternate elements in an array.
 * [1,2,3,4,5]====>[2,1,4,3,5]
 */

// #include<iostream>
// using namespace std;

// void swapAlternateArray(int arr[], int size){

// int start=0;
// int adj=1;

// while (adj<size)
// {
//     int temp= arr[start];
//     arr[start]=arr[adj];
//     arr[adj]=temp;
//     start=start+2;;
//     adj=adj+2;;;
// }

// }

// int main() {

//     int size;
//    cout<<"Enter your array size here: ";
//    cin>>size;

//    int arr[100];
//    cout<<"Enter your numbers here";
//    for (int i = 0; i < size; i++)
//    {
//     cin>>arr[i];
//    }

//    swapAlternateArray(arr,size);

//    for (int i = 0; i < size; i++)
//    {
//     cout<<arr[i]<<" ";
//    }
   

//    return 0;
   
// }

/**
 *5) Find unique element in an int array
 [3,7,2,2,3,7,4] => op:-4
 */

// #include<iostream>
// using namespace std;

// int findUnique(int arr[], int size){

//     int ans=0;
//     for (int i = 0; i < size; i++)
//     {
//         ans= ans^arr[i];
//     }
//     return ans;
// }

// int main() {

//     int size;
//     cout<<"Enter your array size here: ";
//     cin>>size;

//     int arr[100];
//     cout<<"Enter your numbers here: ";
//     for (int i = 0; i < size; i++)
//     {
//         cin>>arr[i];
//     }

//   int result = findUnique(arr,size);
//   cout<<"Result: "<<result;

//   return 0;
    
// }

/*
Method 2 :- Using Hashmap :-

#include<iostream>
 #include <unordered_map>
 using namespace std;

 void findUnique(int arr[], int size){
   unordered_map<int,int> freq;

   for (int i = 0; i < size; i++)
   {
    freq[arr[i]]++;
   }
   
   bool found = false;
   for (int i = 0; i < size; i++)
   {
    if (freq[arr[i]]==1)
    {
      cout<<"Unique Element is: "<< arr[i];
      break;
    }
    
   }
   if (!found) {
        cout << "No unique element found!" << endl;
    }
 
 }

 int main() {
  int arr[11]={1,1,2,2,3,3,7,4,4,5,5};
  int size=11;
  findUnique(arr,size);
  return 0;
 }
 */

/**
 *6) Given an array of integers arr, return true if the number of occurrences of each element in the 
 * array is unique, or false otherwise
 * 
 * e.g:-[1,2,2,1,1,3] ==> op: true
 * e.g:-[1,2] ==> op: false
 */

/**
 * Note :- Done using JS :-
 
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


/**
 * 
7) Given an array of integers nums containing n integers containing each number between 1 and n-1 at least once.
and one more repeated number in nums, return this repeated number.
 */

// #include<iostream>
// using namespace std;


//  int findDuplicate(int arr[],int size) {

//     int xor1=0;
//     int xor2=0;

//     for (int i = 1; i < size; i++)
//     {
//         xor1 = xor1 ^ i;
//     }
//      for (int i = 0; i < size; i++)
//     {
//         xor2 = xor2 ^ arr[i];
//     }
//     return xor1^xor2;
    
//  }

// int main() {

//     int size;
//     cout<<"Enter array size";
//     cin>>size;

//     int arr[100];
//     cout<<"Enter your numbers here: ";
//     for(int i=0; i<size; i++){
//         cin>>arr[i];
//     }

//     int result = findDuplicate(arr,size);

//     cout<<"result: "<<result;

//     return 0;
// }
/**
 * 
 *Method 2 :- Using HashSet in JS

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

Mehtod 3 :- Frequency count in JS , no built in methods here

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


/**
 *8) (Very Important)
 * Given an integer array nums of length n where all the integers of nums are in the range [1, n]
 * and each integer appears at most twice, return an array of all the integers that appears twice.
   You must write an algorithm that runs in O(n) time and uses only constant auxiliary space.
 */


// #include<iostream>
// #include <vector>
// using namespace std;

// void findDuplicates(int arr[],int size) {

//   std::vector<int> numbers;
//   for (int i = 0; i < size; i++)
//   {
//    int index = abs(arr[i])-1;
//     if (arr[index]<0)
//     {
//       numbers.push_back(arr[i]);
//     }else{
//       arr[index] = -arr[index];
//     }
    
//   }

//   for (int num : numbers) {
//         std::cout << num << " ";
//   }
  
// }

// int main() {
// int arr[100] = {3,2,4,4,3,1,5,1,6,8};
// findDuplicates(arr,10);

// return 0;
// }

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
 * 
 */

 //Method 1:- solved using JS too .
 // Method 2 :- in c++ :-

// #include<iostream>
// #include <vector>
// using namespace std;

//  vector<int> arrayIntersection(int arr[], int n, int brr[], int m){

// int i=0;
// int j=0;
// vector<int> ans;

// while(i<n && j<m){

// if(arr[i]==brr[j]){
//     ans.push_back(arr[i]);
//     i++;
//     j++;
// }else if(arr[i]<brr[j]){
//     i++;
// }else{
//     j++;
// }


// }

// return ans;
   
// };

// int main() {

// int arr[] = {1, 2, 2, 2, 3, 4};
// int brr[] = {2, 2, 3, 3};

//     int n = sizeof(arr) / sizeof(arr[0]);
//     int m = sizeof(brr) / sizeof(brr[0]);

//     vector<int> result = arrayIntersection(arr, n, brr, m);

//     for (int num : result) {
//             cout << num << " ";
//         }
//         cout << endl;


//     return 0;
// }

/**
 *10) You are given an integer array'ARR' of size 'N' and an integer 'S' your task is to return the list
 * of all pairs of elements such that each sum of elements of each pair equals 'S'. 
 

// #include<iostream>
// #include <vector>
// using namespace std;

// void findSumPair(int arr1[],int size1,int sum) {
// vector<pair<int, int>> numbers;

// for (int i = 0; i < size1; i++)
// {
//  for (int j = i+1; j < size1; j++)
//  {
//   if (arr1[i] + arr1[j] == sum)
//   {
//    numbers.push_back({arr1[i],arr1[j]});
//   }
  
//  }
 
// }

// for (auto p : numbers) {
//     cout << p.first << ", " << p.second << endl;
// }


// }

// int main() {
// int arr1[100] = {1,2,3,4,5};
// int sum = 5;
// findSumPair(arr1, 5,5);

// return 0;
// }

// Mehtod 2 :- using JS

function pairSumHashing(arr,answer) {

         arr.sort((a,b)=>a-b); //[1,2,3,4,5,7,8]
         let left=0;
         let right=arr.length-1;
         let result = [];

         while (left<right) {
            let sum = arr[left]+arr[right];
            if (sum==answer) {
                result.push([arr[left],arr[right]]);
                left++;
                right--;
            } else if (sum<answer) {
                left++;
            }else{
                right--;
            }
         }
         return result;
     }

     console.log(pairSumHashing([1, 4, 5, 3, 2, 7, 8], 9));
     */

/**
 *11) Given an array of N integers.Yout task is to find all the distinct triplets present in the array which adds up to a given number K.
 * array is said to have triplets {arr[i],arr[j],arr[k]} with sum = 'K' , if there exist three indices i,j and k. such that i != j != k and arr[i] + arr[j] + arr[k] = K.
 */


/**
 *12) sort 0 & 1
 */

// #include<iostream>
// #include <vector>
// using namespace std;

// void printArray(int arr[], int n) {
//     for (int i = 0; i < n; i++) {
//         cout << arr[i] << " "; // Print each element followed by a space
//     }
//     cout << endl; // Move to the next line after printing all elements
// }


// void swapFunction(int &a,int &b) {

//     int temp=a;
//     a=b;
//     b=temp;

// }

// vector<int> sortArray(int arr[], int n){

// int i=0;
// int j=n-1;

// // int step=0;

//    while(i<=j){
//     // cout<< "Step"<< step++ <<endl;
//     // printArray(arr,n);
//     if (arr[i] ==0 && arr[j]==1)
//     {
//         i++;
//         j--;
//     }else if (arr[i]==1 && arr[j]==0)
//     {
//           swapFunction(arr[i],arr[j]);
//     }else if(arr[j]==1){
//         j--;
//     }else{
//         i++;
//     }
    
    
//    }
//   vector<int> result(arr, arr + n);

//    return result;
// }

// int main() {

//     int arr[]={0,1,1,0,1,0,1,0,0,0,1,1,0,1};
//     int n = sizeof(arr)/sizeof(arr[0]);

//     vector<int> result = sortArray(arr,n);

//    for(int num : result){
//     cout<<num<<" ";
//    };
//    cout<<endl;

//     return 0;
// }

/**
 *13) Sort 0 , 1 & 2.
 */

// #include<iostream>
// #include <vector>
// using namespace std;

// void swapFunction(int &a,int &b) {

//     int temp=a;
//     a=b;
//     b=temp;

// }

// vector<int> sortArray(int arr[], int n){

// int i=0;
// int k=0;
// int j=n-1;

// // int step=0;

//    while(k<=j){
//     // cout<< "Step"<< step++ <<endl;
//     // printArray(arr,n);
//     if (arr[k]==0)
//     {
//        swapFunction(arr[i],arr[k]);
//         i++;
//         k++;
//     } 
//     if (arr[k]==1){
//        k++;
//     }
//     if(arr[k]==2){
//        swapFunction(arr[k],arr[j]);
//         j--;
//     }
//    }
   
//   vector<int> result(arr, arr + n);

//    return result;
// }

// int main() {

//     int arr[]={0,2,2,1,0,1,1,0,2};
//     int n = sizeof(arr)/sizeof(arr[0]);

//     vector<int> result = sortArray(arr,n);

//    for(int num : result){
//     cout<<num<<" ";
//    };
//    cout<<endl;

//     return 0;
// }

/**
 14) Count Peaks in an Array
Problem: Given an array of integers, count how many elements are greater than both of their neighbors.
 Ignore the first and last elements.
Input: [1, 3, 2, 4, 1, 5]
Output: 2  // (3 and 4 are peaks)
 */

// #include<iostream>
// #include <vector>
// using namespace std;

// void swapFunction(int &a,int &b){
//   int temp;
// temp=a;
// a=b;
// b=temp;
// }
// void countPeaks(int arr1[],int size1) {
// vector<int> numbers;

// int i=1;

// while (i<size1-1)
// {  
//    if (arr1[i-1]<arr1[i] && arr1[i]>arr1[i+1])
//    {
//     numbers.push_back(arr1[i]);
//    }
//    i++;
// }

// for (int i = 0; i < numbers.size(); i++)
// {
//   cout<<" "<<numbers[i];
// }

// }

// int main() {
// int arr1[100] = {1, 3, 2, 4, 1, 5};
// countPeaks(arr1,6);

// return 0;
// }

/**
15) Find Second Largest Element in Array
Problem:
Find the second largest element in an array without sorting it.

Example:
Input: [3, 9, 4, 7, 2]
Output: 7
 */

// #include<iostream>
// #include <climits>
// #include <vector>
// using namespace std;

// int secondLargest(int arr1[],int size1) {
// vector<int> numbers;

// int max = INT_MIN;
// int secLar=INT_MIN;
// for (int i = 0; i < size1; i++)
// {
//   if (arr1[i]>max)
//   { 
//     max = arr1[i];
//   }
// }
// for (int i = 0; i < size1; i++)
// {
//   if (arr1[i]>secLar && arr1[i]<max)
//   {
//     secLar = arr1[i]; 
//   }
// }

// return secLar;
// }


// int main() {
// int arr1[100] = {1, 3, 8, 2, 4, 1, 5, 10};
// int result = secondLargest(arr1,8);
// cout<<"Second Largest no is: "<<result;
// return 0;
// }

/**
16). Replace Each Element with Product of All Except Itself
Problem: Given an array, create a new array where each element is the product of all other elements except the one at that index.

Example:
Input: [1, 2, 3, 4]
Output: [24, 12, 8, 6]
 */

// #include<iostream>
// #include <climits>
// #include <vector>
// using namespace std;

// int findProduct(int arr[],int size) {
// vector<int> numbers;
// int prod=1;

//   for (int i = 0; i < size; i++)
//   {
//     if (i=0)
//     {
//       continue;
//     }
    
//   prod = prod*arr[i];
//   }

  // for (int i = 0; i < size; i++)
  // {
  //  arr[i] = prod/arr[i];
  //  numbers.push_back(arr[i]);
  // }
  
  // for (int i = 0; i < numbers.size(); i++)
  // {
  //   cout<<" "<< numbers[i];
  // }
// }

// int main() {
// int arr[100] = {1, 2, 3, 4};
//  findProduct(arr,4);
// return 0;
// }

/**
17). Replace Each Element with Greatest on Right (Medium)
Problem: For each index i, replace arr[i] with the maximum element to its right. Last element should be -1.

Input: [17, 18, 5, 4, 6, 1]
Output: [18, 6, 6, 6, 1, -1]
 */

// #include<iostream>
// #include <climits>
// #include <vector>
// using namespace std;

// void swapArray(int &a, int &b) {
//     int temp = a;
//     a = b;
//     b = temp;
// }

// void findLargestRightSide(int arr[], int size) {
//   vector<int> numbers;
//  int max = -1;


//     for (int i = size - 1; i >= 0; i--) {
//         numbers.push_back(max);
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//  int i=0;
//  int j=numbers.size()-1;
// while (i<=j)
// {
//   swapArray(numbers[i],numbers[j]);
//   i++;
//   j--;
// }

// for (int i = 0; i <numbers.size(); i++)
// {
//   cout<<" "<<numbers[i];
// }

// }

// int main() {

//    int arr[100] = {17, 18, 5, 4, 6, 1};
//  findLargestRightSide(arr,6);
//   return 0;
// }

// int main() {
// int arr[100] = {17, 18, 5, 4, 6, 1};
// greatestOnRight(arr,6);
// return 0;
// }

/**
18). Rotate Array One Step to the Right
Problem: Rotate the elements of an array to the right by 1 step.

Example:
Input: [1, 2, 3, 4]
Output: [4, 1, 2, 3]
 */

 /**
  * Solution :-
To rotate right by 1 :-
Save the last element (it will move to the front).
Shift all elements from right to left by 1 position.
Put the saved last element at index 0.
  */

// #include<iostream>
// using namespace std;

// void rotateRightByOne(int arr[], int size) {
//     // Step 1: Store last element
//     int last = arr[size - 1];

//     // Step 2: Shift elements to the right
//     for (int i = size - 1; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }

//     // Step 3: Put last element at first position
//      arr[0] = last;

//     // Print rotated array
//     for (int i = 0; i < size; i++) {
//         cout << arr[i] << " ";
//     }
//     cout << endl;
// }

// int main() {
//     int arr[100] = {1, 2, 3, 4, 5};
//     int size = 5;
//     rotateRightByOne(arr, size);

//     return 0;
// }

/**
19) Move All Zeros to the End (In-Place)
Problem: Given an array, move all 0s to the end while keeping the order of non-zero elements the same.
Example:
Input: [1, 0, 2, 0, 3, 0, 4]
Output: [1, 2, 3, 4, 0, 0, 0]
  */

// #include<iostream>
// using namespace std;

// void moveAllZeros(int arr[], int size) {

//   int nonZeroindex=0;
//   for (int i = 0; i < size; i++)
//   {
//     if (arr[i] != 0)
//     {
//    arr[nonZeroindex]=arr[i];
//      nonZeroindex++;
//     }  
//   }
//  while (nonZeroindex<size)
//  {
//   arr[nonZeroindex]=0;
//   nonZeroindex++;
//  }
//     // Print array
//     for (int i = 0; i < size; i++) {
//         cout << arr[i] << " ";
//     }
//     cout << endl;
// }

// int main() {
//     int arr[100] = {1, 0, 2, 0, 3, 0, 4};
//     int size = 7;
//     moveAllZeros(arr, size);

//     return 0;
// }

// OR, Method 2 :-
//   void zerosToLast(int arr[], int size) {
//   vector<int> numbers;
//  int count=0;
//   for (int i = 0; i<size; i++){
//     if (arr[i]==0)
//     {
//      count++;
//     }else{
//       numbers.push_back(arr[i]);
//     } 
//   }
//   for (int i = 0; i <count; i++)
//   {
//     numbers.push_back(0);
//   }
  

// for (int i = 0; i <numbers.size(); i++)
// {
//   cout<<" "<<numbers[i];
// }

// }

// int main() {

//    int arr[100] = {1, 0, 2, 0, 3, 0, 4};
//  zerosToLast(arr,7);
//   return 0;
// }
/**
20) Find All Pairs with Given Difference
Problem: Find all pairs of elements in the array such that the absolute difference between them is equal to a given number k.
Example:
Input: arr = [1, 5, 3, 4, 2], k = 2
Output: Pairs → (1,3), (3,5), (5,3), etc.
  */

// #include<iostream>
// #include <vector>
// #include <algorithm>
// using namespace std;

// void differencePairs(int arr[], int size, int k) {
//   std::sort(arr, arr + size);
// vector<int> numbers;

//   int i=0;
//   int j=1;
//   while (i<size)
//   {
//     if (i == j) {
//         j++;
//     }else if (arr[j]-arr[i]>k)
//     {
//       i++;
//     }else if (arr[j]-arr[i]<k)
//     {
//     j++;
//     }else{
//             numbers.push_back(arr[i]);
//       numbers.push_back(arr[j]);
//        i++;
//   j++;
//     }
    
    
//   }
//     // Print array
//     for (int i = 0; i < numbers.size(); i++) {
//         cout << numbers[i] << " ";
//     }
//     cout << endl;
// }

// int main() {
//     int arr[100] = {1, 5, 3, 4, 2};
//     int size = 5;
//     int k=2;
//     differencePairs(arr, size, k);

//     return 0;
// }

/**
21). Check if Array is Sorted (Ascending or Descending or Nothing at all)
Problem: Check if the array is sorted either in ascending or descending order or nothing at all.
All elements are in ascending order, like:
[1, 2, 3, 4, 5]
Or all elements are in descending order, like:
[5, 4, 3, 2, 1]
Or neither (meaning: it's just a random or unsorted array), like:
[1, 3, 2, 4]

#include<iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool checkSorting(int arr[], int size) {
vector<int> numbers;
 bool isAscending=false;
 bool isDescending=false;
    // Print array
    for (int i = 0; i < size-1; i++) {
        if (arr[i]>arr[i+1])
        {
          isDescending=true;
        }else if (arr[i+1]>arr[i])
        {
          isAscending=true;
        }                
    }
    if (isAscending && !isDescending) {
    cout << "Array is sorted in ascending order";
} else if (!isAscending && isDescending) {
    cout << "Array is sorted in descending order";
} else {
    cout << "Array is NOT sorted";
}

        
}

int main() {
    int arr[100] = {4, 3, 2, 1};
    int size = 5;
checkSorting(arr, size);
    return 0;
}


22) Longest Sequence of 1s
Problem:
Given a binary array (only 0s and 1s), find the length of the longest sequence of 1s.
Example:
Input: [1, 1, 0, 1, 1, 1]
Output: 3

#include<iostream>
#include <vector>
#include <algorithm>
using namespace std;

int countLongest1(int arr[], int size) {
vector<int> numbers;
int maxCount=0;
int newCount=0;
    // Print array
    for (int i = 0; i < size; i++) {
        if (arr[i]==1)
        {
          newCount++;
          if (newCount>maxCount)
          {
           maxCount=newCount;
          }
          
        }else
        {
          newCount=0;
        }                
    }
    return maxCount;
    
      
}

int main() {
    int arr[100] = {1,1,1,1,1,0, 1, 1, 0, 1, 1, 1, 0, 1};
    int size = 14;
int result = countLongest1(arr, size);
cout<<"Result is: "<<result;
    return 0;
}

 */

/**
 * 23) merge sorted array 
 * ip :- 
 *int arr1[5]={1,3,5,7,9};
  int arr2[3]={2,4,6};

  op :- arr3[8]={1,2,3,4,5,6,7,9}
 */

// #include<iostream>
// #include <vector>
// using namespace std;

// void mergeArrays(int arr1[],int size1,int arr2[],int size2) {

//   int i=0;
//   int j=0;
//   vector<int> numbers;
  
//   while (i<size1 && j<size2)
//   {
//     if (arr1[i]<arr2[j])
//     {
//      numbers.push_back(arr1[i]);
//      i++;
//     }else{  
//   numbers.push_back(arr2[j]);
//     j++;
//     }    
//   }  
//   cout<<"value of i is: "<< i;
//   cout<<"value of j is: "<< j;
//   cout<<endl;

//   while (i<size1)
//   {
//     numbers.push_back(arr1[i]);
//     i++;
//   }
//   while (j<size2)
//   {
//     numbers.push_back(arr2[j]);
//     j++;
//   }
  
  
//   for (int i = 0; i < numbers.size(); i++)
//   {
//    cout<<" "<<numbers[i];
//   }
  
// }

// int main() {

//   int arr1[5]={1,3,5,7,9};
//   int arr2[3]={2,4,6};

//   mergeArrays(arr1,5,arr2,3);
//   return 0;
// }

/**
24) You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in
nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are
set to 0 and should be ignored. nums2 has a length of n.


Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
 */

/**
 * Not able to do so.
 */




 /**
25) Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

// #include<iostream>
// using namespace std;

// void sortZeros(int arr1[], int size){
  
//   int i=0;

//   for (int j = 0; j < size; j++)
//   {
//    if (arr1[j]!=0)
//    {
//     swap(arr1[j],arr1[i]);
//     i++;
//    }
//   }
//   for (int i = 0; i < size; i++)
//   {
//     cout<<" "<<arr1[i];
//   }
  
// }

// int main() {

//   int arr1[5]={0,1,0,3,12};
//   int size=5;

//   sortZeros(arr1,size);
//   return 0;
// }

/**
26) Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 
Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 */

 /**
  * Pseudo code :-
  * 
  * %(mod) concept, when we do %n to any number then the output will be always between a range [0 - n-1].
  * so we can use this concept because array index also lies between [0 - n-1].
  * for e.g  {11,12,13,14,15},length=n,k=3, is array me mujhe 15 ko 3 times rotate karna hai and 15 ka index n-1 hai currently then n-1+3= n+2
  * but n+2 to exist hi nhi karta so 15 ko isse array ke rakhne ke liye we can do (n+2)%n = 2 so iss index pe 15 ko place kar denge.
  * so formula ban gya arr[(i+k)%n]=arr[i] so ye cyclic way me k places shift kar dega.
  *  
  */

//  #include<iostream>
//  using namespace std;

//  void rotateArray(int arr[], int k, int size){
//    int temp[100]; 

//   for (int i = 0; i < size; i++)
//   {
//    temp[(i+k)%size]=arr[i]; // rotating and storing in to temp.
//   }
//   for (int i = 0; i < size; i++)
//   {
//    arr[i]=temp[i]; // copying rotated elements back to arr
//   }
//    for (int i = 0; i < size; i++)
//   {
//    cout<<" "<<arr[i];
//   }
  
//  }

//  int main() {

// int arr[100]={1,2,3,4,5};
// int k=3;
// int size=5;
// rotateArray(arr,k,size);

// return 0;
//  }

/**
27) Check if Array Is Sorted and Rotated
Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero).
Otherwise, return false. 
There may be duplicates in the original array.
Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.

Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2].
 */

 /**
  Pseudo code :-
  there can be total three cases here :-
  1) array is sorted totally.// {1,2,3,4,5} return true 
  2) array is sorted and rotated by some value.// {3,4,5,1,2} return true
  3) nothing at all.// {3,5,7,1,6} return false

  to verify above conditions we can do one thing i.e. arr[i-1]>arr[i] this condition should occurr only once in an array for case 1 & 2. but for
  case 3 it is happening twice.

  */

  // #include<iostream>
  // using namespace std;

  // void checkRotatedAndSorted(int arr[], int size) {

  // int count=0;

  // for (int i = 1; i < size; i++)
  // {
  //   if (arr[i-1]>arr[i])
  //   {
  //    count++;
  //   } 
  // }
  // // check boundary: last vs first
  //   if (arr[size - 1] > arr[0]) {
  //       count++;
  //   }
    
  //  if (count==1)
  //  {
  //   cout<<"Yes array is sorted and rotated";
  //  }else{
  //   cout<<"No array is not sorted and rotated";
  //  }
   
  // }

  // int main() {

  //   int arr[100]={3,4,5,1,2};
  //   int size=5;
  //   checkRotatedAndSorted(arr,size);
  //   return 0;
  // }

  /**
   28) sum of two arrays :
    you are given two numbers 'A' and 'B' in the forms of arrays(A[] and B[]). of lengths 'N' and 'M' respectively.
    where each array element represents a digit. you need to find the sum of these two numbers and return this sum in the form of an array.

    ip:-
    A = [9, 5, 4]   → represents number 954
    B = [8, 4]      → represents number 84
   op :-
   [1, 0, 3, 8]    → represents 1038

   */

   /**
    * Not able to do so
    */

   /////////////////////////////////////////// Character Arrays and String ///////////////////////////////////////////////////

    /**
     29) 
     a) find length of a string.
        e.g : Ankur , op : 5

     b) reverse a string.
     e.g. ip: 'ankur' , op: 'rukna'   
     */

    //  #include<iostream>
    //  using namespace std;

    //   char toLowerCase(char ch) {
    //   if (ch>='a' && ch<='z')
    //   {
    //     return ch;
    //   }else{
    //     char temp= ch - 'A' + 'a'; // formula to convert upperCase to lowerCase and ch - 'a' + 'A' is to convert lowerCase to upperCase.
    //     return temp;
    //   }
      
    //  }

    //  bool isValidChar(char ch){
    //   if ((ch>='a' && ch<='z')|| (ch>='A' && ch<='Z') || (ch>='0' && ch<='9'))
    //   {
    //     return 1;
    //   }
    //   return 0;
    //  }

    // void swapFunction(char &a,char &b) {
    //   char temp=a;
    //   a=b;
    //   b=temp;
    // }


    //  int getLength(char name[]){
    //   int count=0;

    //   for (int i = 0; name[i] != '\0'; i++)
    //   {
    //     count++;
    //   }
    //   return count;
      
    //  }

    //  void reverse (char name[], int size){
    //   int i=0;
    //   int j=size-1;

    //   while (i<=j)
    //   {
    //     swapFunction(name[i],name[j]);
    //     i++;
    //     j--;
    //   }
    //  }

    //  int checkPalindrome(char name[], int size){
    //   int i=0;
    //   int j=size-1;

    //   while (i<=j)
    //   {
    //     if (toLowerCase(name[i])!= toLowerCase(name[j]))
    //     {
    //       return 0;
    //     }else{
    //       i++;
    //       j--;
    //     }        
    //   }
    //   return 1;
    //  }

    

    //  int main() {

    //   char name[200]={'A','n','k','u','r'};
    //   int length =  getLength(name);
    //   // cout<<"Length: "<< getLength(name);
    //   reverse(name,length);
    //   cout<<"reverse name is: "<<name;
    //   cout<<endl;
    //   cout<<"your given array is: "<<checkPalindrome(name,length);
    //  }

     /**
      30) count maximum occurred character in a alphabatical string.
      * e.g. ip: test , op: t.
      * ip: output, op: t
      */

    //   #include<iostream>
    //   using namespace std;

    //   char maxOccurredChar(string name){
    //   int freq[26]={0};

    //   for (int i = 0; i < name.length(); i++)
    //   {
    //     int index= name[i]-'a';
    //     freq[index]++;
    //   }

    //   int max=-1;
    //   char maxChar;

    //   for (int i = 0; i < 26; i++)
    //   {
    //     if (freq[i]>max)
    //     {
    //      max=freq[i];
    //      maxChar = 'a'+i;
    //     }
        
    //   }
    //   return maxChar;
      
    //   }

    //   int main() {
    //   string name="ctecstc";
    //  char result = maxOccurredChar(name);
    //  cout<<"max occurred character is: "<<result;
    //   return 0;
    //   }

    /**
     31) you have been given a string 'str' of words , you need to replace all the spaces between words with '@40'.
     * ip: my name is ankur
     * op: my@40name@40is@40ankur
     */

    //  #include<iostream>
    //  using namespace std;

    //  string removeSpaces(string str) {
      
    //   string temp="";

    //   for (int i = 0; i < str.length(); i++)
    //   {
    //     if (str[i]==' ')
    //     {
    //      temp.push_back('@');
    //      temp.push_back('4');
    //      temp.push_back('0');
    //     }else{
    //       temp.push_back(str[i]);
    //     }
        
    //   }
    //   return temp;
    //  }

    //  int main() {

    //   string str="my name is ankur";
    //   string result = removeSpaces(str);
    //   cout<<"result string is: "<<result;
    //   return 0;
    //  }

    /**
    32) Remove all occurrences of substring
     given two strings s and part, perform following operation on s until all occurrences of the substring part are removed:

     a) Find the leftmost occcurrences of the substring part and remove it from s.
     
        Return s after removing all occurrences of part.

     A substring is contiguous sequence of characters in a string.

     ip: s='daabcbaabcbc', part='abc'
     op: "dab"

     */

    //  #include<iostream>
    //  using namespace std;

    //  // using in built functions for now i will later implement it by traditional way. 
    //  string removePart(string s, string part) {
      
    //   while (s.length()!=0 && s.find(part)<s.length())
    //   {
    //     s.erase(s.find(part),part.length());
    //   }
    //   return s;
    //  }


    //  int main(){
    //   string s="daabcbaabcbc";
    //   string part="abc";

    //  string result = removePart(s,part);
    //  cout<<"result string is: "<<result;
    //   return 0;
    //  }

    /**
     33) Permutation in a string
     * Given two strings s1 and s2. return true if s2 contains a permutation of s1. or false otherwise.
       in other words , return true. if one of s1's permutations is the substring of s2.

       ip: s1="ab", s2="eidbaooo"
       op: true
     */

    //  #include<iostream>
    //  using namespace std;

    //  bool checkEqual(int a[26], int b[26]){
    //   for (int i = 0; i < 26; i++)
    //   {
    //     if (a[i] != b[i])
    //     {
    //       return 0;
    //     }
        
    //   }
    //   return 1;
    //  }

    //  bool findPermutation(string s1, string s2){

    //   // character count array for s1 :- // "ab"
    //   int count[26]={0}; // [1,1,0,0,0,0,0,0,0,0,0,0,0,........]
    //   for (int i = 0; i < s1.length(); i++)
    //   {
    //     int index = s1[i]-'a';
    //     count[index]++;  
    //   }

    //   // traverse s2 string in window of size s1 and compare
    //   int i=0;
    //   int windowSize= s1.length();
    //   int count2[26]= {0}; //[1,1,0,0,0,0,0,0,,0,0,0,0,0,0,0,0,0,.........]        "eidbaooo"

    //   // running for first window
    //   while (i<windowSize)
    //   {
    //     int index= s2[i]-'a';
    //     count2[index]++;
    //     i++;
    //   }
      
    //   if (checkEqual(count,count2))
    //   {
    //     return 1;
    //   }

    //   while (i<s2.length())
    //   {
    //    char newChar = s2[i];
    //    int index = newChar - 'a';
    //    count2[index]++;

    //    char oldChar = s2[i-windowSize];
    //    index = oldChar - 'a';
    //    count2[index]--;

    //    if (checkEqual(count,count2))
    //    {
    //     return 1;
    //    }
    //    i++;
    //   }
    //   return 0;
    //  }

    //  int main() {
      
    //   string s1="ab";
    //   string s2="eidbaooo";
    //   int result = findPermutation(s1,s2);
    //   cout<<"result is: "<<result;
    //   return 0;
    //  }

    /**
     34) Remove all adjacent duplicates in string
     * 
     * you are given a string s consisiting of lowercase english letters. a duplicate removal consists of choosing two
     * adjacent and equal letters and removing them.
     * 
     * we repeatedly make duplicate removal on s until we no longer can.
     * 
     * Return the final string after all such duplicate removals have been made. It can be proven that answer is unique.
     * 
     * ip: "abbaca"
     * op: "ca"
     * explanantion: "abbaca"=>"aaca"=>"ca"
     */
/**
 * I will do this once i will pratice my problems.
 */

 /**
 35) String Compression :

    Given an array of characters chars, compress it using the following algorithm:

    Begin with an empty string s. For each group of consecutive repeating characters in chars:

    If the group's length is 1, append the character to s.
    Otherwise, append the character followed by the group's length.
    The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

    After you are done modifying the input array, return the new length of the array.

    You must write an algorithm that uses only constant extra space.

  */



  /*
  23) merge sorted array
  */

  ////////////////////////////////////////////////// Practice ////////////////////////////////////////////////////////

  /*
 *4) Swap alternate elements in an array.
 * [1,2,3,4,5]====>[2,1,4,3,5]
 */




  

  





