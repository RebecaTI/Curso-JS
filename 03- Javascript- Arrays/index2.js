const numeros = [43, 50, 65, 12]

function calculaMedia(conjunto) {

const somaDosNumeros = conjunto.reduce((acc, numero) => acc + numero, 0)

const media = somaDosNumeros / conjunto.length

return media
}

console.log (soma)