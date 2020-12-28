const moveZeros = require('./moving-zeros-to-the-end');

describe('tests if all 0s are moved to the end of the array', ()=>{
  test('should be [false,1,1,2,1,3,"a",0,0]', ()=>{
    expect(moveZeros([false,1,0,1,2,0,1,3,"a"])).toEqual([false,1,1,2,1,3,"a",0,0]);
  });
  test('should be ["gigi", 3, "cel", "mai", true, 0, 0]', ()=> {
    expect(moveZeros(["gigi", 0, 3, "cel", 0, "mai", true])).toEqual(["gigi", 3, "cel", "mai", true, 0, 0]);
  });
});