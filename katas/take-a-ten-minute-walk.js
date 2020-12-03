// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  //insert brilliant code here
  let total = {};
  total.n = 0;
  total.s = 0;
  total.e = 0;
  total.w = 0;

  for (let i = 0; i < walk.length; i++) {
    total[walk[i]]++;
  }

  console.log(total);
  if (total.n === total.s && total.e === total.w && walk.length === 10) {
    return true;
  }

  return false;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
