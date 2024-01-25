// Ques: // 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150

var isAnagram = function(s, t) { 
    if(s.length !== t.length){
        return false;
    }

    // ## sort both strings then compare

    /* let newStr = s.split('').sort().join('');
    let newStr2 = t.split('').sort().join('');
    let i=0, j=0;
    while(i<newStr.length && j<newStr2.length){
        if(newStr[i] !== newStr2[j]){
            return false
        }
        i++, j++;
    }
    return true; */

    // ## Another approach hash table
    let hashTable={};
    for(let i=0; i<s.length; i++){
        if(hashTable[s[i]]){
            hashTable[s[i]]++;
        }
        else{
            hashTable[s[i]] = 1;
        }
    }
      
    for(let i=0; i<t.length; i++){
        if(hashTable[t[i]]>0){
            hashTable[t[i]]--;
        }
        else{
            return false;
        }
    }
    return true;
};
