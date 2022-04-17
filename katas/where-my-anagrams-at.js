
//https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

// function anagrams(word, words) {
//   let newWord = word.split('').sort();
//   let result = newWord.filter((element, index) => index === newWord.indexOf(element));
//   // console.log('the word array is ' + result);
//   let placeholder =[];
//   let placeholerResult = '';
//   let final = words.filter(element => {
//     placeholder = element.split('').sort();
//     placeholerResult = placeholder.filter((element, index) => index === placeholder.indexOf(element));
//     // console.log('the array for element ' + element + ' is ' + placeholder);
//     return placeholerResult.toString() === result.toString();
//   })
//     // console.log(final);
//     console.log(final);
// }

let gigel = function (y) {
  return y.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return gigel(x) === gigel(word);
  });
}

let word = 'laser';
let words = ['lazing', 'lazy',  'lacer'];

anagrams(word, words);