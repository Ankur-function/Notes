/*
 Count Primes
 Given an integer n, return the number of prime numbers that are strictly less than n.

Example:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

// #include<iostream>
// #include <vector>
// using namespace std;

// int countPrimes(int n){
//    if (n<=2) return 0;

//    vector<bool> isPrime(n,true);
//    isPrime[0]=isPrime[1] = false;

//    for (int i = 2; i < n; i++)
//    {
//       if (isPrime[i])
//       {
//         for (int j = i*i; j < n; j=j+i)
//         {
//            isPrime[j]=false;
//         }
        
//       }
      
//    }

//    int count=0;
//    for (int i = 2; i < n; i++)
//    {
//     if (isPrime[i])
//     {
//         count++;
//     }
    
//    }

//    return count;
     
// }

// int main() {

//     int n=10;
//     cout<<countPrimes(n)<<endl;
//     return 0;
// }

/*
Modular Exponentiation (Power in Modular Arithmetic)

Given three integers x, n, and M, compute (xn) % M (remainder when x raised to the power n is divided by M).

Examples : 
Input:  x = 3, n = 2, M = 4
Output: 1
Explanation: 32 % 4 = 9 % 4 = 1.

Input:  x = 2, n = 6, M = 10
Output: 4
Explanation: 26 % 10 = 64 % 10 = 4.
*/

/*
not able to do
*/