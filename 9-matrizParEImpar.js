/* Seu Raimundo tem uma lista de números. Porém, ele gosta muito das coisas em ordem e deseja que você o ajude a construir um programa que pegue todas as listas dele, uma de cada vez, e coloque os inteiros pares no início e os inteiros ímpares no final. */

let arr = [4, 3, 1, 2];

let arrVazio = [];

arr.forEach(element => (element%2 === 0) ? arrVazio.unshift(element) : arrVazio.push(element));

console.log(arrVazio);