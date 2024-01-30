// Ques: 1. Two Sum
// https://leetcode.com/problems/two-sum/description/?envType=study-plan-v2&envId=top-interview-150

var twoSum = function(nums, target) {
    const hashMap = {}
    for(let i=0; i< nums.length; i++){
        secondNumber = target-nums[i];
        if(secondNumber in hashMap){
            return [hashMap[secondNumber], i];
        }
        hashMap[nums[i]] = i;
    }
};
