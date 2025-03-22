// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/description/

var longestConsecutive = function (nums) {
    if(!nums.length){
        return 0;
    }
    let longestConsective=1;
    const set = new Set([...nums]);
    for(let num of set){
        if(!set.has(num-1)){
            let consective=1;
            while(set.has(num+consective)){
                consective++;
                longestConsective = Math.max(longestConsective, consective);
            }
        }
    }
    return longestConsective;
}

// Other approach by using array.sort()
