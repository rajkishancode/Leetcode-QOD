/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let start = 0;
  let end = 0;
  let result = 0;
  s.toLowerCase();
  for (let i = 0; i < s.length - 1; i++) {
    let sumOfString = s.charCodeAt(i) - s.charCodeAt(i + 1);
    result += Math.abs(sumOfString);
  }
  return result;
};


console.log(scoreOfString("hello"))