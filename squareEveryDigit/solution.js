function squareDigits(num) {
  const digits = num.toString().split('');

  const squareDigits = digits.map((e) => e * e);

  const joinNumbers = squareDigits.join('');

  return parseInt(joinNumbers);
}

module.exports = squareDigits;
