function countPositivesSumNegatives(input) {
  // console.log(input);
  if (input === undefined) {
    return [];
  }
  if (input === null) {
    return [];
  }
  if (input.length == 0) {
    return [];
  }
  let final = [0, 0];
  for (let i = 0; i < input.length; i++)
    {
      if (input[i] > 0) {
        final[0]++;
      }
      else if (input[i] < 0)
        {
          final[1] += input[i];
        }
    }
  return final;
}

console.log(countPositivesSumNegatives([]));