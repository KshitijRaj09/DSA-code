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
