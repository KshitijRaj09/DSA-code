// Ques: 66. Plus One
// https://leetcode.com/problems/plus-one/description/

var plusOne = function(digits) {
    let updatedDigits = digits.join('');
    
    updatedDigits = (BigInt(updatedDigits) + BigInt(1)).toString().split('');
    return updatedDigits.map(Number);
};

//Note: use BigInt() for handling large integer instead of parseInt().
