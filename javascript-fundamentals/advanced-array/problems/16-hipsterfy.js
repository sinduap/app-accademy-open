/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function (word) {
  // Your code here
  const idxLastVowel = word
    .split('')
    .reduce(
      (idxLastVowel, char, i) =>
        'aeiou'.includes(char.toLowerCase()) ? i : idxLastVowel,
      -1
    );

  return idxLastVowel < 0
    ? word
    : word.slice(0, idxLastVowel) + word.slice(idxLastVowel + 1);
};

let hipsterfy = function (sentence) {
  // Your code here
  return sentence.split(' ').map(removeLastVowel).join(' ');
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hipsterfy;
} catch (e) {
  module.exports = null;
}
