// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

//rewrite usign the reduce method

function findEvenIndex(arr) {
  //Code goes here!
  let leftSum, rightSum;
  for (let i = 0; i < arr.length; i++) {
    leftSum = 0;
    rightSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
