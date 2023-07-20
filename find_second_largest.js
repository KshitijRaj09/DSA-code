class Solution{
    print2largest(arr,n){
        //code here
        let largestNumber = arr.length>0 ? arr[0] : -1;
        let secondLargest = -1;
        for(let i=0;i<n;i++){
           if(arr[i]>largestNumber){
               secondLargest = largestNumber;
               largestNumber = arr[i];
           }
           else if(arr[i]< largestNumber && arr[i]> secondLargest){
               secondLargest = arr[i];
           }
        }
        return secondLargest;
    }  
}

//link: https://www.youtube.com/watch?v=37E9ckMDdTk
