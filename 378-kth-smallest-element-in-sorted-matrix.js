// 378. Kth Smallest Element in a Sorted Matrix
// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/

var kthSmallest = function (matrix, k) {
    // let output = [];
    // let i=0;
    // while(i<matrix.length){
    //     output = [...output, ...matrix[i]];
    //     i++;
    // }
    // output.sort((a,b)=>a-b);
    // return output[k-1];

    // using binary search optiomal solution

    let row = column = matrix.length;
    let left = matrix[0][0], right = matrix[row - 1][column - 1];
    let ans = -1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        // check if k has less than or equal no. of count
        // it is important so that 
        // [[1,5,9],[10,11,13],[12,13,15]], here mid =14 but 14 is not present so, it will check next smaller value, i.e 13.
        if (k <= countLessThanMid(matrix, mid)) {
            ans = mid;
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return ans;
};

// count all the values less than mid
function countLessThanMid(matrix, mid) {
    //check every row
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        let column = matrix[0].length;
        while (column > 0 && matrix[i][column - 1] > mid) {
            column--;
        }
        count += column;
    }
    return count;
}

// TC : O(row+column * log(row+column));

// refer : https://www.youtube.com/watch?v=QD9ufGDmOX8