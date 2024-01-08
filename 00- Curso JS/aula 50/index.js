function funcao() {
    console.log(arguments[0]) //está pegando o indice 0, dos parametros abaixo em funcao('Valor', 1, 2, 3)
}
funcao('Valor', 1, 2, 3);  //A variavel arguments sustenta todos os argumentos q eu enviei


// Uma funçao p somar todos os valores recebidos
function funcaoDois(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, ',', a, ',', b, ',', c)
}
funcaoDois(1, 2, 3, 4, 5, 6, 7)


//Argumentos que sustenta todos os argumentos enviados
function funcaoTres(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcaoTres(1, 2, 3)

function funcaoQuatro(a, b = 2, c = 4) {
    console.log(a + b + c)
}
funcaoQuatro(2, 10) // b assumi o valor de 10, ele nao vai assumir o valor de 2 pq foi enviado o valor aqui

function funcaoCinco(a, b = 2, c = 4) {
    console.log(a + b + c)
}
funcaoCinco(2, undefined, 20) //A unica maneira de pular o b é atribuindo ele a um valor undefined



//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
function funcaoSeis({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}
let obj = { nome: 'Luiz', sobrenome: 'Otavio', idade: 65 }    //Tbm posso criar o objeto em si
funcaoSeis(obj)



//DESESTRUTURAÇÃO DE ARRAY
function funcaoSete([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
funcaoSete(['Luiz Otavio', 'Miranda', 30])



//FUNCTION EXPRESSION
const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50)


//ARROW FUNCTION   Não tem arguments em arrow function= resultado abaixo - erro
// const contaDois = (operador, acumulador, ...numeros) => {
//     console.log(arguments)
// };
// contaDois('+', 1, 20, 30, 40, 50)

const contaDois = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
};
contaDois('+', 1, 20, 30, 40, 50);

const contaTres = (...args) => {
    console.log(args);
};
contaTres('+', 1, 20, 30, 40, 50);