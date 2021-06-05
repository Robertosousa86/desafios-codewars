const assert = require('assert');
const filter_list = require('./solution');

assert.deepStrictEqual(
  filter_list([1, 2, 'aasf', '1', '123', 123]),
  [1, 2, 123],
  console.log('Test Ok: Should be return a new list with the strings filtered out.')
);
