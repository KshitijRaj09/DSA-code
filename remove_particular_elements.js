// ques. https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

var removeElement = function(nums, val) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==val){
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};

//reference: https://www.youtube.com/watch?v=QrCds_6NiSk
