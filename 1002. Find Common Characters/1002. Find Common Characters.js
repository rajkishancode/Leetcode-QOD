// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let charCount = {};
  for (let char of words[0]) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  let wordCount;
  for (let i = 0; i < words.length; i++) {
    wordCount = {};
    for (let char of words[i]) {
      wordCount[char] = (wordCount[char] || 0) + 1;
    }
  }
  console.log(charCount);
  console.log(wordCount);
};

console.log(commonChars(["bella", "label", "roller"]));
