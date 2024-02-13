// ques: // 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/description/
var moveZeroes = function(nums) {
   let countZero=0;
   for(let i=0; i<nums.length; i++){
       if(nums[i]!==0){
           let temp = nums[i];
           nums[i] = nums[countZero];
           nums[countZero] = temp;
           countZero++;
       }
   }
};
// link : https://leetcode.com/problems/move-zeroes
// Help : GFG DSA course
