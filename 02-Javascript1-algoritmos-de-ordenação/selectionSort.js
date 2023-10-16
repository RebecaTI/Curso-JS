const livros = require('./listaLivros');
const menorValor = require('./menorValor');
const troca2 = require('./troca2')

for ( let atual = 0; atual < livros.length -1; atual++){
    let menor = menorValor(livros, atual);

    troca2(livros, atual)
}

console.log(livros)
