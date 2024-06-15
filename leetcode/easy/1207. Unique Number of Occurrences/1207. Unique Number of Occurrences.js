/**
 * @param {number[]} arr
 * @return {boolean}
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const frequencyMap = new Map();

  arr.forEach((num) => {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 0);
    }
  });

  const occuranceSet = new Set();
  for (let count of frequencyMap.values()) {
    if (occuranceSet.has(count)) {
      return false;
    }

    occuranceSet.add(count);
  }
  return true;
};

let arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr));
