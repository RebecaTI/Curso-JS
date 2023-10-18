const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores')

function quickSort(array, esquerda, direita) {
    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quickSort(array,esquerda, indiceAtual - 1)
        }
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita)
        }
    }
    return array;
}

function particiona(array, esquerda,direita) {
    console.log('array', array)
    console.log('esquerda,direita', esquerda,direita)
    let pivo = array[Math.floor((esquerda + direita) / 2)]
    let atualEsquerda = esquerda  //0
    let atualDireita = direita  //10

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++
        }
        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--
        }

        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
        return atualEsquerda;
    }
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))
//quickSort chamado com lista livros, o indice de inicio 0, e o array final porem menos 1
//-1 é a propriedade de elementos e não queremos a quantidade de elementos. Queremos indices de array
