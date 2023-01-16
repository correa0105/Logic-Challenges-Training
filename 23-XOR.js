function definirMaximoXOR (arr, queries) {
    const converteParaBinario = (decimal) => {
        let contador = decimal
        let valorBinario = "";
    
        while (contador > 0) {
            let resto = contador%2
            if(resto === 1) {
                valorBinario = "1" + valorBinario
            }
            if(resto === 0) {
                valorBinario = "0" + valorBinario
            }
            contador = Math.floor(contador/2)
        }

        if(decimal === 0) {
            valorBinario =+ "0"
        }
    
        return valorBinario
    }

    const converteParaDecimal = (binario) => {
        let novoContador = 0;
        let convertidoParaDecimal = 0;
    
        for(let i = binario.length - 1; i >= 0; i--) {
            if(binario[i] === "1") {
                convertidoParaDecimal += Math.pow(2, novoContador)
            }
            novoContador++
        }
    
        return convertidoParaDecimal
    }



    let binarioPComparar = converteParaBinario(queries);
    let binariosList = [];
    
    for(let i = 0; i < arr.length; i++) {
        let novoBinario = "";
        let binarioDoArrayPComparar = converteParaBinario(arr[i])

        if(binarioDoArrayPComparar.length >= binarioPComparar.length) {
            for(let k = 0; k < binarioDoArrayPComparar.length; k++) {
                if(binarioPComparar[k] === undefined) {
                    binarioPComparar = "0" + binarioPComparar;
                }

                if(binarioDoArrayPComparar[k] != binarioPComparar[k]) {
                    novoBinario += "1"
                }
                if(binarioDoArrayPComparar[k] === binarioPComparar[k]) {
                    novoBinario += "0"
                }
            }
        } else {
            for(let k = 0; k < binarioPComparar.length; k++) {
                if(binarioDoArrayPComparar[k] === undefined) {
                    binarioDoArrayPComparar = "0" + binarioDoArrayPComparar;
                }

                if(binarioDoArrayPComparar[k] != binarioPComparar[k]) {
                    novoBinario += "1"
                }
                if(binarioDoArrayPComparar[k] === binarioPComparar[k]) {
                    novoBinario += "0"
                }
            }
        }

        binariosList.push(novoBinario)
        novoBinario = "";
    }

    let decimalList = [];

    binariosList.forEach(value => {
        decimalList.push(converteParaDecimal(value))
    })

    const maxValue = decimalList.reduce((prev, current) => { 
        return prev > current ? prev : current; 
    });

    console.log(binariosList)
    console.log(decimalList)

    return console.log(maxValue)
}

definirMaximoXOR([5, 1, 7, 4, 3], 0)
