function multiTable(number) {
  // good luck
  let table = '';
  for (let i = 1; i <= 10; i++){
    if (i !== 10) {
      table = table + i + ' * ' + number + ' = '  i * number + '\n';
    } else {
      table = table + i + ' * ' + number + ' = '  i * number;
    }
  }
  return table;
}

console.log(multiTable(5));