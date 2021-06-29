const disemvowels = require('../disemvowelTrolls/solution');

describe('disemvowels()', () => {
  it('should be return the string without vowels', () => {
    expect(disemvowels('Juba')).toBe('Jb');
  });
});
