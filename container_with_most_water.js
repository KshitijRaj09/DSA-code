// Ques: 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/description/

var maxArea = function(height) {
    let left=0, right=height.length-1;
    let maxArea = 0;
    while(left<right){
        let area = Math.min(height[left], height[right]) * (right-left);
        maxArea = Math.max(area, maxArea);
        if(height[left] <= height[right]){
            left++;
        }
        else {
            right--;
        }
    }
    return maxArea;
};
