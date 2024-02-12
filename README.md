# DSA-code
Data structure code
### [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150)

### [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)
```Use two pointer approach, 1st pointer points starting from 0, second pointer iterate. Then, move unique elements towards beginning of the array as 'count' value increase.```

### [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150)
```Use hashmap to store element as key and indexes as value then check if differnece from current value is as per condition.```

### [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/)
```Every item in next row is the sum of previous array. In previous array, push 0 at the end of array and append 0 at the beginning.```

### [350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/description/)
```Create a hashMap for storing the freqeuncies of elements in first array, then iterate 2nd array , reduce frequencies of element found in 2nd and push the element into result array.```

### [169. Majority Element](https://leetcode.com/problems/majority-element/description/?envType=daily-question&envId=2024-02-12)
```
1. Count frequency using hash map
2. Boyer-Moore's Algo :  While traversal, if same element is found, increase counter, if you get different element decrease counter. If counter becomes zero, pick the element for comparison.
ref : https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/
```
