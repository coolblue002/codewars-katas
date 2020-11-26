// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
  // ...
  let count;
  let encodedWord = '';
  for (let i = 0; i < word.length; i++) {
    count = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[i].toLowerCase() === word[j].toLowerCase()) {
        count++;
      }
    }
    if (count === 1) {
      encodedWord += '(';
    } else {
      encodedWord += ')';
    }
  }
  return encodedWord;
}

console.log(duplicateEncode('Success'));