function convertDecimal (n) {

    let contador = n
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

    let diferenca = 32 - valorBinario.length
    let zeroAEsquerda = ""

    for(let i = 0; i < diferenca; i++) {
        zeroAEsquerda += "0"
    }

    const binario32Bits = zeroAEsquerda.concat(valorBinario);

    let binario32BitsInvertido = "";
    
    for(let i = 0; i < binario32Bits.length; i++) {
        if(binario32Bits[i] === "0") {  
            binario32BitsInvertido += "1"
        }
        if(binario32Bits[i] === "1") {
            binario32BitsInvertido += "0"
        }
    }

    let novoContador = 0;
    let convertidoParaDecimal = 0;

    for(let i = binario32BitsInvertido.length - 1; i >= 0; i--) {
        if(binario32BitsInvertido[i] === "1") {
            convertidoParaDecimal += Math.pow(2, novoContador)
        }
        novoContador++
    }
    
    return convertidoParaDecimal
}

console.log(convertDecimal(2));