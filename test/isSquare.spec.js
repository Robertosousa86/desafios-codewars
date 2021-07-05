const iSquare = require('../youAreASquare/solution');

describe('isSquare()', () => {
  it('should be return true if n is a perfect square', () => {
    expect(iSquare(4)).toBe(true);
  });

  it('should be return false if n is a negative number', () => {
    expect(iSquare(-4)).toBe(false);
  });

  it('should be return true if n is 25', () => {
    expect(iSquare(25)).toBe(true);
  });

  it('should be return false if n is 90', () => {
    expect(iSquare(90)).toBe(false);
  });
});
