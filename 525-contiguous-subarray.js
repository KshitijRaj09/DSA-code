// https://leetcode.com/problems/contiguous-array/?envType=daily-question&envId=2024-03-16
// 525. Contiguous Array

var findMaxLength = function (nums) {
   let prefixSum = 0;
   const hashmap = new Map();
   let maxLength = 0;
   for (let i = 0; i < nums.length; i++) {
       if (nums[i] == 0) {
           nums[i] = -1;
       }
       prefixSum += nums[i];
       if (prefixSum == 0) {
           maxLength = Math.max(maxLength, i + 1);
           continue;
       }

       //if this sum already exist in hashmap means, we have sum 0 in b/w
       if (hashmap.has(prefixSum)) {
           maxLength = Math.max(maxLength, i - hashmap.get(prefixSum));
       }
       else {
           hashmap.set(prefixSum, i);
       }
       if (nums[i] == -1) {
           nums[i] = 0;
       }
   }
   return maxLength;
};

// ref : https://www.youtube.com/watch?v=xmguZ6GbatA