const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'miranda',
    idade: 25,

    fala () {
        console.log(`A minha idade atual é ${this.idade}`)  //o this se refere ao objeto que está sendo referenciado em um determinado contexto ou escopo
    },

    incrementaIdade () {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();



// function criaPessoa(nome,sobrenome,idade) {  //dentro dos () é chamado de parametro
//     return {      //Essa função é chamada de factory, ou seja ela cria objetos
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25) //isso se chama argumento
// const pessoa1 = criaPessoa('Maria', 'Oliveira', 32)
// const pessoa1 = criaPessoa('Joao', 'Lara', 55)
// console.log(pessoa1.nome)