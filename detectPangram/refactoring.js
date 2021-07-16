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

console.log(isPangram('Bancos fúteis pagavam-lhe queijo, whisky e xadrez.'));

module.exports = isPangram;
