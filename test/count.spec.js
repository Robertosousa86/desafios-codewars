// const count = require('../countCharactersInYourString/solution');
const count = require('../countCharactersInYourString/rafactoring');

describe('count()', () => {
  it('should  be return { a: 2, b: 1 } when the string is "aba" ', () => {
    expect(count('aba')).toStrictEqual({ a: 2, b: 1 });
  });

  it('should  be return { r: 2, o: 2, b: 1, e: 1, t: 1 } when the string is "roberto" ', () => {
    expect(count('roberto')).toStrictEqual({ r: 2, o: 2, b: 1, e: 1, t: 1 });
  });

  it('should  be return {} when the string is empty ', () => {
    expect(count('')).toStrictEqual({});
  });
});
