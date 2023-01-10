function findCompletePrefixes(query, names) {
    for(let i = 0; i < query.length; i++) {
        let quantidadeAchada = 0;
        let prefixo = query[i];

        for(let k = 0; k < names.length; k++) {
            let cortaPalavra = names[k].slice(0, prefixo.length);
            if(prefixo === cortaPalavra) {
                if(prefixo.length !== names[k].length) {
                    quantidadeAchada++ 
                }
            } 
        }
        console.log(quantidadeAchada)
    }
}

findCompletePrefixes([ 'steve', 'alex', 'joe', 'john', 'dan' ], [
    'steve',  'stevens',
    'danny',  'steves',
    'dan',    'john',
    'johnny', 'joe',
    'alex',   'alexander'
  ]);