const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda', 
    idade: 30,
    endereco: {
        rua: 'Av Brasil', 
        numero: 320
    }
};

// console.log(pessoa.endereco.numero);



// const nome = pessoa.nome;

//atribuição via desestruturação
// const {nome, sobrenome, idade} = pessoa
//const {nome = 'Não existe', sobrenome, idade} = pessoa //valor padrao caso n exista um nome


// const {nome:teste , sobrenome, idade} = pessoa //caso n queira q minha variavel seja chamada de nome. Estou indicando a chave e pedindo p mudar o nome
// console.log(teste, sobrenome);

// const {endereco: {rua, numero}, endereco} = pessoa //Para pegar coisas direto do objeto endereco.
// console.log(rua, numero, endereco);

// const {endereco: 
//     {rua: r = 12345, numero}, endereco} = pessoa  //caso rua n exista o resultado é 122345
// console.log(r, numero)


//Operador de rest
const {nome, ...resto} = pessoa
console.log(resto)