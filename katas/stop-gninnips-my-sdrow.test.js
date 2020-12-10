const spinWords = require('./stop-gninnips-my-sdrow');

describe('Spin the words around tests', () => {
  test('should be \'Hey wollef sroirraw\'', () => {
    expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
  });

  test('should be \'This is a test\'', ()=>{
    expect(spinWords('This is a test')).toBe('This is a test');
  });

  test('should be \'This is rehtona test\'', ()=>{
    expect(spinWords('This is another test')).toBe('This is rehtona test');
  });
});