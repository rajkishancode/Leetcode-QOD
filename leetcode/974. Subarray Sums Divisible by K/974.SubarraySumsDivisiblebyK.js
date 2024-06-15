/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraysDivByK = function (nums, k) {
  let remainderCount = new Map();
  remainderCount.set(0, 1);
  let prefixSum = 0;
  let result = 0;

  for (let num of nums) {
    prefixSum += num;
    let remainder = prefixSum % k;

    //handle negative numbers
    if (remainder < 0) {
      remainder += k;
    }
    if (remainderCount.has(remainder)) {
      result += remainderCount.get(remainder);
    }

    //update remainder count
    remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
  }
  return result;
};

// Example usage
let nums = [4, 5, 0, -2, -3, 1];
let k = 5;
console.log(subarraysDivByK(nums, k)); // Output: 7
