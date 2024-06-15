/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  // Step 1: Sort the array
  nums.sort((a, b) => a - b);

  // Step 2: Initialize variables
  let moves = 0;
  // Start from the second element
  for (let i = 1; i < nums.length; i++) {
    // If the current element is not greater than the previous one, it needs to be incremented
    if (nums[i] <= nums[i - 1]) {
      // Calculate the increment needed to make nums[i] unique
      let increment = nums[i - 1] - nums[i] + 1;
      // Increment the current element
      nums[i] += increment;
      // Update the total moves counter
      moves += increment;
    }
  }

  return moves;
};

console.log(minIncrementForUnique([1, 2, 2]));

// Example 1:

// Input: nums = [1,2,2]
// Output: 1
// Explanation: After 1 move, the array could be [1, 2, 3].
// Example 2:

// Input: nums = [3,2,1,2,1,7]
// Output: 6
// Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
// It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
