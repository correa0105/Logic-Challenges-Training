function fourthBit(number) {
    let contador = number
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

    let stringToArray = valorBinario.split("").reverse();


    console.log(stringToArray[3])
}

fourthBit(23)