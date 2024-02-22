// Ques: 997. Find the Town Judge
// https://leetcode.com/problems/find-the-town-judge/description/?envType=daily-question&envId=2024-02-22

var findJudge = function (n, trust) {
    const trustArray = new Array(n+1).fill(0);

    // count the degree of of votes
    for (let [people, judge] of trust) {
        trustArray[people] -= 1;
        trustArray[judge] += 1;
    }

  //check the maximum vote count
    for(let i=1; i<trustArray.length; i++){
        if(trustArray[i]===n-1){
            return i;
        }
    }
    return -1;
};
