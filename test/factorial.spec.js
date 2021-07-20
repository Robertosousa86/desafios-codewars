const factorial = require('../factorial/solution');

describe('factorial()', () => {
  it('should be return 120 as a factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });

  it('should be return 1 as a factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });
});
