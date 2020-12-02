// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p) {
  // ...
  let k, preK;

  // calculate k
  preK = 0;
  nString = n.toString();
  for (let i = 0; i < n.toString().length; i++) {
    preK += Math.pow(nString[i], p + i);
  }
  k = preK / n;

  if (Number.isInteger(k)) {
    return k;
  } else {
    return -1;
  }
}

console.log(digPow(89, 1));
