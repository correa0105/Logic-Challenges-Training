function calcularPrimo(n) {
    if(n >= 2) {
        for(let i = 2; i < n; i++) {
            if(n%i === 0) {
                return console.log("Not prime")
            } 
        }
        return console.log("Prime")
    } else {
        return console.log("Not prime")
    }
}

calcularPrimo(289);
