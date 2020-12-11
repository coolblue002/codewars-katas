// stop-gninnips-my-sdrow.js
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(words) {
  //TODO Have fun :)
  let wordsArray = words.split(' ');
  let inversedWord = '';
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > 4) {
      inversedWord = '';
      for (let j = wordsArray[i].length - 1; j >= 0; j--) {
        inversedWord += wordsArray[i][j];
      }
      wordsArray[i] = inversedWord;
    }
  }
  return wordsArray.join(' ');
}

// console.log(spinWords('Hey fellow warriors'));

module.exports = spinWords;
