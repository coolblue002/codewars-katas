// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
  // TODO: Program me
  let necessaryLength = arr.length;
  // console.log(necessaryLength);
  for(let i = 0; i < necessaryLength; i++) {
    console.log(arr);
    console.log(i);
    if (arr[i] === 0) {
      console.log('acu');
      arr.push(0);
      arr.splice(i, 1);
      i = i - 1;
    } 
  }
  return arr;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

module.exports = moveZeros;