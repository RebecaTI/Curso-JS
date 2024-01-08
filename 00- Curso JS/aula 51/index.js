// return  -  retorna um valor termina a função
function soma(a, b) {
    return a + b
}

function soma2(a, b) {
    console.log(a + b)
}
soma2(5, 2)



// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// })


function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}
const p1 = criaPessoa('Luiz', 'Otavel')
const p2 = {
    nome : 'João',
    sobrenome : 'Oliveira'
}
console.log(typeof p1)
console.log(typeof p2)



function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}

const fala = falaFrase('Olá')
const resto = fala('mundo!')
console.log(resto)


function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}
 
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

//A função criaMultiplicador retorna uma outra função anônima, que quando invocada, retorna o resultado da multiplicação de "n" com "multiplicador". Quando você atribui a função criaMultiplicador a uma variável, como "duplica", "triplica" ou "quadriplica", a função interna lembra do valor do argumento passado para criaMultiplicador. Isso é conhecido como "closures", onde a função interna tem acesso às variáveis e argumentos da função externa.

