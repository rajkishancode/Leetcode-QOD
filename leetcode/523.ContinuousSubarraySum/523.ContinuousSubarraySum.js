/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var checkSubarraySum = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum % k === 0) {
        return true;
      }
    }
  }
  return false;
};

//efficient approach
var checkSubarraySum = function (nums, k) {
  const prefix_mod = new Map();
  prefix_mod.set(0, -1); // Initialize with remainder 0 at index -1

  let current_sum = 0;

  for (let i = 0; i < nums.length; i++) {
    current_sum += nums[i];
    let remainder = current_sum % k;

    // Adjust negative remainders to be in the range [0, k-1]
    if (remainder < 0) {
      remainder += k;
    }

    if (prefix_mod.has(remainder)) {
      // Check if the subarray length is at least 2
      if (i - prefix_mod.get(remainder) > 1) {
        return true;
      }
    } else {
      // Store the first occurrence of the remainder
      prefix_mod.set(remainder, i);
    }
  }

  return false; // No valid subarray found
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));

// Example 1:

// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
// Example 2:

// Input: nums = [23,2,6,4,7], k = 6
// Output: true
// Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
// Example 3:

// Input: nums = [23,2,6,4,7], k = 13
// Output: false
