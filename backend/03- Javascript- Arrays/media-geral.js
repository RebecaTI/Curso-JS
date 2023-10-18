const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0)

    const media = somaDasNotas / notasDaSala.length

    return media
}

console.log( `A media da sala de JavaScript é ${calculaMedia(salaJS)}`)
console.log( `A media da sala de Java é ${calculaMedia(salaJava)}`)
console.log( `A media da sala de Python é ${calculaMedia(salaPython)}`)

//reduce - esse metodo vai iterar sobre o array 
//Além dessa função callback podemos passar um segundo parâmetro para o reduce(). Depois da declaração da função, depois da chave de fechamento e antes do parênteses de fechamento, vamos colocar uma vírgula e o parâmetro 0, que será o valor inicial desse acumulador. 
//O zero está fazendo o papel daquela somaDasNotas que fizemos no forEach(). Vai começar com valor zero e será somada cada uma das notas.