/* Os elementos são {64, 137, -16, 43, 67, 81, -90, 212, 10, 75}. 
- Carregue esses elementos em um array.  
- Implementação da busca sequencial: 
- Crie um método  que realiza uma busca sequencial.  
- Se o valor constar no array, retorne um texto contendo o valor e sua respectiva posição no array. */

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = 81;

let valorEncontrado = `Numero ${valor} nao encontrado!`;

elementos.forEach((value, index) => {
  if(value === valor) {
    return valorEncontrado = `Achei ${value} na posicao ${index}`
  }
})

console.log(valorEncontrado);