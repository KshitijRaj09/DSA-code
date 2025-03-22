// question : 49. Group Anagrams
// link : https://leetcode.com/problems/group-anagrams/description/

const groupAnagrams = (strs) => {
    const hashmap = {};

    for (const word of strs) {
        const sortedWord = [...word].sort().join("");
        if (!hashmap[sortedWord]) {
            hashmap[sortedWord] = [];
        }
        hashmap[sortedWord].push(word);
    }

    return Object.values(hashmap);
};
