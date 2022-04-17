
function anagrams(word, words) {
  let newWord = word.split('').sort();
  let result = newWord.filter((element, index) => index === newWord.indexOf(element));
  console.log(result);
  let placeholder =[];
  let placeholerResult = '';
  let final = words.filter(element => {
    placeholder = element.split('').sort();
    placeholerResult = placeholder.filter((element, index) => index === newWord.indexOf(element));
    console.log(placeholerResult);
    return placeholerResult.toString() === result.toString();
  })
    console.log(final);
}

let word = 'racer';
let words = ['crazer', 'carer', 'racar', 'caers', 'racer'];

anagrams(word, words);