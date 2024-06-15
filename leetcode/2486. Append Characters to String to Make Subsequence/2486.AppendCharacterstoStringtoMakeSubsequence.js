/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let sTrack = 0;
  let tTrack = 0;

  // Iterate over s and t
  while (sTrack < s.length && tTrack < t.length) {
    if (s[sTrack] === t[tTrack]) {
      tTrack++;
    }
    sTrack++;
  }

  // Remaining characters in t that are not matched
  return t.length - tTrack;
};
