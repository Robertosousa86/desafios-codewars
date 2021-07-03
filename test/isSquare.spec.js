const iSquare = require('../youAreASquare/solution');

describe('isSquare()', () => {
  it('should be return true if n is a perfect square', () => {
    expect(iSquare(4)).toBe(true);
  });
});
