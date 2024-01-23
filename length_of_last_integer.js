// ques: 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/?envType=study-plan-v2&envId=top-interview-150

var lengthOfLastWord = function(s) {

    // return s.trim() .split(' ') .pop().length
    
    let words = s.trim(' ').split(' ');
    return words[words.length-1].length;
};
