// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

function isPrime(num) {
  //TODO
  if (Number.isInteger(Math.sqrt(num))) {
    return false;
  }
  if (num <= 0) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (Number.isInteger(num / i)) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime;
