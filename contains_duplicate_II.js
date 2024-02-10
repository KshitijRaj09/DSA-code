// Ques. 219. Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150

var containsNearbyDuplicate = function(nums, k) {
    //element: key, index: value
    let hashMap = {};
    for(let i=0; i< nums.length; i++){
        if(Math.abs(hashMap[nums[i]]-i) <= k){
            return true;
        }
        hashMap[nums[i]] = i;
    }
    return false;
};
