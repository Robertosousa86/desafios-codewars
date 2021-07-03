const isIsogram = require('../isograms/solution');

describe('isIsogram', () => {
  it('should be return true if string are a isogram', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

  it('should be return true if string are a isogram', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it('should be return false if string contains a letter case', () => {
    expect(isIsogram('moOse')).toBe(false);
  });
});
