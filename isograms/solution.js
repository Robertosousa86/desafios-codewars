function isIsogram(str) {
  [...str.toLowerCase()].sort();

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return false;
  }

  return true;
}

module.exports = isIsogram;
