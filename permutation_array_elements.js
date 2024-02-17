// Ques: 46. Permutations
https://leetcode.com/problems/permutations/description/

var permute = function (nums) {
    const result = [];
    backtrack(nums, 0, result);
    return result;
}

function backtrack(nums, start, result) {
    if (start === nums.length - 1) {
        result.push([...nums]); // make a copy otherwise, so it point different reference
        return;
    }

    for (let i = start; i < nums.length; i++) {
        [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap elements
        backtrack(nums, start + 1, result);
        [nums[start], nums[i]] = [nums[i], nums[start]]; // Backtrack the swap
    }
}
