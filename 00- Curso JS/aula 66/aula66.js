//Dobre os numeros;
//               0   1   2  3  4  5  6  7  8 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);


//Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosane', idade: 32},
    {nome: 'Wallace', idade: 47},
]
 
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade}));  //SE TORNOU UMA EXPRESSÃO
// const idades = pessoas.map(function(obj) {
//     // delete obj.nome;
//     return { idade: obj.idade};
// })
console.log(nomes)
console.log(idades)

// Adicione uma chave id em cada objeto
const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj}
    newObj.id = indice +1;
    return newObj
})
// console.log(comIds)

console.log(pessoas)
