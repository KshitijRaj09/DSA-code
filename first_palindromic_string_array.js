// Ques: 2108. Find First Palindromic String in the Array
// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/

var firstPalindrome = function (words) {
    for (let word of words) {
        if (checkPalindrome(word)) {
            return word;
        }
    }
    return '';
};

function checkPalindrome(word) {
    let i = 0, j = word.length - 1;
    while (i<j) {
        if (word[i] != word[j]) {
            palindromic = false
            return false;
        }
        i++, j--;
    }
    return true;
}
