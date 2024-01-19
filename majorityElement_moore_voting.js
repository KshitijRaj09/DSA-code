//Question : Majority Element 
// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

var majorityElement = function(nums) {
    //using moore voting algorithm
    let countFrequency=0;
    let element
    for(let i=0; i<nums.length; i++){
        if(countFrequency===0){
            countFrequency++;
            element = nums[i];
        }
        else if (nums[i]!==element){
            countFrequency--;
        }
        else {
            countFrequency++;
            if(countFrequency > nums.length/2){
                return element;
            }
        }
    }
    return element;
};

//reference: https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/
// https://youtu.be/nP_ns3uSh80?si=NdU9MhsHwMF0-6Ok
