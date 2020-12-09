const isPrime = require('./is-a-number-prime');

test('checks if 5 is prime number', () => {
  expect(isPrime(5)).toBe(true);
});

test('checks if 6 is prime number', () => {
  expect(isPrime(6)).toBe(false);
});

test('checks if 5 is prime number', () => {
  expect(isPrime(11)).toBe(true);
});
