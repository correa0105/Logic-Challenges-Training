/* Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11 */

let n = 12;

let arrayList = [];
let resultado = 0;

while (n >= 0) {
    arrayList[n] = n;
    n--;
}

arrayList.shift();
arrayList.reverse();

if (arrayList.length >= 4) {
    resultado = Math.floor((arrayList[0] * arrayList[1]) / arrayList[2])
    resultado = resultado + arrayList[3]
    arrayList.splice(0, 4);

    while (arrayList.length >= 4) {
        resultado = resultado - Math.floor((arrayList[0] * arrayList[1]) / arrayList[2])
        resultado = resultado + arrayList[3]
        arrayList.splice(0, 4)
    }

    if (arrayList.length == 3) {
        resultado = resultado - Math.floor((arrayList[0] * arrayList[1]) / arrayList[2])
        arrayList.splice(0, 2)
    }

    if (arrayList.length == 2) {
        resultado = resultado - Math.floor((arrayList[0] * arrayList[1]))
        arrayList.splice(0, 2)
    }

    if (arrayList.length == 1) {
        resultado = resultado - Math.floor(arrayList[0])
        arrayList.splice(0, 2)
    }
}

console.log(resultado)