const input = [0, 0, 1, 0, 0, 1, 0];

function jumpingOnClouds(c) {
    let saltos = 0;             //Contador de saltos
    let contador = 0;           //Contador

    while(contador < c.length-1) {      //Laço de repetição do tamanho do array
        if(contador+2 < c.length && c[contador+2]===0) {    //Se o contador+2 for menor que o tamanho do array e a posição da segunda casa a frente for = 0
            contador+=2;                                    //Pula duas casas
            saltos++;                                       //Soma 1 salto
        } else {                                            //Se não
            contador++;                                     //Pula 1 casa
            saltos++                                        //Adiciona 1 salto
        }
    }
    
    return console.log(saltos);
}

jumpingOnClouds(input)

