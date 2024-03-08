//for clássico - Geralment com iteraveis (strings ou array )
//for in - Retorna o indice ou chave (string, array ou objetos)
//fot of - Retorna o valor em si(iteráveis, arrays, ou strings)


// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otavio'
// }

// //Em objeto o for classico NÃO FUNCIONA, tem q pegar as chaves, valores ou items. o for in FUNCIONA pq vou pegar as chaves
// for (let chave in pessoa)  {
//     console.log(chave, pessoa[chave])
// }


// const nomes = ['Luiz' ,'Otavio', 'Henrique']

// for(let i = 0 ; i < nomes.length ; i++){
//     console.log(nomes[i])
// }

// console.log('#######')

// for (let i in nomes)  {
//     console.log(nomes[i])
// }
// console.log('#######')

// for (let valor of nomes) {
//     console.log (valor)
// }
// console.log('#######')

// nomes.forEach(function (valor, indice, array) {
//     console.log(valor, indice, array)
// })



// const nome = 'Luiz Otavio';
// for (let valor of nome) {  //Quando usamos o of vem o valor em si e nao o indice
//     console.log(valor)  //Ao invez de retornar o indice, ele retorna o valor
// }


// for (let i = 0 ; i < nome.length ; i++){
//     console.log(nome[i])
// }


// for ( let i in nome) {
//     console.log(nome[i])
// }