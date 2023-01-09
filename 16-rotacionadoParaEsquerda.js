const arr = [1, 2, 3, 4, 5];
const rotacao = 54;

function rotLeft (a, d) {    
    for(let i = 0; i < d; i++) {    //Laço do tamanho da rotação
        let numeroAtual = a[0];     //Numero atual é sempre o primeiro da fila
        a.shift();                  //Tira o primeiro
        a.push(numeroAtual);        //Adiciona no ultimo
    }

    return console.log(arr)
}

rotLeft(arr, rotacao);