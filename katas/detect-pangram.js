// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string) {
  //...
  string = string.toLowerCase();
  let reallyIsPangram = true;
  for (let i = 97; i < 123; i++) {
    // console.log(String.fromCharCode(i));
    if (string.indexOf(String.fromCharCode(i)) === -1) {
      reallyIsPangram = false;
    }
  }
  return reallyIsPangram;
}

console.log(isPangram('T'));
