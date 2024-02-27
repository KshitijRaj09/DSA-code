// 15. 3Sum
// https://leetcode.com/problems/3sum/description/

var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    const outputArray = [];
    for(let i=0; i<nums.length-2; i++){
        if(i>0 && nums[i]=== nums[i-1]){ // if current value same as next
            continue;
        }
        let j=i+1, k=nums.length-1;
        while(j<k){
            const sum = nums[i]+nums[j]+nums[k];
            if(sum===0){
                outputArray.push([nums[i], nums[j], nums[k]]);
                while(j<k && nums[j]=== nums[j+1]){ // condition to check if next value is same as current
                    j++; // if yes then skip
                }
                while(j<k && nums[k]=== nums[k-1]){ // condition to check if next value is same as current
                    k--; // if yes then skip duplicates
                }
                j++, k--;
            }
            else if(sum<0){
                j++;
            }
            else{
                k--;
            }
        }
    }
    return outputArray;
};
