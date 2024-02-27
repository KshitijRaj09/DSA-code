// Ques : 34. Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

var searchRange = function(nums, target) {
    const firstPosition = binarySearch(nums, target, true);
    const lastPosition = binarySearch(nums, target, false);
    return [firstPosition, lastPosition];
};

function binarySearch(inputArray, target,isLeftMost){
    let left=0, right=inputArray.length-1;
    let index = -1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(inputArray[mid]===target){
            index=mid;
            if(isLeftMost){ // to check left most index
                right = mid-1;
            }
            else{
                left = mid+1;
            }
        }
        else if(inputArray[mid] > target){
            right=mid-1;
        }
        else{
            left = mid+1;
        }
    }
    return index;
}
