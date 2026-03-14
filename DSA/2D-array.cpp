/*
#include<iostream>
using namespace std;

bool isPresent(int arr[][4], int target, int row, int col){
for (int row = 0; row < 3; row++)
    {
        for ( int col = 0; col < 4; col++)
        {
          if ( arr[row][col]==target)
          {
            return 1;
          }
          
        }        
    }
    return 0;
}

void rowSum(int arr[][4], int row, int col){
for (int row = 0; row < 3; row++)
    {
    int rowSum=0;
        for ( int col = 0; col < 4; col++)
        {
        rowSum=rowSum + arr[row][col];
         
        }
        cout<<rowSum<<" ";        
    }
}

int largestRowSum(int arr[][4], int row, int col){
    int max=-1;
for (int row = 0; row < 3; row++)
    {
    int rowSum=0;
        for ( int col = 0; col < 4; col++)
        {
        rowSum=rowSum + arr[row][col];
         
        }
        if (rowSum>=max)
        {
            max=rowSum;
        }
           
    }

    return max;
}


int main() {
    
    int arr[3][4];

    // or if we give direct input
    // int arr[3][4]={1,2,3,4,5,6,7,8,9,10,11,12};


     cout<<"Enter your array elements: ";
    // taking row wise input
    for (int row = 0; row < 3; row++)
    {
        for ( int col = 0; col < 4; col++)
        {
          cin >> arr[row][col];
        }        
    }

    // taking column wise input
    // for (int col = 0; col < 4; col++)
    // {
    //     for ( int row = 0; row < 3; row++)
    //     {
    //       cin >> arr[row][col];
    //     }        
    // }

     cout<<"Printing the array : "<<endl;
    // printing array
    for ( int row = 0; row < 3; row++)
    {
        for ( int col = 0; col < 4; col++)
        {
           cout<< arr[row][col]<<" ";
        }
        cout<<endl;
    }

    cout<<"Enter your element to search: "<<endl;
    int target;
    cin>>target;

    if (isPresent(arr,target,3,4))
    {
       cout<<"Target Found"<<endl;
    }else{
        cout<<"Not Found"<<endl;
    }
    
    rowSum(arr,3,4);
   cout<<"Largest row sum is: "<< largestRowSum(arr,3,4);


    return 0;
      
}
*/

/**
For a given two-dimensional integer array/list ‘ARR’ of size (N x M), print the ‘ARR’ in a sine wave order, i.e.,
print the first column top to bottom, next column bottom to top, and so on.

For eg:-

The sine wave for the matrix:-
1 2
3 4
will be [1, 3, 4, 2].
 */

//  #include<iostream>
//  #include <vector>
//  using namespace std;

//  vector<int> wavePrint(int arr[][4], int rowNum, int colNum) {
//     vector<int> result;

//     for (int col = 0; col < colNum; col++)
//     {
//         if (col%2==0) // even condn so top to bottom
//         {
//            for (int row = 0; row < rowNum; row++)
//            {
//             result.push_back(arr[row][col]);
//            }
           
//         }else{
//             for (int row = rowNum-1; row>=0; row--)
//            {
//             result.push_back(arr[row][col]);
//            }
//         }
        
//     }
//     return result;
//  }


//  int main() {

// int arr[][4] = {
//     {1, 2, 3, 4},
//     {5, 6, 7, 8},
//     {9,10,11,12}
// };

// int rowNum = 3;
// int colNum = 4;

// vector<int> answer = wavePrint(arr,rowNum,colNum);
// cout<<"answer is: ";

// for (int i = 0; i < answer.size(); i++)
// {
//     cout<<answer[i]<<" ";
// }

// return 0;

//  }

 /**
Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
  */

// #include<iostream>
// #include <vector>
// using namespace std;

// vector<int> spiralPrint(int arr[][3],int rowNum,int colNum) {

//     int startingRow = 0;
//     int startingColumn = 0;
//     int endingRow = rowNum-1;
//     int endingColumn = colNum-1;

//     int count=0;
//     int total = rowNum*colNum;

//     vector<int> result;

//     while (count<total)
//     {
//       // print starting row
//       for (int i = startingColumn; i <=endingColumn && count < total; i++)
//       {
//         result.push_back(arr[startingRow][i]);
//         count++;
//       }
//       startingRow++;

//       // print ending column
//       for (int i = startingRow; i <=endingRow && count < total; i++)
//       {
//         result.push_back(arr[i][endingColumn]);
//         count++;
//       }
//        endingColumn--;

//       // print ending row
//       for (int i = endingColumn; i>=startingColumn && count < total; i--)
//       {
//         result.push_back(arr[endingRow][i]);
//         count++;
//       }
//       endingRow--;
      
//       // print starting column
//       for (int i = endingRow; i>=startingRow && count < total; i--)
//       {
//         result.push_back(arr[i][startingColumn]);
//         count++;
//       }
//       startingColumn++;
      
      
//     }

//     return result;

// }

// int main() {

// int arr[][3]= {
//     {1,2,3},
//     {4,5,6},
//     {7,8,9}
// };
// int rowNum = 3;
// int colNum = 3;

// vector<int> answer = spiralPrint(arr,rowNum,colNum);
// for (int i = 0; i < answer.size(); i++)
// {
//     cout<<answer[i]<<" ";
// }

// return 0;
// }

// H.W Problem : Rotate matrix by 90 degree.
/*

solution :-











*/


//////////////////////////////////////////////////////// Binary Search in 2D ////////////////////////////////////////////

/*
Problem. Search a 2D Matrix

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row. 
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
*/

// #include<iostream>
// using namespace std;

// bool searchTarget(int arr[][3], int rowNum, int colNum, int target){

//     int start=0;
//     int end= rowNum*colNum-1;


//     while (start<=end)
//     {
//        int mid=(start+end)/2;
//        int element = arr[mid/colNum][mid%colNum]; // formula to find the element in 2D array

//        if (element>target)
//        {
//         end=mid-1;
//        }else if (element<target)
//        {
//         start=mid+1;
//        }else{
//         return 1;
//        }
//     }
//     return 0;
// }

// int main() {

// int arr[][3]= {
//     {1,2,3},
//     {4,5,6},
//     {7,8,9}
// };
// int target = 3;

// int rowNum = sizeof(arr) / sizeof(arr[0]);;
// int colNum = sizeof(arr[0]) / sizeof(arr[0][0]);

// cout<<"your search target is: "<<searchTarget(arr,rowNum,colNum,target);
// return 0;
// }

/*
 Problem: Search a 2D Matrix II

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
*/

// Too much difficult for me right now.



















