/* Nesse desafio, dados dois números, verifique se eles são iguais. Caso sejam, retorne "Sao iguais!”. Caso contrário, retorne "Nao sao iguais!” sem as aspas. */

let number1 = 1;
let number2 = 3;

function saoIguais(a, b) {
  if(a === b) return "Sao iguais!";
  return "Nao sao iguais!";
}u

console.log(saoIguais(number1, number2));