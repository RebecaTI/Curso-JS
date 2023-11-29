//Atribuitação via desestruturação


//... quando usamos esse operador de pegar o resto de alguma coisa, rest. Para espalhar alguma coisa se chama de ...spread  
//const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
//const [um, dois, tres, ...resto] = numeros; //Ele pegou os numeros do indice 0 e 1 . E tbm serve para pegar todos os valores
// const [um, , tres, , cinco] = numeros; //para pular de um em um, criando valores vazios

// console.log(um, tres, cinco)
// console.log(numeros)

// let a = 'A'
// let b = 'B'
// let c = 'C'

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c)

//                   0           1           2
//                 0  1  2     0  1  2    0  1  2
// const numeros = [ [1, 2, 3],  [4, 5, 6], [7, 8, 9] ]
// console.log(numeros[1][2])  //indice 1, e dpois o indice 2 dentro do array. Resultado 6


// const numeros = [ [1, 2, 3],  [4, 5, 6], [7, 8, 9] ]
// const [ ,[ , , seis]] = numeros //Nao quero o indice 0, entao eu coloco uma virgula. O array de indice 1 tbm é um array
// console.log(seis)

const numeros = [ [1, 2, 3],  [4, 5, 6], [7, 8, 9] ]
const [lista1, lista2, lista3] = numeros
console.log(lista3) //Resultado [7, 8, 9]
console.log(lista3[2])

