// ques : 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150

var isIsomorphic = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    const hashTable1={};
    const hashTable2={}
    for(let i=0; i<s.length; i++){
        if(hashTable1[s[i]] !== hashTable2[t[i]]){
            return false;
        }
        hashTable1[s[i]] = i;
        hashTable2[t[i]] = i;
    }
    return true;
};

// trick match the indexes using hashtable.
