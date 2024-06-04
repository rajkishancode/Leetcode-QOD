/**
 * @param {string} s
 * @return {number}
 */

/*
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

//note for it to be palindrome
var longestPalindrome = function (s) {
  let palindromeLength = 0;
  const charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1; //storing count of each character
    if (charCount[char] % 2 === 0) palindromeLength += 2; // adding 2 to length if length of char is even
  }

  return palindromeLength < s.length ? palindromeLength + 1 : palindromeLength;
};

console.log(longestPalindrome("abccccdd"));

/*
 To implement the longestPalindrome function in JavaScript,
 we need to understand that a palindrome reads the same forwards and backwards.
 We can form a palindrome by using pairs of characters and at most one character in the center
*/
