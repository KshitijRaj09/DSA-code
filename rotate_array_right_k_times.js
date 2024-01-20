// ques: Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
//Question : https://leetcode.com/problems/rotate-array
var rotate = function(nums, k) {
    k=k%nums.length;
    //## javascript way but time limit exceeds in leetcode.
    // for(let i=0;i<k;i++){
    //     let element = nums.pop();
    //     nums.unshift(element);
    // }

    // ## second way better approach
    
    /*let secondPartArray=[]
    for(let i=nums.length-k, j=0; i<nums.length; i++){
        secondPartArray[j++]= nums[i];
    }
    let firstPartArray = []
    for(let i=0; i<nums.length-k;i++){
       firstPartArray[i] = nums[i] 
    }

    for(let i=0;i<secondPartArray.length;i++){
        nums[i] = secondPartArray[i];
    }
    for(let i=0; i<firstPartArray.length;i++){
        nums[i+k] = firstPartArray[i];
    }*/

    reverseArray(nums, 0, nums.length-k-1);
    reverseArray(nums, nums.length-k, nums.length-1);
    reverseArray(nums, 0, nums.length-1);
    
};

function reverseArray(array, startIndex, endIndex){
    let temp;
    for(let i=startIndex, j=endIndex; i<j; i++, j--){
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// reference: https://www.youtube.com/watch?v=wvcQg43_V8U
