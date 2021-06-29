function squareDigits(num) {
  return +Array.from(num.toString(), (n) => n * n).join('');
}

module.exports = squareDigits;
