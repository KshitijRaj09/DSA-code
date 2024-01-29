// Ques: 20. Valid Parentheses
//https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150

var isValid = function(s) {
    let stack = [];
    let popped;
    for(let i=0; i<s.length; i++){
        switch(s[i]) {
            case '(' :
                stack.push(')')
                break;
            case '{' :
                stack.push('}')
                break;
            case '[' : 
                stack.push(']')
                break;
            default:
                popped = stack.pop();
                if(s[i] !== popped) {
                return false;
        }
        }
    }
    return stack.length ? false : true;
};
