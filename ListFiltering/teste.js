const assert = require('assert');
const filter_list = require('./solution');

assert.deepStrictEqual(
  filter_list([1, 2, 3, 'a']),
  [1, 2, 3],
  console.log('should be return a new list with the strings filtered out.')
);
