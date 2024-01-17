const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
}

for (let chave in pessoa){    //Esse let vai salvar o nome do indice 
    console.log(chave, pessoa[chave])  //Dessa chave vou pegar o valor dessa chave no objeto
}


// const chave = 'nome'
// console.log(pessoa[chave])


// console.log(pessoa.nome)
// console.log(pessoa['nome'])


//const frutas = ['Pêra', 'Maçã', 'Uva'];  //Vetor = array de uma unica dimenção
// for (let i in frutas) {    //Esta lendo os indices ou chaves do objeto
//     console.log(frutas[i])
// }


//const frutas = ['Pêra', 'Maçã', 'Uva'];  //Vetor = array de uma unica dimenção
// for (let i = 0 ; i < frutas.length ; i++) {
//     console.log(frutas[i])
// }