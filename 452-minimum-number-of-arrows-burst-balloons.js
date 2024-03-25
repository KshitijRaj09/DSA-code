// ques: 452. Minimum Number of Arrows to Burst Balloons
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/?envType=daily-question&envId=2024-03-18

var findMinArrowShots = function (points) {

    // sort the balloons points by end in ascending order
    points.sort((a,b)=>a[1]-b[1]);

    let arrowCount=1;
    let end = points[0][1];
    for(let i=1; i<points.length; i++){
        // check if balloon previous balloon end >= current balloon start
        if(points[i][0] <= end){
            continue
        }
        // current balloon start > previous balloon end then, update the value
        arrowCount++;
        end = points[i][1];
    }
    return arrowCount;
};

// ref: https://www.youtube.com/watch?v=fvBhjAp0j9c