// Ques : 48. Rotate Image
// https://leetcode.com/problems/rotate-image/description/

var rotate = function (matrix) {

    const rows = matrix.length;
    const columns = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = i + 1; j < columns; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i = 0; i < rows; i++) {
        let left = 0, right = matrix[i].length - 1;
        while (left < right) {
            [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
            left++;
            right--;
        }
    }
}

// trick : first transpose the matrix then, reverse the rows.
