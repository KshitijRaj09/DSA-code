// 1614. Maximum Nesting Depth of the Parentheses
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/?envType=daily-question&envId=2024-04-04

var maxDepth = function (s) {
    let i = 0;
    const stack = [];
    let maxDepth = 0;
    while (i < s.length) {
        switch (s[i]) {
            case '(': {
                stack.push('(');
                maxDepth = Math.max(maxDepth, stack.length);
                break;
            }
            case ')': {
                stack.pop();
                break;
            }
        }
        i++;
    }
    return maxDepth;
};