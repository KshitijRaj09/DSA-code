// Ques: // 290. word pattern 
// https://leetcode.com/problems/word-pattern/description/?envType=study-plan-v2&envId=top-interview-150
var wordPattern = function(pattern, s) {
    let wordArray = s.split(' ');
    if(pattern.length !== wordArray.length){
        return false;
    }
    let hashMap1= new Map();
    let hashMap2= new Map();
    for(let i=0; i<wordArray.length; i++){
        if(hashMap1.get(pattern[i]) !== hashMap2.get(wordArray[i])){
           return false;
        }
        hashMap1.set(pattern[i], i);
        hashMap2.set(wordArray[i], i);
    } 
    return true;
};

// reference => similar as 205. Isomorphic Strings
