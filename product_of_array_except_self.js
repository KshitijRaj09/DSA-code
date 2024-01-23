//Ques : // 238. Product of Array Except Self
//https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150

var productExceptSelf = function(nums) {
    let left=[], right=[], result=[];
    left[0] = 1; right[nums.length-1]=1

    for(let i=1; i<=nums.length-1; i++){
        left[i] = left[i-1] * nums[i-1];
    }
    for(let i=nums.length-2; i>=0; i--){
        right[i] = right[i+1]*nums[i+1];
    }
    for(let i=0; i<=nums.length-1; i++){
        result[i] = left[i]*right[i]; 
    }
    return result;
};

// reference: https://www.youtube.com/watch?v=6GQEudo87tM
