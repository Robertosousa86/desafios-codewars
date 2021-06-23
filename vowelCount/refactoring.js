function getCount(str) {
  return str.split('').filter((e) => 'aeiou'.includes(e)).length;
}

console.log(getCount('juba'));

module.exports = getCount;
