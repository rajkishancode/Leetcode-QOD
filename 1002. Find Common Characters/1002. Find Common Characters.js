// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

/**
 * @param {string[]} words
 * @return {string[]}
 */

var commonChars = function(words) {
    
    let charFreqs = new Map();
    // initialize charFreqs with the first word
    
    for (let char of words[0]) {
        
        charFreqs.set(char, (charFreqs.get(char) || 0) + 1);
    }
    
    // iterate through the rest of the words
    for (let i = 1; i < words.length; i++) {
        
        let wordFreqs = new Map();
        
        for (let char of words[i]) {
            
            wordFreqs.set(char, (wordFreqs.get(char) || 0) + 1);
        }
        
        // update charFreqs with the intersection of wordFreqs
        for (let [char, freq] of charFreqs) {
            
            if (wordFreqs.has(char)) {
                charFreqs.set(char, Math.min(freq, wordFreqs.get(char)));
            }
            
            else {
                
                charFreqs.delete(char);
            }
        }
    }
    
    // convert charFreqs to an array of characters
    let result = [];
    
    for (let [char, freq] of charFreqs) {
        
        for (let i = 0; i < freq; i++) {
            
            result.push(char);
        }
    }

    return result;
};
console.log(commonChars(["bella", "label", "roller"]));
