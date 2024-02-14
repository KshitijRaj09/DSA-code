// Ques: 2149. Rearrange Array Elements by Sign
// https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

var rearrangeArray = function(nums) {
    const outputArray=[];
    let positiveInteger=0, nonPositiveInteger=1;
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0){
            outputArray[positiveInteger] = nums[i];
            positiveInteger += 2;
        }
        else {
            outputArray[nonPositiveInteger]=nums[i];
            nonPositiveInteger += 2;
        }
    }
    return outputArray;
};
