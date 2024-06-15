/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  // If the hand size is not a multiple of groupSize, it cannot be split into groups
  if (hand.length % groupSize !== 0) {
    return false;
  }

  // Sort the hand to arrange numbers in ascending order
  hand.sort((a, b) => a - b);

  // Use a map to count occurrences of each number
  const countMap = new Map();
  for (const num of hand) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // Process the numbers
  for (const num of hand) {
    if (countMap.get(num) > 0) {
      // Only process if there are remaining numbers
      // Try to form a group of groupSize starting with num
      for (let i = 0; i < groupSize; i++) {
        const currentNum = num + i;
        if (countMap.get(currentNum) > 0) {
          countMap.set(currentNum, countMap.get(currentNum) - 1);
        } else {
          return false;
        }
      }
    }
  }

  return true;
};

// Example usage
const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
const groupSize = 3;
console.log(isNStraightHand(hand, groupSize)); // Output should be true
