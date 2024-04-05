// 1544. Make The String Great
// https://leetcode.com/problems/make-the-string-great/description/?envType=daily-question&envId=2024-04-05

var makeGood = function (s) {
    const stack = [];
    let i = 0;
    stack.push(s[i]);
    i = 1;
    while (i < s.length) {
        if (stack.at(-1)?.toLowerCase() === s[i].toLowerCase()) {
            if (stack.at(-1) !== s[i]) {
                stack.pop();
            }
            else {
                stack.push(s[i]);
            }
        }
        else {
            stack.push(s[i]);
        }
        i++;
    }
    return stack.join('');
};