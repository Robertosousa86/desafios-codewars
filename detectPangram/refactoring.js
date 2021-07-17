function isPangram(string) {
  return [...'abcdefghijklmnopqrstuvwxyz'].every((e) =>
    string.toLowerCase().includes(e)
  );
}

/* retorna as letras em ordem alfabética
function isPangram(string) {
  return [...'abcdefghijklmnopqrstuvwxyz'].filter((e) =>
    string.toLowerCase().includes(e)
  );
}

*/

module.exports = isPangram;
