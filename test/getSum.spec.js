const getSum = require('../sumOfNumbers/solution');

describe('getSum()', () => {
  it('should be return "a" our "b" when "a" and "b" are the same', () => {
    expect(getSum(-1, -1)).toBe(-1);
  });

  it('should be return 2 when sum -1 and 2', () => {
    expect(getSum(-1, 2)).toBe(2);
  });

  it('should be return -1 when sum -1 and 0', () => {
    expect(getSum(-1, 0)).toBe(-1);
  });
});
