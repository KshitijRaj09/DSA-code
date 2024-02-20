// Ques: 75. Sort Colors
// https://leetcode.com/problems/sort-colors/description/

/*var sortColors = function(nums) {
    let countZero=countOne=countTwo=0;

    for(let i=0; i<nums.length;i++){
        if(nums[i]===0){
            countZero++;
        }
        else if(nums[i]===1){
            countOne++;
        }
        else{
            countTwo++;
        }
    }

    for(let i=0; i<countZero; i++){
        nums[i] = 0;
    }
    for(let i=countZero; i<countZero+countOne; i++){
        nums[i] = 1;
    }
    for(let i=countZero+countOne; i<countZero+countOne+countTwo; i++){
        nums[i]=2
    }
};*/

var sortColors = function(nums) {
    let left=i=0;
    let right=nums.length-1;

    while(i<=right){
        if(nums[i]===0){
           [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        }
        else if(nums[i]===2){
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--
        }
        else{
            i++
        }
    }
}
