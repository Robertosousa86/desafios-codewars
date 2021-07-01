const isIsogram = require('../isograms/solution');

describe('isIsogram', () => {
  it('should be return true if string area isogram', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });
});
