// Ques: 1. Two Sum
// https://leetcode.com/problems/two-sum/description/?envType=study-plan-v2&envId=top-interview-150

var twoSum = function(nums, target) {
    const hashMap = {}
    for(let i=0; i< nums.length; i++){
        secondNumber = target-nums[i];
        if(secondNumber in hashMap){
            return [hashMap[secondNumber], i];
        }
        hashMap[nums[i]] = i;
    }
};

/* ```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
} */