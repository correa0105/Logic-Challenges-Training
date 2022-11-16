/* Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N. */

let offset = 5;
let limit = 20;

let numeroEntrada = offset;
let somaMultiplos = 0;

for (offset; offset <= limit; offset++) {
    if(offset % numeroEntrada === 0) somaMultiplos += offset
}

console.log(somaMultiplos)