function getSum(a, b) {
  const n = Math.abs(a - b) + 1;

  return ((a + b) * n) / 2;
}

module.exports = getSum;
