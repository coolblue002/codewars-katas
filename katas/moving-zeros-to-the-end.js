// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
  // TODO: Program me
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = i; j <arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr[arr.length - 1] = 0;
      i = i - 1;
    }
  }
  return arr;
}

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
console.log(moveZeros([9,0,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]));
console.log(moveZeros(["a",0,"b","c","d",1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]));
console.log(moveZeros(["a",0,"b",null,"c","d",1,false,1,3,[],1,9,0,{},0,9,0,0,0,0,0,0,0]));

module.exports = moveZeros;