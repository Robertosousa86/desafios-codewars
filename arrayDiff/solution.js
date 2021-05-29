/* O método filter() cria um novo array com todos os
   elementos que passaram no teste implementado pela função fornecida.
 *
 * O método includes() determina se um array contém um 
   determinado elemento, retornando true ou false apropriadamente.
 */

function arrayDiff(a, b) {
  return a.filter((element) => !b.includes(element));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
