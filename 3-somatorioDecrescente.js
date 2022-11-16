let n = 10;

const resultado = (value) => {
    let somaTotal = 0;
    for(let i = value; i >= 0; i--) {
        somaTotal += i;
    }
    return somaTotal
}

console.log(resultado(n));
