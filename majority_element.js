//Ques : https://leetcode.com/problems/majority-element/description/?envType=daily-question&envId=2024-02-12
// 169. Majority Element

var majorityElement = function(nums) {
    let count=0;
    let element=nums[0];
    for(let i in nums)
        {
            if(count===0)
                element=nums[i]
            
            if(element===nums[i]){
                count++;
                if(count > nums.length/2){
                return element;
            }
            }
            else
                count--;
        }
    return element;
};
