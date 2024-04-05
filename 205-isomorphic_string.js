// ques : 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150

var isIsomorphic = function(s, t) {
    let hashmap1 = new Map();
    let hashmap2 = new Map();
    let i=0;
    while(i<s.length){
        if(hashmap1.get(s[i]) !== hashmap2.get(t[i])){
            return false;
        }
        hashmap1.set(s[i], i);
        hashmap2.set(t[i], i);
        i++;
    }
    return true;
};

// trick match the indexes using hashtable.
