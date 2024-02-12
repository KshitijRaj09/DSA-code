//Ques : https://leetcode.com/problems/pascals-triangle/solutions/
// 118. Pascal's Triangle

var generate = function (numRows) {
    let i = 0;
    let ans = [[1]] //[[1],[1,1]]
    while (i < numRows - 1) {
        let j = 0;
        let subArray = []
        let tempArray = [0, ...ans[i], 0] //3
        while (j < tempArray.length - 1) {
            subArray.push(tempArray[j] + tempArray[j + 1])
            j++;
        }
        ans.push(subArray)
        i++;
    }
    return ans;
};
