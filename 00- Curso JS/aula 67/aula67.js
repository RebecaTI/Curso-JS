//Some todos os numeros(reduce)
// Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)
//               1  2    3  4  5  6  7  8  9
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0); //ESSE AQUI É O VALOR INICIAL QUE EU QRO Q INICIE O ACUMULADOR
// console.log(total)


// Retorne um array com os pares (Filter)
const total2 = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);    //NUMERO PAR
    return acumulador; 
}, [] ); 
// console.log(total2)


//Retorne um array com o dobro dos valores (Map)
const total3 = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor *2);
    return acumulador;
}, []);
// console.log(total3);


// Some todos os numeros pares (reduce)
const total4 = numeros.reduce(function(acumulador,valor){
    if(valor % 2 === 0) {
        acumulador += valor;
        // console.log(valor);
    }

    return acumulador;
}, 0);     // Esse é o valor inicial do acum. Se nao tivesse esse valor iria dar um resultado errado. O acum. iria iniciar com o primeiro valor da array ou seja 5
// console.log(total4);





// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 105},
    {nome: 'Leticia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha)