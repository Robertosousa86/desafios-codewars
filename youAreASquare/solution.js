function isSquare(n) {
  return Number.isInteger(Math.sqrt(n)) ? true : false;
}

console.log(isSquare(25));

module.exports = isSquare;
