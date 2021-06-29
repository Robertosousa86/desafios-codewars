function squareDigits(num) {
  return +Array.from(num.toString(), (e) => e * e).join('');
}
