// Ques: 2971. Find Polygon With the Largest Perimeter
// https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/description/
var largestPerimeter = function(nums) {
    nums.sort((a,b)=> b-a);
    let sum =0;
    for(let num of nums){
        sum += num;
    }
    for(let i=0; i<nums.length; i++){
        sum -= nums[i];
        if(sum > nums[i]){
            return sum+nums[i];
        }
    }
    return -1;
};
