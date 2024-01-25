// ques: 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

var isSubsequence = function(s, t) {
    // use 2 pointer approach, place 1st pointer on 1st string, 2nd on 2nd string
    let i=0, j=0;
    while(i<s.length && j<t.length) {
        if(s[i]!==t[j]){
            j++
        }
        else {
            i++;
            j++;
        }
    }
    return i===s.length;
};

// reference: https://www.youtube.com/watch?v=Gkz3SwtdSes
