// 300. Longest Increasing Subsequence
// https://leetcode.com/problems/longest-increasing-subsequence/description/

var lengthOfLIS = function(nums) {
   const lisMemo = new Array(nums.length).fill(1);
   for(let i=nums.length-1; i>=0; i--){
       for(let j=i+1; j<nums.length; j++){
           if(nums[i]<nums[j]){
               lisMemo[i] = Math.max(lisMemo[i], lisMemo[j]+1);
           }
       }
   }
   return Math.max(...lisMemo);
};
