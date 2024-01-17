//OBJETO CONSTRUTOR E OBJETO LITERAL


// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otavio'
// };

// //Existem 2 formas de acessar 
// const chave = 'sobrenome'
// console.log(pessoa.nome)
// console.log(pessoa['sobrenome'])
// console.log(pessoa[chave])


// //new array()    //Para criar um novo array
// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otavio';

// const pessoa2 = {
//     nome: 'Luiz',
//     sobrenome: 'Otavio'
// }

// console.log(pessoa1, pessoa2)


// para APAGAR 
// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otavio';

// delete pessoa1.nome;
// console.log(pessoa1)


//FUNÇÕES DENTRO DE OBJETOS
// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otavio';
// pessoa1.idade = 0;
// pessoa1.falarNome = function () {
//     return (`${this.nome} esta falando seu nome`)
// }
// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// pessoa1.falarNome()   //É uma ação que está dentro do objeto e q tm acesso ao meu objeto

// console.log(pessoa1.getDataNascimento())

// for (let chave in pessoa1){
//     console.log(pessoa1[chave]);
// }



//Podemos ter 2 tipos de funções que são moldes para criar novos objetos
//Factory function  /  Constructor function  /  Classes

// FACTORY FUNCTION
// function criaPessoa(nome, sobrenome){   //Essa função tem o trabalho de criar o objeto
//     return {
//         nome, 
//         sobrenome,
//         get nomeCompleto()  { //Esse metodo vai simular q ele e um atributo da classe
//             return `${this.nome}  ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Otavio');
// console.log(p1.nomeCompleto);


// CONSTRUCTIR FUNCTIONS
//p1 = (ENDERECOMEMORIA) -> 'Valor'
//p1 = (NOVOENDERECOMEMORIA)  Nao pode fazer isso
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
// A palavra new vai criar um objeto vazio e tbm vai pegar a aalvra this
const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');
Object.freeze(p2);  //Para q o valor não seja alterado
p2.nome = 'Naruto'
console.log(p1);
console.log(p2);

//Para travar os objetos dentro do objeto 
// function Pessoa(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome; 
//     Object.freeze(this)    //O this representa Pessoa, também pode ser usado com ARRAYS
// }

