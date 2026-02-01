//ques: // 167. Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150

var twoSum = function(numbers, target) {
    let i=0, j=numbers.length-1;
    while(i<j){
        if(numbers[i]+numbers[j] === target){
            return [i+1, j+1]
        }
        else if (numbers[i]+numbers[j]>target){
            j--;
        }
        else {
            i++;
        }
    }
};

/*

class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int startPointer=0, lastPointer=numbers.length-1;
        while(startPointer < lastPointer){
            int sum = numbers[startPointer] + numbers[lastPointer];
            if(sum == target){
                return new int [] {startPointer + 1, lastPointer+1};
            }
            else if(target > sum){
                startPointer++;
            }
            else{
                lastPointer--;
            }
        }
        return new int [] {};
    }
} */
