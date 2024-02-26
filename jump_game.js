// Ques: 55. Jump Game
// https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

var canJump = function(nums) {
    // Set up a variable to keep track of the furthest we can jump
    let maxJump = 0;
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current index is greater than the max we can jump, return false
        if (i > maxJump) {
            return false;
        }
        // Update maxJump to be the max we can jump from the current index
        maxJump = Math.max(i + nums[i], maxJump);
    }
    
    // If we reach the end, return true
    return true;
};  
