function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError('Range must be between 0 and 12')

  let result = 1;
  for (i = 0; i < n; i++) {
    result += result * i;
  }
  return result;
}