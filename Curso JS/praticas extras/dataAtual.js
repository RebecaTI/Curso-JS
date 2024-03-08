const pessoa1 = new Object();
pessoa1.idade = 30;

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade     // .getFullYear() Pega a data atual
}

console.log(pessoa1.getDataNascimento())

//O método getFullYear() retorna o ano da data especificada de acordo com a hora local.
var today = new Date();
var year = today.getFullYear();
console.log(year)

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
console.log(anoAtual)

