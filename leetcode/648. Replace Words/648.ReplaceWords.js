/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

var replaceWords = function (dictionary, sentence) {
  sentence = sentence.split(" ");

  //   return "hi";
  //1.loop over dic
  for (let i = 0; i < dictionary.length; i++) {
    //2.loop over sentence
    for (let j = 0; j < sentence.length; j++) {
      //3. march first word of dic with each word of sentence using includes
      if (sentence[j].startsWith(dictionary[i])) {
        //4. if  includes replace that word with dic word
        sentence[j] = dictionary[i];
        // break;
      }
    }
  }
  //5. make sentence back to string using join("")
  return sentence.join(" ");
};

// Example 1:
// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"
console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"));
