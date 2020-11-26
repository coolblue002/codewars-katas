// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

function multiTable(number) {
  // good luck
  let table = '';
  for (let i = 1; i <= 10; i++){
    if (i !== 10) {
      table += i.toString() + ' * ' + number.toString() + ' = ' + (i * number).toString() + '\n';
    } else {
      table += i.toString() + ' * ' + number.toString() + ' = ' + (i * number).toString();
    }
  }
  return table;
}

console.log(multiTable(5));