
/*
 Pointers stores the address.

 int *ptr = &num; // syntax of pointer and storing address here.

 char *ptr = &ch; // syntax of pointer and storing address here for char type


 ptr will store address of num and int defines data type
 and *ptr will give you the value i.e. stored at that address and ptr will give you just the address.

int *p; (pointer to int is created , and pointing to some garbage address so never do like this , it is a bad practice.)


  */


  /*
  #include<iostream>
using namespace std;

int main(){

//     int num=5;
//     int *ptr=&num;



//     // address of Operator - &
//     cout<< "value of num is : "<<num<<endl;
//     cout<<"address of num is "<< &num <<endl;
//     cout<<"*ptr is "<< *ptr <<endl;
//     cout<<"ptr is "<< ptr <<endl;
    
//   double d =4.3;
//   double *p2 = &d;

//   cout<<"address is : "<< p2<<endl;
//   cout<<"value is : "<< *p2<<endl;

// int i=7;

// int * p = 0;
// p = &i; // these two lines equivalent to int *p = &i;

//    cout<<"address is : "<< p<<endl;
//   cout<<"value is : "<< *p<<endl;

// int num = 5;
// int a = num;
// a++;

//  int num = 5;
//  cout<<"value is num before : "<< num<<endl;

// int *p = &num;
// (*p)++;
//   cout<<"value is num after : "<< num<<endl;

// cout<<"value of p is: "<<*p;

// copying a pointer to another pointer

// int num = 5;

// int *p = &num;

//  int *q = p;

// // int *q = *p;

// cout<<"value of *p is: "<<*p<<endl;

// cout<<"value of *q is: "<<*q<<endl;

//Important Concept
int i=3;
int *t = &i;
// cout<< "*t before : "<< (*t)++<<endl;

*t = *t +1;
cout<< "*t after : "<< (*t)<<endl;
    return 0;
}
  */

///////////////////////////////////////////////// Integar Array Pointers //////////////////////////////////////////////////////////////////
/*
#include<iostream>
using namespace std;

int main(){

  int arr[10]={2,5,6,9,11};

   cout<<"address of first memory block is: "<< arr <<endl;
   cout<<"address of & first memory block is: "<< &arr[0] <<endl; // both are same
   cout<<"address of * first memory block is: "<< *arr <<endl;
   cout<<"address of *+ 1 first memory block is: "<< *arr + 1 <<endl;
   cout<<"address of (*)+ 1 first memory block is: "<< *(arr) + 1 <<endl;// both are same
   cout<<"address of *(+ 1) first memory block is: "<< *(arr + 1) <<endl;
   cout<<"address of [2] first memory block is: "<< arr[2] <<endl;
   cout<<"address of *(arr+2) first memory block is: "<< *(arr + 2) <<endl; // both are same

   /*
   Formula :- 
    arr[i]= *(arr+i)
    or
    i[arr]= *(i+arr)
   */

  //  int i=3;
  //  cout <<"i[arr]: "<<i[arr]<<endl;

  // int *p = &arr[0];
  // cout<< "p ye arr ka first block ka address "<<p<<endl;
  // cout<< "*p "<<*p<<endl;
  // cout<< "&p ye p block ka khud ka address "<<&p<<endl;


  // arr = arr+1; // gives an error
  /*
  int *ptr = &arr[10];
  cout<< ptr<< endl;

  ptr = ptr +1; // but this will work fine
  cout<< ptr <<endl; 



    return 0;
}

*/

///////////////////////////////////////////////// Character Array Pointers //////////////////////////////////////////////////////////////////
/*
#include<iostream>
using namespace std;

int main(){
  
  int arr[5] = {1,2,3,4,5};
  char ch[6]="abcde";

  cout<<"arr gives you address of first element "<<arr<<endl;
  cout<<"char gives you value instead "<<ch<<endl;

  // attention here
  char *c = &ch[0];

  cout<<" here cout implementation is different for characters it will not give address of ch: "<<c<<endl;

  return 0;
} 
  */

///////////////////////////////////////////////// Functions In Pointers //////////////////////////////////////////////////////////////////


#include<iostream>
using namespace std;

void print(int *p){

  cout<<"p: "<<p<<endl;
  cout<<"*p: "<<*p<<endl;
}

void update(int *p) {

  p = p +1; // updatiing address
 *p = *p +1; // updating value


  cout<<"Inside update p: "<<p<<endl;

}

int getSum(int arr[], int n) {
  
  int sum=0;
  for (int i = 0; i < n; i++)
  {
    sum= sum + arr[i];
  }
  return sum;
}

int main(){
  
  int value = 5;
  int *p = &value;

  cout<<"Before p: "<<p<<endl;
  cout<<"Before *p: "<<*p<<endl;
  // print(p);
  update(p);

  cout<<"After p: "<<p<<endl;
  cout<<"After *p: "<<*p<<endl;

  int arr[5] = {1,2,3,4,5}; 

  cout<<"sum is: "<< getSum(arr,5) << endl;

  return 0;
} 