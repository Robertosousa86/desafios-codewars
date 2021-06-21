function count(string) {
  const obj = {};

  string.split('').filter((e) => (obj[e] = obj[e] + 1 || 1));

  return obj;
}