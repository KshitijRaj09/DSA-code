# DSA-code

## Code Patterns reference articles:
### 1. [Code-patterns](https://github.com/Chanda-Abdul/Several-Coding-Patterns-for-Solving-Data-Structures-and-Algorithms-Problems-during-Interviews)

### 2. [Code-patterns](https://hackernoon.com/coding-patterns-a-smarter-approach-to-coding-interview-prep)

### 3. [Code-patterns](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)

## Data structure code written in javascript with approach.

#### 1. [20. Valid Parenthesis](https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150) || [Source code](valid_parenthesis.js)
```Iternate the array and store the reversed parenthesis in outputarray, once we get reversed parenthesis, pop the last and match, if not equal then break and return false.```

#### 2. [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/) || [Source code](remove_duplicates_sorted_array.js)
```Use two pointer approach, 1st pointer points starting from 0, second pointer iterate. Then, move unique elements towards beginning of the array as 'count' value increase.```

#### 3. [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150) || [Source code](contains_duplicate_II.js)
```Use hashmap to store element as key and indexes as value then check if differnece from current value is as per condition.```

#### 4. [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/) || [Source code](pascal_triangle.js)
```Every item in next row is the sum of previous array. In previous array, push 0 at the end of array and append 0 at the beginning.```

#### 5. [350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/description/) || [Source code](intersection_of_two_arrays.js)
```Create a hashMap for storing the freqeuncies of elements in first array, then iterate 2nd array , reduce frequencies of element found in 2nd and push the element into result array.```

#### 6. [169. Majority Element](https://leetcode.com/problems/majority-element/description/?envType=daily-question&envId=2024-02-12) || [Source code](majority_element.js)
```
1. Count frequency using hash map
2. Boyer-Moore's Algo :  While traversal, if same element is found, increase counter, if you get different element decrease counter. If counter becomes zero, pick the element for comparison.
```
> ref : [Boyer-moore-algorithm](https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/)

#### 7. [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/description/) || [Source code](move_non_zeroes_left.js)
```Take a pointer 'ZeroCount' for zero elements, iternate the array if found a non zero element then swap the non-zero element with zero element and increment 'zeroCount' pointer```

#### 8. [136. Single Number](https://leetcode.com/problems/single-number/description/) || [Source code](single_number.js)
```
1. Best-approach => Iterate the array -> XOR the elements of the array starting with zero.
2. use hashMap to store the frequencies.
```

#### 9. [66. Plus One](https://leetcode.com/problems/plus-one/description/) || [Source code](plus_one.js)
```Join the elements of array to form a number, add one after using BigInt(), convert the number to string and split it.```

#### 10. [2108. Find First Palindromic String in the Array](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/) || [Source code](first_palindromic_string_array.js)
```Iterate through the array return if word is a palindrome, you can use two pointer approach for checking the palindrome.```

#### 11. [2149. Rearrange Array Elements by Sign](https://leetcode.com/problems/rearrange-array-elements-by-sign/description) || [Source code](rearrange_array_elements_by_sign.js)
```Take three pointer and new output Array, 1st to store positive number at even places, 2nd to store negative number at odd places, 3rd to iterate the array.```

####  12. [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/) || [Source code](convert_sorted_array_to_bst.js)
``` Return type expected is TreeNode(already defined in the question). Use the logic of binary search, find mid of each set and store it in value, left side is start till mid-1 and right side is mid+1 till end```

#### 13. [268. Missing Number](https://leetcode.com/problems/missing-number/description/) || [Source code](missing_number.js)
``` Find total using (n(n+1))/2 - mathematical formula for finding sum of n natural numbers. Next, find total of all elements in given array. Subtracting numsTotal from Total gives the answer.```

#### 14. [2971. Find Polygon With the Largest Perimeter](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/description/) || [Source code](find_polygon_with_largest_perimeter.js)
```Sort the array in descending order, find the sum of all items in array. Then iterate the array from largest to smallest, compare if the largest side > sum of remaining items, if yes then return the sum, otherwise check for next largest side with remaining sum.```

#### 15. [46. Permutations](https://leetcode.com/problems/permutations/description/) || [Source code](permutation_array_elements.js)
```
1. Create a recursiveFunction pass inputArray, leftIndex, resultArray. 
2. Iterate over the array, first swap the values of `leftIndex` with `arrayIndex` then call the `recursiveFunction(inputArray, leftIndex+1, resultArray)`.
3. Swap the previously swapped values to initiate backtracking. So, that, values will be reset to default for other.
4. Inside Base condition `leftIndex===inputArray.length-1` and push the copy of `inputArray` in `resultArray`
```

#### 16. [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/) || [Source Code](container_with_most_water.js)
```
1. Max area will be given by maximising width and height. Height would be the minimum value between the pole heights.
2. Start with two pointers, i points to left edge and j points to right edge of the height array. Calculate max area at each combination, after that see which pole has less height, move pointer at less height towards the mid of the array. Terminate this check, when i>j means left pointer exceeds right pointer means the area could no longer be formed.
```

#### 17. [1481. Least Number of Unique Integers after K Removals](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description/) || [Source Code](least_number_of_unique_integers_after_k_removals.js)
```
Crux : Remove elements with lowest frequency
1. Create frequency hashmap by iterating over array, number is the key and frequency is stored in values
2. Sort by values in ascending order i.e. number with least frequency should be at the top
3. Now, keep on decreasing the values until k becomes zero
```

#### 18. [1642. Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/description/) || [Source_Code](farthest_building_you_can_reach.js)
```
Crux : Use priority queue otherwise you will get Time Limit Exceeded error
1. For building of low height simply jump, for higher heights use bricks.
2. When bricks get exhausted, pull bricks from the jump where max bricks were used and replace it with ladder
3. Continue until ladder becomes zero too.
```

#### 19. [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/) || [Source code](longest_consective_subSequence.js)
```
1. Delete the duplicate values, sort the array then, check if nums[i+1]-nums[i]===1, then update the consecutive Count and check `longestConsective = Math.max(longestConsective, consective).`
2. Insert the array value in `Set` data structure then iterate over set values, check values should if first in the sequence then only check is set contains consecutive values and update the consecutive values, longestConsecutive value.
```

#### 20. [2402. Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/description/) || [Source code](meeting_rooms.js)
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

#### 21. [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) || [Source code](longest_increasing_subsequence.js)
``` Subsequence - elements from the source array maintaining the same order, it could be contiguous or non-contiguous
   - Approach - We initialize an array with 1, having same length as input array. This implies that every number will have atleast one increasing subsequence that is itself.
   - In first loop, We traverse towards the beiginning of the array from the end.
   - In it's nexted second loop we traverse from i+1 till the end, checking if the num[i] < num[j], then the lis of that ith index will be the maximum of either lis[i] or lis[j+1]
   - So, at the end of the loop we have lisMemo of all elements at the index, we find it's max value ans return

```

#### 22. [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/) || [Source code](maximum_subarray.js)
```
Iterator over the array, take two variables one to store `currentSubrraySum`, other to store `maxSum`. Check if in any point ``currentSubrraySum > max`, then update maxSum.
   - sumSubArray = Math.max(sumSubArray + nums[i], nums[i]);
   - maxSum = Math.max(sumSubArray, maxSum);
```

#### 23. [189. Rotate Array](https://leetcode.com/problems/rotate-array/description/) || [Source code](rotate_array_right_k_times.js)
```
1. Use loop, pop the element from right(last) and use built in `unshift` to push the element on start of the array.
2. Reverse the array from start till k index, then reverse k index to last, at last reverse the entire array to get the correct output.
   - Create a reverse method, pass below arguments
   I.  reverseArray(nums, 0, nums.length-1-k); // Reverse the array from start till k index
   II. reverseArray(nums, nums.length-k, nums.length-1); // Reverse k index to last
   III.reverseArray(nums, 0, nums.length-1); // Reverse the entire array
```

#### 24. [231. Power of Two](https://leetcode.com/problems/power-of-two/description/) || [Source code](power_of_two.js)
```
We need to check whether given input is power of two or not.
Math.log2(input) gives whole number for elements which are power of 2, result%1 gives 0 for whole number
```

#### 25. [75. Sort Colors](https://leetcode.com/problems/sort-colors/description/) || [Source code](sort_colors.js)
```
Method 1 : Count all the 3 numbers in the first iteration, in the next iteration, based on count, push the values
Mathod 2 : Two pointer approach
zeroPointer is at 0th index, twoPointer is at last index.
iterate from 0 till the twoPointer, if the element is zero , then swap the element and element at zero pointer and increase i
 if the element is two, then swap the element and element at two pointer and decrease the twopointer,
if none match, then simple increase i.
This would sort the three elements, inplace.
```

#### 26. [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/description/) || [Source code](sprial_matrix.js)
```
Find the rows and columns of the matrix
Initialize top, bottom, left and right, based on dummy traversal, write the logic in while loop
```
> ref : [Spiral logic](https://www.youtube.com/watch?v=3Zv-s9UUrFM)

#### 27. [48. Rotate Image](https://leetcode.com/problems/rotate-image/description/) || [Source code](rotate_matrix_90degree.js)
```
1.Find transpose of the matrix i.e. rows becomes columns and vice versa
2. reverse each row of the matrix
```

#### 28. [201. Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/description) || [Source code](bitwise_and_number_range.js)
```
Brian Kernighan’s Algorithm: 
Subtracting 1 from a decimal number flips all the bits after the rightmost set bit(which is 1) including the rightmost set bit. 
for example : 
10 in binary is 00001010 
9 in binary is 00001001 
8 in binary is 00001000 
7 in binary is 00000111 
So if we subtract a number by 1 and do it bitwise & with itself (n & (n-1)), we unset the rightmost set bit. If we do n & (n-1) in a loop and count the number of times the loop executes, we get the set bit count. 
The beauty of this solution is the number of times it loops is equal to the number of set bits in a given integer.
```

#### 29. [997. Find the Town Judge](https://leetcode.com/problems/find-the-town-judge/description) || [Source code](find_the_town_judge.js)
```
1. Create an array Trusted of size N+1 to represent the total number of peoples in a town and initialize it with 0 .
2. After initialization, whenever a person trust someone else than himself, the trusted value of that person should be decreased since that person is not satisfying the two conditions that were mentioned in the question.
3. Also if a certain x person is trusted by others from town, than this x person value should be increased and those who trusted that x person there values should be decreased.
4. At last traverse through every person of town and while traversing If a person is found with N-1 trusts than this person should be the judge and return the index of that person .
```

#### 30. [55. Jump Game](https://leetcode.com/problems/jump-game/description/) || [Source code](jump_game.js)
```
We iterate over each index and calculate `maxJump = Math.max(i + nums[i], maxJump)`.
If in any case currentIndex > maxJump, means jump cannot be performed. So, return false.
Otherwise return true at last.
```

#### 31. [15. 3Sum](https://leetcode.com/problems/3sum/description/) || [Source code](3sum.js)
```Think in way of 2 sum sorted array, for this, fix one element and then apply 2 sum for sorted array, for removing duplicates from result, use hashSet in javascript or check if next element are same. If same then skip the elements.```

#### 32. [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/) || [Source code](find_first_and_last_position_sorted_element.js)
```
use binary search, create a function for binary search pass `(array, target, isLeftMost)` and
if we are search for `firstIndex -> right = mid-1`, for `lastIndex->left=mid+1`;
```

#### 33. [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/description/) || [Source code](evaluate_reverse_polish_notation.js)
```Iterate over the array, if operate comes pop last two elements, do the operation and push the result, if any value comes then push the value in stack. Last return the last element in stack.```

#### 34. [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/) || [Source code](two_sum_sorted_array.js)
```Use two pointer approach, check if `target=num[start]+num[end]`, if target>sum, increment start pointer, else decrement end pointer```

#### 35. [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/description) || [Source code](525-contiguous-subarray.js)
```
Replace 0 with -1, use hashmap to store all the first prefix sum of the number, and if that prefixsum appear again then check maxLength = Math.max(maxLength, i - hashmap.get(prefixSum))
Intuition is-> array length =5, 
0-3 = has prefixsum 5 and 0-5 also has prefixsum 5 means -> 3-5 sum is 0.
```

#### 36. [713. Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/description/) || [Source code](713-subarray-product-less-than-k.js)
```
Use sliding window approach, take 2 pointer i and j, j will continous increment.
Find product of nums[j], while product >=k , then shrink window by incrementing i and divide value of nums[i]
```

#### 37. [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) || [Source code](560-subarray-sum-equals-k.js)
```
It contains -ve number, so cannot done by sliding window technique.
By sliding window/two pointers approach. You'll not able to judge when sum will increase when it will decrease. Because it contains -ve no.
So, prefix sum is the best approach for it.
find the prefix sum of all the values.
Check if the prefixsum-goal exist in the hashmap. if yes
```

#### 38. [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/description/) || [Source code](56-merge-intervals.js)
```
Sort the array ascending orer according to start time.
Take two pointer approach. Initalize pointer 1st pointer k=0 and second pointer i=1.
i will iterate over the intervals and k will contains count of merged intervals.
From intervals[k] check for every intervals[i]. If end of the intervals[k]>=intervals[i], then assign intervals[k][end] = Math.max(intervals[i][1], intervals[k][1]).
at last return intervals.slice(0, k+1);
```

#### 39. [57. Insert Interval](https://leetcode.com/problems/insert-interval/description/?envType=daily-question&envId=2024-03-17) || [Source code](57-insert-intervals.js)
```
1. First insert all the intervals which ends before newintervals start
2. Iterate again and merge all the intervals which starts before or same time the start of the new intervals end. Then after updating the start and end time of overlapped intervals.
3. Push the overlapped interval in output [].
4. Now, push all the remaining interval to output[]
```