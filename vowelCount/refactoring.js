function getCount(str) {
  return [...str].filter((e) => 'aeiou'.includes(e)).length;
}
