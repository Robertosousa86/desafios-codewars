const disemvowels = require('../disemvowelTrolls/refactoring');

describe('disemvowels()', () => {
  it('should be return the string without vowels', () => {
    expect(disemvowels('Juba')).toBe('Jb');
  });
});
