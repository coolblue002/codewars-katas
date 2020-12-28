// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b) {
  // complete this function
  const translator = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  function minMax(a) {
    if (a < 0) {
      return 0;
    }
    if (a > 255) {
      return 255;
    }
    return a;
  }
  r = minMax(r);
  g = minMax(g);
  b = minMax(b);

  function toHex(a) {
    return translator[Math.floor(a / 16)] + translator[(a % 16)];
  }

  return toHex(r) + toHex(g) + toHex(b);
}

module.exports = rgb;
