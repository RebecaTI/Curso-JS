const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros = [...numerosPares, ...numerosImpares]

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

const pessoa = {
    nome: 'Ju',
    idade: 25 
}

const pessoaComTelefone = {...pessoa, telefone: 2322424}

const { idade } = pessoa

console.log(idade)

function imprimiDados({nome ,idade}) {
    console.log(nome, idade)
}

imprimiDados(pessoa)
