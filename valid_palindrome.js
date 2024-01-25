// ques: 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150

var isPalindrome = function(s) {
    let newString= s.replace(/[^a-z0-9]/gi,'').toLowerCase(); // and replace non-alphanumeric then convert to lowercase
    for(let i=0, j=newString.length-1; i<=s.length-1, j>=0; i++, j--){ // use two pointers approach to compare
        if(newString[i] !== newString[j]){
            return false;
        }
    }
    return true;
};
