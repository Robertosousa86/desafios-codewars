function getSum(a, b) {
  if (a === b) {
    return a || b;
  } else {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let result = 0;

    for (min; min <= max; min++) {
      result += min;
    }
    return result;
  }
}

module.exports = getSum;
