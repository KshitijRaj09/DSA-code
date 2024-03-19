// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/description/?envType=daily-question&envId=2024-03-17

var insert = function (intervals, newInterval) {
    const output = [];
    let i=0;
    //insert all the intervals to output where intervals are before new interval
    //make sure check i<intervals.length
    while(i<intervals.length && intervals[i][1]<newInterval[0]){
        output.push(intervals[i]);
        i++;
    }

    //Now check for overlap intervals with newintervals
    //make sure check i<intervals.length
    while(i<intervals.length && intervals[i][0]<=newInterval[1]){
        //update the value of newintervals, so that it can be added to output[] at last
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    output.push(newInterval);
    
    //push remaining intervals to the output array
    // which don't overlap
    while(i<intervals.length){
        output.push(intervals[i]);
        i++;
    }

    return output;
}
