// Ques: 231. Power of Two
// https://leetcode.com/problems/power-of-two/description

/*var isPowerOfTwo = function(n) {
    return checkIsPowerOfTwo(n);
};

function checkIsPowerOfTwo(num){
    if(num===1){
        return true;
    }
    else if(num%2!==0 || num===0){
        return false;
    }
    return checkIsPowerOfTwo(parseInt(num/2));
}*/

/*var isPowerOfTwo = function(n) {
if (n === 1) return true;

  while (n > 2) {
    n = (n / 2);
  }

  return n === 2;
}*/

var isPowerOfTwo = function(n) {
    const power = Math.log2(n);
    return power%1===0; // only give true if it is a non decimal number.
}
