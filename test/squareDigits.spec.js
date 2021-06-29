const squareDigits = require('../squareEveryDigit/refactoring');

describe('squareDigits()', () => {
  it('should be return the square of all digits.', () => {
    expect(squareDigits(3212)).toBe(9414);
  });

  it('should be return 49125 when the parameter are 2315.', () => {
    expect(squareDigits(2315)).toBe(49125);
  });

  it('should be return 1 when the parameter are 1.', () => {
    expect(squareDigits(1)).toBe(1);
  });
});
