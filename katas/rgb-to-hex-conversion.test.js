const rgb = require('./rgb-to-hex-conversion');

describe('Convert from rgb to hex tests', () => {
  test('should be FFFFFF', ()=> {
    expect(rgb(255, 255, 255)).toBe('FFFFFF');
  });
  test('should be FFFFFF', ()=> {
    expect(rgb(255, 255, 300)).toBe('FFFFFF');
  });
  test('should be 000000', ()=>{
    expect(rgb(0, 0, 0)).toBe('000000');
  });
  test('should be 9400D3', ()=>{
    expect(rgb(148, 0, 211)).toBe('9400D3');
  });
});