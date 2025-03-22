//Ques: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

var removeDuplicates = function(nums) {
    if(!nums.length){
        return 0;
    }
    let count = 1;
    for(let i=1; i<nums.length; i++){
        if(nums[count-1]!== nums[i]){
            nums[count] = nums[i];
            count++
        }
    }
    return count;
};

//reference: https://www.geeksforgeeks.org/batch/dsa-4/track/DSASP-Arrays/video/MTQzMw%3D%3D
