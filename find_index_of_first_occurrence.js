//Ques: 28. Find the Index of the First Occurrence in a String
//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

var strStr = function(haystack, needle) {
    for(let i=0; i<haystack.length; i++){
        if(haystack.startsWith(needle, i)){  // if(haystack.substr(i, needle.length) === needle){
            return i;
        }
    }
    return -1;
};
