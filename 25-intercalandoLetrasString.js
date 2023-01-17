function newPassword(a, b) {
    let tamanhoDaString = a.length + b.length + 25000;

    let palavraAtual = "a";
    let novaString = "";
    let contador = 0;
    let posicaoPalavraA = 0;
    let posicaoPalavraB = 0;

    while (contador <= tamanhoDaString) {
        if (palavraAtual === "a") {
            if (a[posicaoPalavraA] != undefined) {
                novaString += a[posicaoPalavraA];
                palavraAtual = "b";
                posicaoPalavraA++;
                contador++;
            } else {
                palavraAtual = "b";
                contador++;
            }
        } else if (palavraAtual === "b") {
            if (b[posicaoPalavraB] != undefined) {
                novaString += b[posicaoPalavraB];
                palavraAtual = "a";
                posicaoPalavraB++;
                contador++;
            } else {
                palavraAtual = "a";
                contador++;
            }
        }
    }

    console.log(tamanhoDaString)
    console.log(novaString);
    console.log(novaString.length)
}

newPassword("rrbzzzunqdiosqhpbwmxhhvcarywjgteqvjrzoxxhynhfqljrqqecekhcqpwmuuqneqilwcbgfajpkrtmarb", "yjohtvolifmagadoyarqzqwqckoqipultdukcgambmhznuncdirpnbczvwuyzclqj");
