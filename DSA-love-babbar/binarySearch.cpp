
/**
 * 34. Find First and Last Position of Element in Sorted Array
 
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
 */

// #include<iostream>
// #include <vector>
// using namespace std;

// // Case 1: For left most index
// int findLeftOccurEle(int arr[], int n, int target){

// int start=0;
// int end=n-1;
// int mid = (start) + (end-start)/2;
// int ans=-1;
// cout<< "mid22: "<<mid;
// while (start<=end)
// {
//     if (arr[mid]>target) // {5,7,7,8,8,10};
//     {
//        end=mid-1;
//     }else if(arr[mid]<target){
//         start = mid + 1;
//     }else{
//         ans = mid;
//         end = mid-1; // condn for left most index
//     }
// mid = (start) + (end-start)/2;
// cout<< "mid33: "<<mid;
    
// }
// return ans;

// }

// // Case 2: For right most index
// int findRightOccurEle(int arr[], int n, int target){

// int start=0;
// int end=n-1;
// int mid = (start) + (end-start)/2;
// int ans=-1;

// while (start<=end)
// {
//     if (arr[mid]>target) // {5,7,7,8,8,10};
//     {
//        end=mid-1;
//     }else if(arr[mid]<target){
//         start = mid + 1;
//     }else{
//         ans = mid;
//         start = mid + 1;; // condn for right most index
//     }
// mid = (start) + (end-start)/2;
    
// }
// return ans;

// }

// int main() 
// {
//     int arr[]={5,6,7,8,8,8,8,8,9,10};
//     int n = sizeof(arr)/sizeof(arr[0]);

//     int leftResult = findLeftOccurEle(arr,n,8);
//     int rightResult = findRightOccurEle(arr,n,8);

// cout<< "leftResult Answer is: "<<leftResult;
// cout<< "rightResult Answer is: "<<rightResult;


//       cout<<endl;

//     return 0;

// }

// Q) Also calculate the total no. of occurence of 8 from above problem.


// Q) Peak Index in a Mountain Array
// You are given an integer mountain array arr of length n where the values increase to a peak element
// and then decrease.
// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.Your task is to solve it in O(log(n

// Example 1:

// Input: arr = [0,1,0]

// Output: 1

// Example 2:

// Input: arr = [0,2,1,0]

// Output: 1

// Example 3:

// Input: arr = [0,10,5,2]

// Output: 1

//Note :- in this type of question remember one concept i.e. during raising slope arr[mid]<arr[mid+1] and during 
// declining slope arr[mid]>arr[mid+1]. now solve your problem.

// #include<iostream>
// #include <vector>
// using namespace std;

// int findPeakIndex(int arr[], n) {

// int start=0;
// int end=n-1;
// int mid = (start) + (end-start)/2;

// while (start<=end)
// {
//     if(arr[mid]<arr[mid]+1) {
//         start = mid+1;
//     }else  
//     {
//         end = mid;
//     }
//     mid = (start) + (end-start)/2;
// }
     
// }


// int main() {

//     int arr = {0,10,5,2};
//     int n = sizeof(arr)/sizeof(arr[0]);

//     int leftResult = findPeakIndex(arr,n);

// }

/**
Find Pivot in an array
Input: [6, 7, 8, 1, 2, 3, 4, 5]
Explanation: It was originally [1, 2, 3, 4, 5, 6, 7, 8] Then rotated to move [6, 7, 8] in front So the pivot is 8 at index 2
 */

//  #include<iostream>
//  using namespace std;

// int findPivot(int arr[], int size) {
// int start=0;
// int end=size-1;
// int mid = (start+end)/2;

//   while (start<=end)
//   {
//     mid=(start+end)/2;
//     if (mid<end && arr[mid]>arr[mid+1])
//     {
//        return mid;
//     } 
//     if (mid>start && arr[mid]<arr[mid-1])
//     {
//         return mid-1;
//     }
//     if(arr[mid]>=arr[start]) {
//       start=mid+1;
//     }else{
//       end=mid-1;
//     }
    
//   }
  
// }

//  int main() {
 
//     int arr[100]={6, 7, 8, 1, 2, 3, 4, 5};
//     int size=8;
//     int result= findPivot(arr,size);
//     cout<<"Pivot is: "<<result;
//  }


/**
 * Search in rotated sorted array
 * you have given sorted array consisiting of elements 'N'. you are also given an integer 'K' , now the array is rotated
 * at some pivot point unknown to you. for e.g. arr=[1,3,5,7,8] after rotating at index 3 it will become arr=[7,8,1,3,5]. now task is 
 * to find the index at which 'K' is present in arr.
 * Note:-
 * if 'K' is not present in arr return -1.
 * no duplicates present in arr.
 * arr can only be rotated in the right direction.
 * time complexity should not exceed O(logn).
 */

//  #include<iostream>
//  using namespace std;

//  int findPivot(int arr[],int size) {

//     int start=0;
//     int end=size-1;
    
//     while (start<=end)
//     {
//        int mid=(start+end)/2;
//        if (mid<end && arr[mid]>arr[mid+1])
//        {
//         return mid;
//        }
//        if (mid>start && arr[mid]<arr[mid-1])
//        {
//         return mid-1;
//        }
//        if (arr[mid]>arr[start])
//        {
//         start=mid+1;
//        }else{
//         end=mid-1;
//        }  
//     }
    
//  }

//  int searchArray(int arr[], int size, int k){
//      int start;
//   int end;
//   int pivot=findPivot(arr,size);
//   if (k>arr[size-1])
//   {
//    start=0;
//    end= pivot;
//   }else
//   {
//     start=pivot+1;
//     end=size-1;
//   }
  

//   while (start<=end)
//   {
//     int mid=(start+end)/2;
//     if (arr[mid]==k)
//     {
//         return mid;
//     }else if (arr[mid]<k)
//     {
//         start=mid+1;
//     }else{
//         end=mid-1;
//     }
    
//   }
//   return -1;
//  }

//  int main() {

//  int arr[100]={7,8,1,3,5};
//  int size=5;
//  int k=3;

//  int result = searchArray(arr,size,k);
//  cout<<"searched element index is: "<<result;
//  return 0;
//  }
 
/**
 * Square root using binary search
 * Given a +ve integer, find square root of 'X'. and only return the integer part.
 * Note:
 * not allowed to use any build in methods or functions.
 */

//  #include<iostream>
//  using namespace std;

//  int findSqrt(int sqrt){
//   int start=0;
//   int end=sqrt;

//   while (start<=end)
//   {
//     int mid=(start+end)/2;

//     if (mid*mid==sqrt)
//     {
//        return mid;
//     }else if (mid*mid>sqrt)
//     {
//         end=mid-1;
//     }else{
//         start=mid+1;
//     }
    
    
//   }
  
//  } 

//  int main() {

//     int sqrt=441;
//     int answer = findSqrt(sqrt);
//     cout<<"Square root is: "<<answer;
//  }


/////////////////////////////////////////////////////// Practice ////////////////////////////////////////////////////////////

/**
/**
Find Pivot in an array
Input: [6, 7, 8, 1, 2, 3, 4, 5]
Explanation: It was originally [1, 2, 3, 4, 5, 6, 7, 8] Then rotated to move [6, 7, 8] in front So the pivot is 8 at index 2
 */

 #include<iostream>
 using namespace std;

 int peakIndex(int arr[], int size) {
    
    int start=0;
    int end=size-1;
    int mid=(start+end)/2;


    while (start<end)
    {
        if (arr[mid]<arr[mid+1])
        {
           start=mid+1;
        }else
        {
            end=mid;
        }
         mid = (start+end)/2;
        
    }
    return mid;
} 

 int main() {

    int arr[6]={5,7,8,3,2,1};
    int size=6;

   cout<<"Peak index is: "<<peakIndex(arr,size)<<endl;
    return 0;
 }




