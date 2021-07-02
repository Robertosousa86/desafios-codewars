function count(string) {
  const obj = {};

  [...string].filter((e) => (obj[e] = obj[e] + 1 || 1));

  return obj;
}
