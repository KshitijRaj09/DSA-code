// Ques: 55. Jump Game
// https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

var canJump = function(nums) {
    //Greedy approach
    let finalDestinationIndex = nums.length-1;

    //check if we can reach the finalDestinationIndex
    //Update start the loop from lastIndex-1 because if we reach there and it is non zero number then we can also reach lastIndex.
    for(let i=nums.length-2; i>=0; i--){
        if(nums[i]+ i >= finalDestinationIndex){
            finalDestinationIndex = i;
        }
    }
    return finalDestinationIndex===0 ? true : false ;
};

// Reference: https://www.youtube.com/watch?v=Gtugy3mRV-A
