// 560. Subarray Sum Equals K
// https://leetcode.com/problems/subarray-sum-equals-k/

var subarraySum = function (nums, k) {
   //compute prefix sum and store in the map to know the frequency
   const prefixfreq = new Map();
   let prefixSum = 0;
   let count = 0;
   prefixfreq.set(0, 1); // prefixSum of 1st always 0.
   for (let num of nums) {
       prefixSum += num;
       let need = prefixSum - k;
       if (prefixfreq.has(need)) { // check if need value present in hashmap
           count += prefixfreq.get(need); // get the combinations of need with other numbers
       }
       prefixfreq.set(prefixSum, prefixfreq.get(prefixSum) + 1 || 1);
   }
   return count;
};

// same as 930.
// ref : https://www.youtube.com/watch?v=ZZ5bOSRxAqM