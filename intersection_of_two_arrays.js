// Ques: 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

var intersect = function(nums1, nums2) {
    const hashMap = {};
    const outputArray = [];
    for(let i=0; i< nums1.length; i++){
        if(hashMap[nums1[i]]){
            hashMap[nums1[i]] += 1; 
        }
        else{
            hashMap[nums1[i]] = 1;
        }
    }

    for(let i=0; i<nums2.length; i++){
        if(hashMap[nums2[i]]>=1){
            outputArray.push(nums2[i]);
            hashMap[nums2[i]] -= 1;
        }
    }
    return outputArray;
};
