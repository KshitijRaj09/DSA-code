var moveZeroes = function(nums) {
    //j check for zeroes and swap with non zeroes
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            let temp = nums[i];
            nums[i] = nums[count];
            nums[count]= temp;
            count++;
        }
    }
};

// link : https://leetcode.com/problems/move-zeroes
// Help : GFG DSA course
