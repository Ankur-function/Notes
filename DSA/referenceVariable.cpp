#include<iostream>
using namespace std;

int main() {

    // int i=5;

    // int &j = i;


    // cout<< i<< endl;
    // i++;
    // cout<< i<< endl;
    // j++;
    // cout<< i<< endl;
    // cout<< j<< endl;


    int n;
    cin>>n;

    // variable size array
    int* arr = new int[n]; // creating dynamic array here.

    // taking inputs in array
    for (int i = 0; i < n; i++)
    {
       cin>>arr[i];
    }
    


    return 0;

}