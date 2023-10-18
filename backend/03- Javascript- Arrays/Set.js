const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]

const nomesAtualizados = [...new Set(nomes)]

console.log(nomesAtualizados)

//Está fazendo 2 coisas ao mesmo tempo, passando o nome como o valor de entrada do Set e ao mesmo tempo já espalho eles p uma array