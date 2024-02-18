# DSA-code
Data structure code
#### [20. Valid Parenthesis](https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150) || [Source code](valid_parenthesis.js)
```Iternate the array and store the reversed parenthesis in outputarray, once we get reversed parenthesis, pop the last and match, if not equal then break and return false.```

#### [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/) || [Source code](remove_duplicates_sorted_array.js)
```Use two pointer approach, 1st pointer points starting from 0, second pointer iterate. Then, move unique elements towards beginning of the array as 'count' value increase.```

#### [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150) || [Source code](contains_duplicate_II.js)
```Use hashmap to store element as key and indexes as value then check if differnece from current value is as per condition.```

#### [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/) || [Source code](pascal_triangle.js)
```Every item in next row is the sum of previous array. In previous array, push 0 at the end of array and append 0 at the beginning.```

#### [350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/description/) || [Source code](intersection_of_two_arrays.js)
```Create a hashMap for storing the freqeuncies of elements in first array, then iterate 2nd array , reduce frequencies of element found in 2nd and push the element into result array.```

#### [169. Majority Element](https://leetcode.com/problems/majority-element/description/?envType=daily-question&envId=2024-02-12) || [Source code](majority_element.js)
```
1. Count frequency using hash map
2. Boyer-Moore's Algo :  While traversal, if same element is found, increase counter, if you get different element decrease counter. If counter becomes zero, pick the element for comparison.
```
> ref : [Boyer-moore-algorithm](https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/)

#### [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/description/) || [Source code](move_non_zeroes_left.js)
```Take a pointer 'ZeroCount' for zero elements, iternate the array if found a non zero element then swap the non-zero element with zero element and increment 'zeroCount' pointer```

#### [136. Single Number](https://leetcode.com/problems/single-number/description/) || [Source code](single_number.js)
```
1. Best-approach => Iterate the array -> XOR the elements of the array starting with zero.
2. use hashMap to store the frequencies.
```

#### [66. Plus One](https://leetcode.com/problems/plus-one/description/) || [Source code](plus_one.js)
```Join the elements of array to form a number, add one after using BigInt(), convert the number to string and split it.```

#### [2108. Find First Palindromic String in the Array](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/) || [Source code](first_palindromic_string_array.js)
```Iterate through the array return if word is a palindrome, you can use two pointer approach for checking the palindrome.```

#### [2149. Rearrange Array Elements by Sign](https://leetcode.com/problems/rearrange-array-elements-by-sign/description) || [Source code](rearrange_array_elements_by_sign.js)
```Take three pointer and new output Array, 1st to store positive number at even places, 2nd to store negative number at odd places, 3rd to iterate the array.```

####  [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/) || [Source code](convert_sorted_array_to_bst.js)
``` Return type expected is TreeNode(already defined in the question). Use the logic of binary search, find mid of each set and store it in value, left side is start till mid-1 and right side is mid+1 till end```

#### [268. Missing Number](https://leetcode.com/problems/missing-number/description/) || [Source code](missing_number.js)
``` Find total using (n(n+1))/2 - mathematical formula for finding sum of n natural numbers. Next, find total of all elements in given array. Subtracting numsTotal from Total gives the answer.```

#### [2971. Find Polygon With the Largest Perimeter](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/description/) || [Source code](find_polygon_with_largest_perimeter.js)
```Sort the array in descending order, find the sum of all items in array. Then iterate the array from largest to smallest, compare if the largest side > sum of remaining items, if yes then return the sum, otherwise check for next largest side with remaining sum.```

#### [46. Permutations](https://leetcode.com/problems/permutations/description/) || [Source code](permutation_array_elements.js)
```
1. Create a recursiveFunction pass inputArray, leftIndex, resultArray. 
2. Iterate over the array, first swap the values of `leftIndex` with `arrayIndex` then call the `recursiveFunction(inputArray, leftIndex+1, resultArray)`.
3. Swap the previously swapped values to initiate backtracking. So, that, values will be reset to default for other.
4. Inside Base condition `leftIndex===inputArray.length-1` and push the copy of `inputArray` in `resultArray`
```

#### [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/) || [Source Code](container_with_most_water.js)
```
1. Max area will be given by maximising width and height. Height would be the minimum value between the pole heights.
2. Start with two pointers, i points to left edge and j points to right edge of the height array. Calculate max area at each combination, after that see which pole has less height, move pointer at less height towards the mid of the array. Terminate this check, when i>j means left pointer exceeds right pointer means the area could no longer be formed.
```

#### [1481. Least Number of Unique Integers after K Removals](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description/) || [Source Code](least_number_of_unique_integers_after_k_removals.js)
```
Crux : Remove elements with lowest frequency
1. Create frequency hashmap by iterating over array, number is the key and frequency is stored in values
2. Sort by values in ascending order i.e. number with least frequency should be at the top
3. Now, keep on decreasing the values until k becomes zero
```

#### [1642. Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/description/) || [Source_Code](farthest_building_you_can_reach.js)
```
Crux : Use priority queue otherwise you will get Time Limit Exceeded error
1. For building of low height simply jump, for higher heights use bricks.
2. When bricks get exhausted, pull bricks from the jump where max bricks were used and replace it with ladder
3. Continue until ladder becomes zero too.
```

#### [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/) || [Source code](longest_consective_subSequence.js)
```
1. Delete the duplicate values, sort the array then, check if nums[i+1]-nums[i]===1, then update the consecutive Count and check `longestConsective = Math.max(longestConsective, consective).`
2. Insert the array value in `Set` data structure then iterate over set values, check values should if first in the sequence then only check is set contains consecutive values and update the consecutive values, longestConsecutive value.
```

#### [2402. Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/description/) || [Source code](meeting_rooms.js)
```
1. Sort meetings with startTime.
2. Take 2 arrays of size 'meeting_rooms' one to store meeting endtime, other to store count of meetings per room.
Check the minimum endtime for allocating the next meeitng. If two rooms has same endTime, then take room of minimum index.
3. For calculating meetingEndTime =>
   I If (prevEndTime > currentMeetingstartTime), 
      then (MeetingEndtime - currentMeetingStartTime) + currentMeetingEndTime;
   II. else, meetingEndTime = currentMeetingEndTime
   III. Also, update the count of meetings per room.

4. Other approach using priority heap (need to figure out).
```

#### [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) || [Source code](longest_increasing_subsequence.js)
```Write approach here...```

#### [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/) || [Source code](maximum_subarray.js)
```Write approach here....```