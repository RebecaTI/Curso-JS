// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');

// for (let i = 0 ; i <= 40 ; i += 10) {   //i = index
//     console.log(`Linha ${i}`)
// }

// for (let i = 0 ; i <= 10 ; i ++) {
//     const par = i % 2 === 0 ? 'par' : 'impar'     //? se for igual a 0, realizar tarefa  :  senão realizar outra tarefa
//     console.log(i, par)
// }


//Para percorrer uma lista
//                0       1       2 
const frutas = ['Maçã', 'Pêra', 'Uva', 'Luiz', 'Otávio', 'João', 'Miranda']
//console.log(frutas.length)  //Resultado 3
for (let i = 0 ; i < frutas.length ; i++) {   //Tem q ser < q length, pq o indice começa com o 0 e a contagem de length começa com 1. Entao daria um resultado errado se foc <=
    //console.log(i)  //resultado 0 1 2
    //console.log(frutas[i]) //resultado Maçã  Pêra  Uva
    console.log(`Indice ${i} `, frutas[i])
}