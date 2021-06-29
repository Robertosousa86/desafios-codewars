function disemvowels(str) {
  const regex = /[aeiou]/gi;
  const withOutVowels = str.replace(regex, '');

  return withOutVowels;
}

module.exports = disemvowels;
