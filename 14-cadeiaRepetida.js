const s = "epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq";
const n = 549382313570;

function repeatedString(s, n) {
    let numeroDeAs = 0;      //Contador de As       

    if(n >= s.length) {      //Garente que o numero informado é maior que o tamanho da string
        let quantidadeDeAsNaString = [...s].filter(value => value === "a").length;  //Quantidade de As na string

        console.log(n/s.length)
        numeroDeAs = Math.floor(n/s.length) * quantidadeDeAsNaString;   //Numero de As que se repetem n vezes
    }

    let AsRestantes = n % s.length;         //As restantes da divisão

    for(let i = 0; i < AsRestantes; i++) {      //Laço to tamanho da divisão restante
        if(s[i] === "a") {  //Se a posição da string for um A,
            numeroDeAs++;   //Soma +1 na quantidade de As
        }
    }

    return console.log(numeroDeAs)
}

repeatedString(s, n)