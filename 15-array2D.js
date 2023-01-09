const arr = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
]

function somarAmpulhetas (arr) {
    let somaAtual = 0;      //Contador da soma
    let arrayDeSomas = [];      //Array de somas

    for (let linha = 0; linha <= 3; linha++) {      //Navega pela linha
        for (let coluna = 0; coluna <= 3; coluna ++) {  //Navega pela coluna
            let top = arr[linha][coluna] + arr[linha][coluna+1] + arr[linha][coluna+2]; //Faz a soma do topo da ampulheta
            let mid = arr[linha+1][coluna+1]    //Faz a soma do meio da ampulheta
            let bottom = arr[linha+2][coluna] + arr[linha+2][coluna+1] + arr[linha+2][coluna+2];    //Faz a soma da base da ampulheta
            somaAtual = top+mid+bottom; //Soma tudo
            arrayDeSomas.push(somaAtual);   //Adiciona no array de somas
        }
    }

    return console.log(Math.max(...arrayDeSomas))   //Exibe o maior valor
}

somarAmpulhetas(arr)

