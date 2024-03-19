// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/description/

var merge = function (intervals) {
    let k=0;
    // sort with start time
    intervals.sort((a,b)=>a[0]-b[0]);
    for(let i=1; i<intervals.length; i++){
        // check if previous(k) end is greater than current start(i)
        if(intervals[k][1]>=intervals[i][0]){
            intervals[k][1] = Math.max(intervals[k][1], intervals[i][1]);
        }
        else{
            // Move k and store Ith index value at k.
            intervals[++k] = intervals[i]
        }
    }
    // return value from 0 to k
    return intervals.slice(0, k+1);
};