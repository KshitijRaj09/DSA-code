// ques: 45. Jump Game II

var jump = function(nums) {
    let currentEnd=0;
    let currentFarthest = 0;
    let jumps=0;
    for(let i=0; i<nums.length-1; i++){
        currentFarthest = Math.max(currentFarthest, i+ nums[i]);
        if(i===currentEnd){
            jumps++;
            currentEnd = currentFarthest;
        }
        if(currentEnd >= nums.length-1){
            break;
        }
    }
    return jumps;
};

// reference : https://aaronice.gitbook.io/lintcode/graph_search/jump-game-ii
