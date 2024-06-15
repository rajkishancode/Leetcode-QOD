/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  // Create a map to store the order of elements in arr2
  const orderMap = new Map();
  arr2.forEach((num, i) => orderMap.set(num, i));

  // Sort arr1 based on the order in arr2
  arr1.sort((a, b) => {
    // If both numbers are in arr2, sort by their order
    if (orderMap.has(a) && orderMap.has(b)) {
      return orderMap.get(a) - orderMap.get(b);
    }
    // If only one number is in arr2, that one comes first
    if (orderMap.has(a)) return -1;
    if (orderMap.has(b)) return 1;
    // If neither number is in arr2, sort by their natural order
    return a - b;
  });
  return arr1;
};
