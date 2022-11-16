let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = 81;

let valorEncontrado = `Numero ${valor} nao encontrado!`;

elementos.forEach((value, index) => {
  if(value === valor) {
    return valorEncontrado = `Achei ${value} na posicao ${index}`
  }
})

console.log(valorEncontrado)