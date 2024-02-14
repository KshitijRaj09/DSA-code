// Ques: 268. Missing Number
// https://leetcode.com/problems/missing-number/description/

var missingNumber = function(nums) {
    const length = nums.length;
    const total= parseInt(length*(length+1))/2; // formula for sum of number starting from 0 to n.
    let sum=0;
    for(let number of nums){
        sum += number;
    }
    return total-sum;
};
