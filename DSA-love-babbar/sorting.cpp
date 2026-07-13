/////////////////////////////////////////////// Insertion Sort /////////////////////////////////////////////////////////////////

#include<iostream>
using namespace std;

void insertionSort(int arr[], int size) {

    for (int i = 1; i < size; i++)
    {
        int temp=arr[i];
        int j= i-1;
       for ( ; j >=0; j--)
       {
        if (arr[j]>temp)
        {
            arr[j+1]=arr[j];
        }else{
            break;
        }
       }
        arr[j+1]=temp;
    }
    for (int i = 0; i < size; i++)
    {
       cout<< " " <<arr[i];
    }
        
}

int main() {
    int arr[100]={10, 1, 7, 4};
    int size=4;
    insertionSort(arr,size);
    return 0;
}

///////////////////////////////////////////////// Bubble Sort ///////////////////////////////////////////////////////////////////////

#include<iostream>
using namespace std;

void swapArray(int &i, int &j){

   int temp;

   temp=i;
   i=j;
   j=temp;
}

void bubbleSort(int arr[], int size) {

   if (size == 0 || size ==1) return;

   for (int i = 0; i < size; i++)
   {
      if (arr[i]>arr[i+1])
      {
        swapArray(arr[i],arr[i+1]);
      }
      
   }
   
  return bubbleSort(arr,size-1);  
   

}

int main() {

   int arr[7]={6,3,9,2,1,5,3};
   int size=7;

   bubbleSort(arr,size);

   for (int i = 0; i < size; i++)
   {
     cout<<" "<<arr[i];
   }
   
}