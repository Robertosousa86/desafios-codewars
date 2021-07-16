function isPangram(string) {
  const alpha = string.toLowerCase().match(/[a-z]/g);
  const letters = [...new Set(alpha)];

  return letters.length === 26;
}

module.exports = isPangram;
