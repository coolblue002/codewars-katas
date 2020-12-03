function tribonacci(signature, n) {
  //your code here
  let result = [];

  switch (n) {
    case 0:
      return [];
    case 1:
      return [signature[0]];
    case 2:
      return [signature[0], signature[1]];
    case 3:
      return [signature[0], signature[1], signature[2]];
  }

  result = signature;

  for (let i = 3; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2] + result[i - 3];
  }

  return result;
}

console.log(tribonacci([1, 2, 3], 4));

console.log('Answer is: [1,1,1,3,5,9,17,31,57,105]');
