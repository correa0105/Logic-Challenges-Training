/* Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
Se o número for apenas múltiplo de 3 -> "Fizz" ; 
Se o número for apenas múltiplo de 5 -> "Buzz"; 
Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido;  */

const resultado = 15;

function fizzBuzz(value) {
    for (value; value > 0; value--) {
        if (value % 3 === 0 && value % 5 === 0) {
            console.log("FizzBuzz")
        } else if (value % 3 === 0 && value % 5 != 0) {
            console.log("Fizz")
        } else if (value % 3 != 0 && value % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(value)
        }
    }
}

fizzBuzz(resultado);