function minimumSwaps(arr) {
    let quantidadeDeSwaps = 0;
    let index = 0;
    console.log(arr)
    while(index < arr.length) {
        if(arr[index] != index + 1){
            let salvarNumero = arr[index];  //Armazenou o valor do laço
            arr[index] = arr[arr[index] - 1];   //Adiciona o valor que esta na posição do numero que deveria estar, na posicao do laço
            arr[salvarNumero-1] = salvarNumero;     //Adiciona o numero correto na posicao correta
            quantidadeDeSwaps++;    //Soma uma troca
        } else {
            index++
        }

    }
    
    return quantidadeDeSwaps
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))

//