// 713. Subarray Product Less Than K
// https://leetcode.com/problems/subarray-product-less-than-k/description/

// approach : sliding window
var numSubarrayProductLessThanK = function (nums, k) {
   let i = 0, j = 0;
   let count = 0;
   let product = 1;
   while (j < nums.length) {
       product *= nums[j];
       // check till product become less than k
       while(product >= k && i<=j) {
           product /= nums[i]; // if product greater than k and shrink the window
           i++;
       }
       count += j + 1 - i; // check the count and increment j pointer;
       j++;
   }
   return count;
};

// ref: https://www.youtube.com/watch?v=L_yBEqBAZzs