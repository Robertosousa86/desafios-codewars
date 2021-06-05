function filter_list(l) {
  // Retorna um novo array filtrando as strings
  return l.filter((e) => typeof e !== 'string');
  // return l.filter((e) => typeof e === 'number');
}
module.exports = filter_list;
