/* Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0. */

let n = 10;

const resultado = (value) => {
    let somaTotal = 0;
    for(let i = value; i >= 0; i--) {
        somaTotal += i;
    }
    return somaTotal;
}

console.log(resultado(n));
