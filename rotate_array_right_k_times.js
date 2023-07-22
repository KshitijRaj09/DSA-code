var rotate = function(nums, k) {
    /*k = k%nums.length;
    if(k===0){
        return
    }
    let temp=[];
    let temp2 = []
    for(let i=0;i<nums.length-k;i++){
        temp[i] = nums[i];
    }
    for(let i=nums.length-k, j=0; i<nums.length;i++){
        temp2[j++] = nums[i];
    }
    
    for( let i=0;i<k;i++){
        nums[i] = temp2[i]
    }
    for( let i=k,j=0;i<nums.length;i++){
        nums[i] = temp[j++]
    }*/

    // ## Other way Optiomal solution
    k = k%nums.length;
    reverseArray(nums, 0, nums.length-k);
    reverseArray(nums, nums.length-k, nums.length);
    reverseArray(nums, 0, nums.length);
    console.log(nums);
    
};

function reverseArray(inputArray, startIndex, endIndex){
    let temp;
    for(let i=startIndex, j=endIndex-1; i<=j;i++, j--){
        temp = inputArray[i];
        inputArray[i] = inputArray[j];
        inputArray[j] = temp;
    }
}

//Question : https://leetcode.com/problems/rotate-array
// https://www.youtube.com/watch?v=wvcQg43_V8U
