/* Neste desafio você deverá construir uma função que recebe uma String e identifique se a mesma é um palíndromo, ou seja, se a String é igual a ela mesma invertida. */

let resultado = "radar";
let palavraToArray = resultado.split("");

palavraToArray.reverse();

let arrayToPalavra = palavraToArray.join("")

function checaPalindromo(palavra, palavraInvertida) {
  if(palavra === palavraInvertida) return "TRUE";
  return "FALSE";
}

console.log(checaPalindromo(resultado, arrayToPalavra));