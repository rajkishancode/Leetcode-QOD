/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let sortedHeight = [...heights].sort((a, b) => a - b);
  let changeCount = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeight[i]) {
      changeCount++;
    }
  }
  return changeCount;
};
