// 643. Maximum Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i/description/

var findMaxAverage = function (nums, k) {
    let sum=0;
    let i=0, j=0;
    // sum of k nos.
    while(j<k){
        sum += nums[j++];
    }
    let maxAverage = sum/k;
    
    // then slide right pointer and shrink from left pointer
    while(j<nums.length){
        sum += nums[j++] - nums[i++];
        maxAverage = Math.max(sum/k, maxAverage);
    }
    return maxAverage;
};