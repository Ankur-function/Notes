/**
 * 1) Problem: Given the lengths of three sides of a triangle, determine if it can form a valid triangle.
 * Print true if valid and false otherwise. (Hint: Use the triangle inequality theorem.)
 */

// #include<iostream>
// using namespace std;

// bool validTriangle(int a, int b, int c){

// if(a+b>c && b+c>a && a+c>b){
// return true;

// }else{
//     return false;
// }

// }

// int main() {

//     int a,b,c;
//     cout<<"Please enter your 3 sides values"<<endl;
//     cin>> a>>b>>c;

//    bool isValid = validTriangle(a,b,c);
//    cout<<"answer is "<<(isValid?"true":"false");
//    return 0;
// }

/**
 *2)Problem: Write a program to swap the values of two variables without using a third variable.
 */

// #include<iostream>
// using namespace std;

// int swapValues(int &a, int &b) {

//     a = a+b;
//     b=a-b;
//     a= a-b;

// };
// int main() {

//     int a,b;
//     cout<<"Please enter your numbers a and b"<<endl;
//     cin>>a>>b;

//     swapValues(a,b);

//     cout<<"final swaped values are:"<<"a="<<a <<","<<"b="<<b;

//     return 0;
// }

/**
 *3) Problem: Create a function that takes two integers as parameters and returns the greatest
 * common divisor (GCD) of those numbers.
 */

// #include <iostream>
// using namespace std;

// int findGCD(int a, int b) {
//     // Continue until one of the numbers becomes 0
//     while (b != 0) {
//         int remainder = a % b;
//         a = b;
//         b = remainder;
//     }
//     return a;  // When b is 0, a is the GCD
// }

// int main() {
//     int num1, num2;
//     cout << "Enter two integers: ";
//     cin >> num1 >> num2;

//     int gcd = findGCD(num1, num2);
//     cout << "The GCD of " << num1 << " and " << num2 << " is: " << gcd << endl;

//     return 0;
// }

/**
 *4) Problem: Implement a function that checks if a given number is prime. Return true if it is, and
 * false otherwise.
 */

// #include<iostream>
// using namespace std;

//    bool checkPrime(int n) {

// int i=2;
//       while(i<n) {
//         if(n%i ==0){
//             return false;
//         }
//         i++;
//       }
//       return true;

//    }

// int main() {

//     int n;
//     cout<<"Enter your number here"<<endl;
//     cin>>n;

//     bool value = checkPrime(n);

//     cout<<"Your input is : "<<(value?"Prime number":"Not a prime number");

//     return 0;

// }

/**
 *5) Problem: Build a simple calculator using switch cases. The user should input two numbers and
 * an operator (+, -, *, /). Your program should perform the corresponding operation and output
 * the result.
 */

// #include<iostream>
// using namespace std;

// int calC(int num1, int num2, char op){

// int answer =0;

//     switch(op){
//     case '+' :
//     answer = num1+num2;
//     break;
//     case '-':
//     answer = num1-num2;
//     break;
//     case '*':
//     answer = num1*num2;
//     break;
//     case '/':
//     answer = num1/num2;
//     break;

//     default:
//     cout << "Error: Invalid operator!" << endl;

//     };
//     return answer;
// }

// int main() {

// int num1,num2;
// char op;
// cout<<"Please enter your numbers: ";
// cin>>num1>>num2;
// cout<<"Enter the operation you want to perform: ";
// cin>>op;

// int value = calC(num1,num2,op);

// cout<<"Final answer is: "<<value;

// return 0;

// }

/**
 *6) Problem: Implement a program that takes a day number (1-7) and prints the name of the day
 * using switch cases.
 */

// #include <iostream>
// using namespace std;

// string calDay(int n)
// {

//     string day;
//     switch (n)
//     {
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;

//     case 3:
//         day = "Wednesday";
//         break;

//     case 4:
//         day = "Thursday";
//         break;

//     case 5:
//         day = "Friday";
//         break;

//     case 6:
//         day = "Saturday";
//         break;

//     case 7:
//         day = "Sunday";
//         break;
//     default:
//         day = "Invalid day number"; // Handle invalid input
//         break;
//     }

//     return day;
// }

// int main()
// {
//     int n;
//     cout << "Please enter day number(1-7): ";
//     cin >> n;

//     string answer = calDay(n);

//     cout << "Your Day is: " << answer;

//     return 0;
// }

/**
 *7) Problem: Write a program to check if a number is even or odd using if-else.
 */


// #include<iostream>
// using namespace std;

// bool checkEven(int n) {

// if(n%2==0){
//     return true;
// }else{
//     return false;
// }
// }

// int main() {
//     int n;
//     cout<<"Enter your number: "<<endl;
//     cin>>n;

//     bool answer = checkEven(n);
//   cout<<"Number is: "<<(answer?"Even":"Odd");

//   return 0;

// }

/*8)
Problem: Create a program that takes a year as input and checks if it is a leap year.
Print "Leap Year" or "Not a Leap Year."
 */

// #include<iostream>
// using namespace std;

// bool checkLeap(int n) {

// if ((n % 4 == 0 && n % 100 != 0) || (n % 400 == 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// int main() {

//     int n;
//     cout<<"Enter the year: ";
//     cin>>n;

//     bool answer = checkLeap(n);

// cout<<"Your year is: "<<(answer?"is a leap year":"Not a leap year");

// return 0;

// }

/*
9) Problem: Print the first 10 terms of the Fibonacci series using a for loop.
*/

// #include<iostream>
// using namespace std;

// int fibonacci(int n) {

//     int first=0;
//     int second=1;
     
//     for(int i=1; i<=n; i++){
// cout<<" "<<first;
// int value= first + second;
// first=second;
// second=value;
//     }


// }what

// int main() {
    
//     int n;
//     cout<<"Enter your number: ";
//     cin>>n;

//     int answer = fibonacci(n);

//     return 0;
// }

/*
10) Problem: Write a program that calculates the sum of all even numbers between 1 and n using
a while loop
 */

// #include<iostream>
// using namespace std;

// int calSum(int n){

// int sum=0;
// int i=0;
// while(i<=n){
//     if(i%2==0){
//     sum = sum +i;
//     }
// i++;
// }
// return sum;
// }

// int main() {

//     int n;
//     cout<<"Enter your number: ";
//     cin>>n;

//     int sum = calSum(n);

//     cout<<"Total Sum is: "<<sum;

//     return 0;

// }

/*
11) Problem: Use a for loop to check if a number is a palindrome (a number that reads the same
backward as forward).
*/

// #include<iostream>
// using namespace std;
// bool palindrome(int n) {

       
// }

// int main() {
    
//     int n;
//     cout<<"Enter your number: ";
//     cin>>n;

//     bool answer = palindrome(n);

//     cout<<"Your number is: "<<(answer?"Palindrome":"Not a palindrome");

//      return 0;
// }



/**
 *12) Implement a program that takes a floating-point number and rounds it to the nearest integer
 * without using any built-in rounding functions.
 */

// #include<iostream>
// using namespace std;
//  int roundFloatingNumber(float n) {

//        int num= n;
//        float decValue =  n-num;

//        if(decValue>=0.5){
//         return num +1;
//        }else{
//         return num;
//        }
//    }

// int main() {

//     float n;
//     cout<<"Enter your number here: ";
//     cin>>n;

//     int result = roundFloatingNumber(n);

//     cout<<"Your answer is: "<<result;

//     return 0;

// }


/**
 *13) Problem: Create a function that takes an integer and returns true if the number is a perfect number,
 * otherwise false. (A perfect number is a number that is equal to the sum of its divisors, excluding 
 * itself. Example: 6 is a perfect number because 1 + 2 + 3 = 6.)
 */

// #include<iostream>
// using namespace std;

// bool isPerfect(int n) {

// int sum=0;
// for (int i = 1; i < n; i++){
     
//      if(n%i == 0){
//    sum = sum + i;
//      }
// }

// if (sum == n)
// {
//     return true;
// }else{
//     return false;
// }


// }

// int main() {

//     int n;
//     cout<<"Enter your number";
//     cin>>n;

//     bool result = isPerfect(n);
//     cout<<"Your number is: "<<(result?"a perfect number":"not a perfect number");

//     return 0;
// }


/**
 *14) Problem: Develop a program to check if a given number is an Armstrong number.
 * (An Armstrong number for a given number of digits is a number that is equal to the sum of its
 * digits each raised to the power of the number of digits. Example: 153 is an Armstrong number
 * because 1^3 + 5^3 + 3^3 = 153.)
 */

// #include<iostream>
// #include <cmath>
// using namespace std;

//   int checkArmstrong(int n) {

// int totalDigits = 0;
//   int temp= n;
//   int sum=0;
//   int count =0;
//    while(temp>0){
//        temp= temp/10;
//        count++;
//    }

//    temp= n;

//   int rem=0;
//    while(temp>0) {
//     int rem= temp%10;
//     sum = sum + pow(rem,count);
//     temp=temp/10;
//    }

//    return sum;
//    }

// int main() {

//     int n;
//     cout<<"Enter your number: ";
//     cin>>n;

//     int result = checkArmstrong(n);
   
//    cout<<"Your number is a: "<<(result);

//    return 0;
// }

/**
 * 15) Subtract the Product and Sum of digits of an integer
 */

//  #include<iostream>
//  using namespace std;

//  int main() {
//     int n;
//     cout<<"Please enter your number";
//     cin>>n;
   
//     int sum=0;
//     int prod=1;

//     for (int i = 0; i < n; i++)
//     {
//     int rem = n%10;
//       n = n/10;
//     sum = sum+rem;
//     prod = rem*prod;

//     }
//     int sub = prod-sum;

//     cout<<"sub is: "<<sub;
  
//  }
/*
16) create a function that takes n and r as an input and finds out nCr from it. ( Note:- it's formula is n!/r!-(n-r)! ).
*/
 #include<iostream>
 using namespace std;

 int findFactorial(int n) {

    int value=1;
    for (int i = 1; i <=n; i++)
    {
        value = i*value;
    }
    return value;
 };

 int main() {
    int n,r;
    cout<<"Please enter your numbers";
    cin>>n>>r;
   
    int num = findFactorial(n);
    int denom = findFactorial(r)*findFactorial(n-r);
    int result = num/denom;
    cout<<"result : "<<result;

    return 0;
  
 }



/////////////////////////////=================Practice=================/////////////////////////////////////////////////






