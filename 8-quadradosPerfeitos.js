/* Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. */

let n = 12;

const countQuadradoPerfeito = n => {
  
    if (n < 4) return n;
  
    let quantidadeQuadradoPerfeito = Infinity;  
  
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      let quadradoPerfeito = Math.floor(n / (i * i));
      quantidadeQuadradoPerfeito = Math.min(quantidadeQuadradoPerfeito, quadradoPerfeito + countQuadradoPerfeito(n - quadradoPerfeito * i * i));
    }
  
    return quantidadeQuadradoPerfeito;

  }

  console.log(countQuadradoPerfeito(n));