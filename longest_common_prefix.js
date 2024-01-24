// ques: 14. Longest Common Prefix
//https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150

var longestCommonPrefix = function(strs) {
    // sort the array and compare first word characters with last word characters
    strs.sort();
    let result= '';
    for(let i=0; i<=strs[0].length-1; i++){
        if(strs[0].charAt(i)!== strs[strs.length-1].charAt(i)){
            break;
        }
        result += strs[0].charAt(i);
    }
    return result;
};

// reference : https://www.youtube.com/watch?v=wtOQaovlvhY
