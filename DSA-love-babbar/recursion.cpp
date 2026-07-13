/*

A function calls itself called as recursion.

jab big complex problem ka soln depend karta hai same type ki choti problem par to hum recursion use karenge.

e.g. : 
 2^n = (2)*(2^n-1),
 n! = n*(n-1)! 
 
Recursion includes two things i.e. 
1) A recursive relation
2) A base case which includes return statement(return mandotary here). 

Base Cases :-
what are the smallest problems where we already know the answer directly. matlab jiska ans directly hum kar sakte hai.

*/ 


// Problem 1: Find factorial using recursion
// #include<iostream>
// using namespace std;

// int factorial(int n) {

//     // base case
//     if (n==0) return 1;

//     int chotiProblem = factorial(n-1);
//     int badiProblem = n * chotiProblem;

//     // or we can write like :- return n * factorial(n-1);
//     return badiProblem;
 
// }

// int main(){

//     int n;
//     cin>>n;

//     int ans = factorial(n);
//     cout<<ans<<endl;

//     return 0;
// }

// find power of give num

// #include<iostream>
// using namespace std;

// int findPower(int n) {

//     if (n==0)
//     {
//        return 1;
//     }
    
//     int chotiProblem = findPower(n-1);
//     int badiProblem = 2 * chotiProblem;

//     return badiProblem;

// }

// int main(){

//     int n;
//     cin>>n;

//     int ans = findPower(n);
//     cout<<ans<<endl;

//     return 0;
// }


// Print Counting

// #include<iostream>
// using namespace std;

// int Print(int n) {

//     if (n==0)
//     {
//        return 0;
//     }
    

//     cout<< n <<endl;

//     Print(n-1);

// }

// int main(){

//     int n;
//     cin>>n;

//     int ans = Print(n);
//     cout<<ans<<endl;

//     return 0;
// }


//Problem: Print Fibonacci Series and give nth fibonacci number

// #include<iostream>
// using namespace std;

// int printFibonacci (int n) {

//     if (n==0)
//     {
//        return 0;
//     }
//     if (n==0)
//     {
//        return 1;
//     }

//     int chotiProblem = printFibonacci(n-1) + printFibonacci(n-2);
//     int badiProblem = chotiProblem;

//     cout<< "badiProblem" <<badiProblem<<endl;

//      return badiProblem;
    
// }

// int main() {

//     int n;

//     cin>>n;

//     printFibonacci(n);

//     return 0;


// }

/*
Problem: You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.
In how many distinct ways can you climb to the top?

Example 1: Input: n = 2 Output: 2
Explanation: There are two ways to climb to the top. 1. 1 step + 1 step 2. 2 steps



#include<iostream>
using namespace std;

int climbStairs(int n) {

if (n==0)
{
   return 1;
}

if (n==1)
{
   return 1;
}

int ans = climbStairs(n-1) + climbStairs(n-2);

return ans;

}


int main() {

   int n;
   cin>>n;

  int result = climbStairs(n);
  cout<<"answer is: "<< result<<endl;

   return 0;
}
*/

/*
Problem : Say Digits:
ip: 412, op: four one two
ip: 663, op: six six three


#include<iostream>
using namespace std;

void sayDigits(int n, string arr[]) {

   if (n ==0)
   {
      return;
   }
   
   int digit = n%10;
    n = n/10;

    sayDigits(n,arr);

    cout<<" "<<arr[digit];

}

int main() {

   int n;
   cin>>n;

   string arr[10]={"zero","one","two","three","four","five","six","seven","eight","nine"};

   sayDigits(n,arr);

   return 0;
}
*/

/*
Problem: Given an array of integers check whether this array is sorted or not.
ip: [1,2,3,4,5] op: true
ip: [1,2,3,5,4] op: false


#include<iostream>
using namespace std;

bool checkSorting(int arr[], int size, int index) {

if (size==0 || size ==1) return true;

if (index >= size-1)
{
   return true;
}

if (arr[index]>arr[index+1])
{
   return false;
}else{
  return checkSorting(arr,size-1,index+1);
}

}


int main() {

   int arr[6]= {4,7,15,10,144,555};
   int size=6;
   int index=0;

  bool result = checkSorting(arr,size,index);

  cout<<"answer is: "<<result;

  return 0;
}
*/

/*
Problem: Given array of integres. add all elements and return it's sum.
ip: [1,2,3,4,5] op: 15
ip: [7,4,0,0,1,2] op: 14
*/

// #include<iostream>
// using namespace std;

// int sumArray(int arr[], int size, int index, int sum) {
//    if (size == 0) return 0;

//    if (index == size)
//    {
//      return sum;
//    }
//    sum = sum + arr[index];

//  return sumArray(arr,size,index+1,sum);
// }

// int main() {

//    int arr[5] = {1,2,3,4,5};
//    int size = 5;
//    int index = 0;
//    int sum = 0;

//    cout<<"Sum of array is: "<<sumArray(arr,size,index,sum);

//    return 0;
// }

/*
Problem: Linear search using recursion
ip: arr={22,57,78,11,34}, k=34 op:- found.
ip: arr={22,57,78,11,34}, k=55 op:- not found.
*/

// #include<iostream>
// using namespace std;

// bool linearSearch(int arr[],int index,int size, int k) {

//    cout<<"index here: "<<index<<endl;
//    if (size-1==index && arr[index]!=k) return false;

//    if (arr[index]==k)
//    {
//       return true;
//    }

//    return linearSearch(arr,index+1,size,k);
   
// }

// int main() {
   
//    int arr[5]={22,57,78,11,34};
//    int index=0;
//    int size=5;
//    int k=34;

//    bool result = linearSearch(arr,index,size,k);

//    if (result)
//    {
//       cout<<"K is Found";
//    }else{
//       cout<<"K is not Found";

//    }

//    return 0;
// }


////////////////////////////////////////////////// Binary Search /////////////////////////////////////////////////////////

// #include<iostream>
// using namespace std;

// bool binarySearch(int arr[], int start, int end, int k) {

//    if (start>end) return false;

//    int mid = (start+end)/2;

//    if (arr[mid]==k) return true;

//    if (arr[mid]>k) {
//    return binarySearch(arr,start,mid-1,k);
//    }else {
//    return binarySearch(arr,mid+1,end,k);
//    }

// }

// int main() {

//    int arr[6]={11,22,33,44,55,66};
//    int size = 6;
//    int start = 0;
//    int end = size-1;
//    int k = 22;

//   cout<<"Result is: "<<binarySearch(arr,start,end,k)<<endl;

//   return 0;

// }

/*
Problem: Reverse a String
*/

// #include<iostream>
// using namespace std;

// void swapString(char &i, char &j){

//    char temp;

//    temp=i;
//    i=j;
//    j=temp;
// }

// string Reverse(string name, int i, int j) {

//    if (i>j) return name;
    
//    swapString(name[i],name[j]);
//    i++;
//    j--;

//    return Reverse(name,i,j);
   
// }

// int main() {

//    string name = "ankur";
//    int i=0;
//    int j=name.length()-1;

//    cout<<"result is: "<<Reverse(name,i,j);

//    return 0;
// }

/*
Problem : check a string is palindrome or not
*/

// #include<iostream>
// using namespace std;

// bool checkPalindrome(string name, int i, int j){

//    if(i>j) return true;

//    if (name[i] != name[j]) return false;

//    i++;
//    j--;

//    return checkPalindrome(name,i,j);
   
// }

// int main() {

//    string name = "bookoob";
//    int i=0;
//    int j= name.length()-1;

//    cout<<"result is: "<<checkPalindrome(name,i,j);
   
//    return 0;
// }

/*
Problem: Find a^b.
*/

// #include<iostream>
// using namespace std;

// int findPower(int a, int b) {

//    if(b==0) return 1;

//    return a*findPower(a,b-1);
// }

// int main() {

//    cout<<"answer is: "<<findPower(2,10);
//    return 0;
// }

/*
Problem: Bubble Sort using recursion
*/

// #include<iostream>
// using namespace std;

// void swapArray(int &i, int &j){

//    int temp;

//    temp=i;
//    i=j;
//    j=temp;
// }

// void bubbleSort(int arr[], int size) {

//    if (size == 0 || size ==1) return;

//    for (int i = 0; i < size; i++)
//    {
//       if (arr[i]>arr[i+1])
//       {
//         swapArray(arr[i],arr[i+1]);
//       }
      
//    }
   
//   return bubbleSort(arr,size-1);  
   

// }

// int main() {

//    int arr[7]={6,3,9,2,1,5,3};
//    int size=7;

//    bubbleSort(arr,size);

//    for (int i = 0; i < size; i++)
//    {
//      cout<<" "<<arr[i];
//    }
   
// }


//////////////////////////////////////////////////// Merge Sort ///////////////////////////////////////////////////////////

#include<iostream>
using namespace std;

void printArray(int arr[], int start, int end, string msg) {
    cout << msg << " [ ";
    for (int i = start; i <= end; i++) {
        cout << arr[i] << " ";
    }
    cout << "]" << endl;
}

void merge(int arr[], int start, int end) {

   cout << "Merging: start=" << start << " end=" << end << endl;

   int mid = (start+end)/2;

   int len1 = mid-start+1;
   int len2 = end-mid;

   int *first = new int[len1];
   int *second = new int[len2];

   // copying values
   int mainArrayIndex=start;
   int k = start;
   for (int  i = 0; i <len1; i++)
   {
     first[i]= arr[k++];
   }

   for (int i = 0; i < len2; i++)
   {
     second[i]= arr[k++];
   }
   
   // merging 2 sorted arrays
   int index1=0;
   int index2=0;

   while (index1<len1 && index2<len2)
   {
      if (first[index1]<second[index2])
      {
         arr[mainArrayIndex++] = first[index1++];
      }else{
         arr[mainArrayIndex++] = second[index2++];
      }
   }
   
    while (index1<len1 )
   {

      arr[mainArrayIndex++] = first[index1++];
   }

    while (index2<len2)
   {

      arr[mainArrayIndex++] = second[index2++];
   }
   
}

void mergeSort(int arr[], int start, int end) {

   // base case
   if (start>=end) return;

   int mid = (start+end)/2;

    // log current array before splitting
    printArray(arr, start, end, "Dividing array from index " + to_string(start) + " to " + to_string(end));

   // left part sorting
     cout << "Left: start=" << start << " mid=" << mid << endl;
   mergeSort(arr,start,mid);

   printArray(arr, start, end, "Dividing array from index in second mergeSort " + to_string(start) + " to " + to_string(end));

   // right part sorting
     cout << "Right: mid+1=" << mid + 1 << " end=" << end << endl;
   mergeSort(arr,mid+1,end);

   //merge all
   merge(arr,start,end);
   
}

int main(){

   int arr[6]={2,55,5,1,6,9};
   int size=6;
   int start=0;
   int end=size-1;

   mergeSort(arr,start,end);

   for (int i = 0; i < size; i++)
   {
    cout<< arr[i] <<endl;
   }
   

   return 0;
}


