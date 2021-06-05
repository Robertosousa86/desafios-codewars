function filter_list(l) {
  var filteredList = [];
  for (var i = 0; i < l.length; i++) {
    if (l[i].constructor.name !== 'String') {
      filteredList.push(l[i]);
    }
  }
  return filteredList;
}

module.exports = filter_list;
