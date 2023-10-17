const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

notas.forEach(function (nota) {
    somaDasNotas += nota;
    console.log(indice)
})

const media = somaDasNotas / notas.length
console.log(`A media das notas é ${media}`)

//O forEach tem uma logica parecida com o for of, ele fornec p gent diretament o valor do elemento do array e ele tbm sempre via do inicio ao fim da array.