const getCount = require('../vowelCount/solution');

describe('getCount()', () => {
  it('should be return zero', () => {
    expect(getCount('My pyx')).toBe(0);
  });

  it('should be return 3 when the string received are "cultura"', () => {
    expect(getCount('cultura')).toBe(3);
  });

  it('should be return 5 when the string received are "abracadabra"', () => {
    expect(getCount('abracadabra')).toBe(5);
  });
});
