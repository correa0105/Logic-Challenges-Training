const path = ["U", "D", "D", "D", "U", "D", "U", "U"];
const steps = 8;

function countingValleys(steps, path) {

    let vales = 0;              //Contador de vales
    let elevacoes = 0;          //Determina em qual elevação stá
    
    for(let i = 0; i < path.length; i++) {      //Laço de repetição do tamanho do array
        if(path[i] === "D") {                   //Se a letra for D
            elevacoes--;                        //Desce uma elevação
        } else {                                //Se a letra for U
            if (elevacoes == -1) {              //Verifica se a elevação é -1
                vales++;                        //Soma 1 vale
            }            
            elevacoes++;                        //Elevação sobe 1
        }
    }

    console.log(vales);
}

countingValleys(steps, path)