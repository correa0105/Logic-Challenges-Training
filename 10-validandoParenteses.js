/* Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida.
Uma string é considerada válida se: Caracteres de abertura devem ser fechadas pelo mesmo tipo. Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida.  */

const entrada = "[]";

function isValid (entrada) {    
    const arrayString = entrada.split("")
    
    if(arrayString[0] === "(") {
      if(arrayString[1] === ")") return true
    }
    if(arrayString[0] === "[") {
      if(arrayString[1] === "]") return true
    }
    if(arrayString[0] === "") {
      if(arrayString[1] === "") return true
    }
    return false
}

console.log(isValid(entrada));