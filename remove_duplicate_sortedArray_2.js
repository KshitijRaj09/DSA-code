//Ques: remove duplicate from sorted array 2
//link : https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
var removeDuplicates = function(nums) {
    if(!nums.length || nums.length===1){
        return nums.length;
    }
    
    let count=2;
    for(let i=2; i<nums.length; i++){
        if(nums[count-2]!==nums[i]){
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};

reference: //https://www.youtube.com/watch?v=drbtmYjZQHQ
