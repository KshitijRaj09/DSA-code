//Ques : https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description/
// 1481. Least Number of Unique Integers after K Removals

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const IntegerAndCount = {}
    let count =0;
    for(let num of arr)
    {
        if(!IntegerAndCount[num])
           IntegerAndCount[num]=1;
        else{
            IntegerAndCount[num]++
        }
    }

 // sort by values in ascending order   

const sortedValue = Object.entries(IntegerAndCount)

const ans = sortedValue.sort((a,b)=>a[1]-b[1])

for(let elem of ans){
    if(elem[1]<=k){
        IntegerAndCount[elem[0]]=0;
        k=k-elem[1]
    }
    if(k==0)
    break;
}

  const allValues = Object.values(IntegerAndCount)
  for(let elem of allValues)
    if(elem!==0)
      count++;

  return count;
};
