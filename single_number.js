// Ques: 136. Single Number
// https://leetcode.com/problems/single-number/description/

var singleNumber = function(nums) {
    let result=0;
    for(let num of nums){
        result ^= num;
    }
    return result;
};

// ref : use XOR principle for getting the result, this trick only works when other numbers are twice except one (unique) number.
/*
Concept

If we take XOR of zero and some bit, it will return that bit
a⊕0=a

a⊕0=a

If we take XOR of two same bits, it will return 0
a⊕a=0

a⊕a=0

a⊕b⊕a=(a⊕a)⊕b=0⊕b=ba⊕b⊕a=(a⊕a)⊕b=0⊕b=b
So we can XOR all bits together to find the unique number.
*/
