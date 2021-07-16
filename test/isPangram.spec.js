// const isPangram = require('../detectPangram/solution');
const isPangram =  require('../detectPangram/refactoring')
describe('isPangram()', () => {
  it('should be return true', () => {
    expect(isPangram('The quick brown fox jumps over the lazy dog.')).toBe(
      true
    );
  });

  it('should be return false', () => {
    expect(isPangram('it is not a pangram...')).toBe(false);
  });
});
