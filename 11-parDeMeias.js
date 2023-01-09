const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {

    let numeroDePares = 0;  //Contador de pares
    const objeto = {};  //Objeto que vai armazenar os pares
    
    ar.forEach(value => {
        if(objeto[value] != true) {     //Se não constar o objeto
            objeto[value] = true;       //Adiciona o objeto
        } else {                        //Se constar
            delete objeto[value];       //Deleta o objeto
            numeroDePares++;            //Soma +1 no contador de pares!
        }
    })
    
    return console.log(numeroDePares);
}

sockMerchant(n, ar);