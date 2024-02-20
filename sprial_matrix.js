// Ques: 54. Sprial matrix
// https://leetcode.com/problems/spiral-matrix/

var spiralOrder = function (matrix) {
    const resultArray = [];
    const rows = matrix.length;
    const column = matrix[0].length;
    let top = 0, bottom = rows - 1;
    let left = 0, right = column - 1;
    while (left <= right && top <= bottom) { // to print left to right
        for (let i = left; i <= right; i++) {
            resultArray.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) { // to print top to bottom
            resultArray.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) { // to handle single row // [[1,2,3]]
            for (let i = right; i >= left; i--) { // to print right to left
                resultArray.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) { // to handle single column // [[1],[2],[3]]
            for (let i = bottom; i >= top; i--) { // to print bottom to top
                resultArray.push(matrix[i][left]);
            }
            left++;
        }
    }
    return resultArray;
};
