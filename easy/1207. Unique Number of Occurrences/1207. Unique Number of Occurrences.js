/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const occuranceMap = new Map();
  arr.forEach((num) => {
    if (occuranceMap.has(num)) {
      occuranceMap.set(num, occuranceMap.get(num) + 1);
    } else {
      occuranceMap.set(num, 1);
    }
  });

  return occuranceMap.values();
};

let arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr));
