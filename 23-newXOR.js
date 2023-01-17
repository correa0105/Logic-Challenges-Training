function maxXOR(arr, queries) {
    let arrayDoisMaioresXOR = [];
    let maiorAtual = "0";

    for (let i = 0; i < queries.length; i++) {
        let binarioQuerieAtual = converteParaBinario(queries[i]);
        let novoBinario = "";

        for (let k = 0; k < arr.length; k++) {
            let binarioArrayAtual = converteParaBinario(arr[k]);

            if (binarioArrayAtual.length === binarioQuerieAtual.length) {
                for (let j = 0; j < binarioArrayAtual.length; j++) {
                    if (binarioArrayAtual[j] != binarioQuerieAtual[j]) {
                        novoBinario += "1";
                    } else {
                        if (binarioArrayAtual[j] === binarioQuerieAtual[j]) {
                            novoBinario += "0"
                        }
                    }
                }
            } else {
                if(binarioArrayAtual.length > binarioQuerieAtual.length) {
                    let diferencaTamanho = binarioArrayAtual.length - binarioQuerieAtual.length
                    for(let z = 0; z < diferencaTamanho; z++) {
                        binarioQuerieAtual = "0" + binarioQuerieAtual
                    }
                    for (let j = 0; j < binarioArrayAtual.length; j++) {
                        if (binarioArrayAtual[j] != binarioQuerieAtual[j]) {
                            novoBinario += "1";
                        } else {
                            if (binarioArrayAtual[j] === binarioQuerieAtual[j]) {
                                novoBinario += "0"
                            }
                        }
                    }
                } else {
                    let diferencaTamanho = binarioQuerieAtual.length - binarioArrayAtual.length;
                    for(let z = 0; z < diferencaTamanho; z++) {
                        binarioArrayAtual = "0" + binarioArrayAtual;
                    }
                    for (let j = 0; j < binarioArrayAtual.length; j++) {
                        if (binarioArrayAtual[j] != binarioQuerieAtual[j]) {
                            novoBinario += "1";
                        } else {
                            if (binarioArrayAtual[j] === binarioQuerieAtual[j]) {
                                novoBinario += "0"
                            }
                        }
                    }
                }
            }

            let decimalXORAtual = converteParaDecimal(novoBinario)

            if (Number(decimalXORAtual) > Number(maiorAtual)) {
                maiorAtual = decimalXORAtual
            }

            novoBinario = "";
        }

        arrayDoisMaioresXOR.push(maiorAtual)
        maiorAtual = "0"
    }


    return console.log(arrayDoisMaioresXOR);
}

const converteParaBinario = (decimal) => {
    let contador = decimal
    let valorBinario = "";

    while (contador > 0) {
        let resto = contador % 2
        if (resto === 1) {
            valorBinario = "1" + valorBinario
        }
        if (resto === 0) {
            valorBinario = "0" + valorBinario
        }
        contador = Math.floor(contador / 2)
    }

    if (decimal === 0) {
        valorBinario = "0000"
    }

    let diferencaDeBinario = 4 - valorBinario.length;

    for (let i = 0; i < diferencaDeBinario; i++) {
        valorBinario = "0" + valorBinario
    }

    return valorBinario
}

const converteParaDecimal = (binario) => {
    let novoContador = 0;
    let convertidoParaDecimal = 0;

    for (let i = binario.length - 1; i >= 0; i--) {
        if (binario[i] === "1") {
            convertidoParaDecimal += Math.pow(2, novoContador)
        }
        novoContador++
    }

    return convertidoParaDecimal
}

maxXOR([71615901, 446920302, 311451718, 143049466, 46472344], [60732825, 663764238, 896304198, 392205698])