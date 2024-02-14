# DSA-code
Data structure code
### [20. Valid Parenthesis](https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150) || [Source code](valid_parenthesis.js)
```Iternate the array and store the reversed parenthesis in outputarray, once we get reversed parenthesis, pop the last and match, if not equal then break and return false.```

### [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/) || [Source code](remove_duplicates_sorted_array.js)
```Use two pointer approach, 1st pointer points starting from 0, second pointer iterate. Then, move unique elements towards beginning of the array as 'count' value increase.```

### [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150) || [Source code](contains_duplicate_II.js)
```Use hashmap to store element as key and indexes as value then check if differnece from current value is as per condition.```

### [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/) || [Source code](pascal_triangle.js)
```Every item in next row is the sum of previous array. In previous array, push 0 at the end of array and append 0 at the beginning.```

### [350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/description/) || [Source code](intersection_of_two_arrays.js)
```Create a hashMap for storing the freqeuncies of elements in first array, then iterate 2nd array , reduce frequencies of element found in 2nd and push the element into result array.```

### [169. Majority Element](https://leetcode.com/problems/majority-element/description/?envType=daily-question&envId=2024-02-12) || [Source code](majority_element.js)
```
1. Count frequency using hash map
2. Boyer-Moore's Algo :  While traversal, if same element is found, increase counter, if you get different element decrease counter. If counter becomes zero, pick the element for comparison.
```
> ref : [Boyer-moore-algorithm](https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/)

### [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/description/) || [Source code](move_non_zeroes_left.js)
```Take a pointer 'ZeroCount' for zero elements, iternate the array if found a non zero element then swap the non-zero element with zero element and increment 'zeroCount' pointer```

### [136. Single Number](https://leetcode.com/problems/single-number/description/) || [Source code](single_number.js)
```
1. Best-approach => Iterate the array -> XOR the elements of the array starting with zero.
2. use hashMap to store the frequencies.
```

### [66. Plus One](https://leetcode.com/problems/plus-one/description/) || [Source code](plus_one.js)
```Join the elements of array to form a number, add one after using BigInt(), convert the number to string and split it.```

### [2108. Find First Palindromic String in the Array](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/) || [Source code](first_palindromic_string_array.js)
```Iterate through the array return if word is a palindrome, you can use two pointer approach for checking the palindrome.```

### [2149. Rearrange Array Elements by Sign](https://leetcode.com/problems/rearrange-array-elements-by-sign/description) || [Source code](rearrange_array_elements_by_sign.js)
```Take three pointer and new output Array, 1st to store positive number at even places, 2nd to store negative number at odd places, 3rd to iterate the array.```

###  [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/) || [Source code](convert_sorted_array_to_bst.js)
``` Return type expected is TreeNode(already defined in the question). Use the logic of binary search, find mid of each set and store it in value, left side is start till mid-1 and right side is mid+1 till end```

### [268. Missing Number](https://leetcode.com/problems/missing-number/description/) || [Source code](missing_number.js)
``` Find total using (n(n+1))/2 - mathematical formula for finding sum of n natural numbers. Next, find total of all elements in given array. Subtracting numsTotal from Total gives the answer. ```
