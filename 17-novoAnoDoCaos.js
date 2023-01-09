const arr = [1, 2, 5, 3, 7, 8, 6, 4];

function minimoDeSubornos(q) {
    let quantidadeDeSubornos = 0;   //Contador de subornos

    for (let i = 0; i < q.length; i++) {    //Laço de repetição do tamanho do arrau
        
        const posicaoOriginal = q[i] - 1;       //Posição original de cada item do array
        const diferencaDaPosicaoOriginal = posicaoOriginal - i;  //A diferença de posições

        if(diferencaDaPosicaoOriginal > 2) {                     //Se a diferença for maior que 2
            return console.log("Too chaotic");  //Exibe Too chaotic
        }

        if (diferencaDaPosicaoOriginal <= 0) {   //Se a diferença for <= 0

            for(let k = posicaoOriginal - 1;k < i; k++) {     //Laço que começa em uma posição antes do valor original
                const posicaoInicialPessoaAvancada = q[k] - 1;  //Posicao inicial da pessoa que foi pulada
                if(posicaoInicialPessoaAvancada > posicaoOriginal) {    //Se a posição inicial da pessoa que foi pulada é menor que a posição original da aque pulou
                    quantidadeDeSubornos++      //Soma +1 na quantidade de subornos
                }
            }
        }
    }

    console.log(quantidadeDeSubornos)
}

minimoDeSubornos(arr)