// 150. Evaluate Reverse Polish Notation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

var evalRPN = function (tokens) {
    const stack = [];
    let first, second;
    for (let token of tokens) {
        switch (token) {
            case '/': {
                first = stack.pop();
                second = stack.pop();
                stack.push(parseInt((second) / (first)));
                break;
            }
            case '*': {
                first = stack.pop();
                second = stack.pop();
                stack.push((second) * (first));
                break;
            }
            case '+': {
                first = stack.pop();
                second = stack.pop();
                stack.push(((second) + (first)));
                break;
            }
            case '-': {
                first = stack.pop();
                second = stack.pop();
                stack.push(((second) - (first)));
                break;
            }
            default: {
                stack.push(parseInt(token));
            }
        }
    }
    return stack.pop();
};
