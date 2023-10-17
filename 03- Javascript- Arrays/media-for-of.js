const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//Para ler a linha abaixo, para cada elemento execute esse codigo q está dentro das {}
for (let nota of notas) {
    somaDasNotas += nota
}

const media = somaDasNotas / notas.length;
console.log(`A media das notas é ${media}`)

//O for of é uma forma mais consisa de escrever o for, mas depende da situação. Ele vai funcionar nesses casos em que queremos percorrer o array do inicio ao fim e qndo qremos percorrer todos os elementos.