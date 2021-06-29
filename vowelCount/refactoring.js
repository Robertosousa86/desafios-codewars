function getCount(str) {
  return str.split('').filter((e) => 'aeiou'.includes(e)).length;
}

module.exports = getCount;
