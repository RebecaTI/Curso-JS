//o WHILE checa a condição e executa o codigo
//o DO WHILE

function random(min, max) {
    const r = Math.random() * (max - min + min);
    return Math.floor(r)
}
const min = 1;
const max = 20;
let rand = 10;

while(rand !== 10) {   //Enquanto rand for dferente de 10 executa o laço, se for == a 10 ele vai sair do laço
    rand = random(min, max)
    console.log(rand)
}

console.log('#############')

do {
    console.log(rand)
} while(rand !== 10);




// const nome = 'Luiz'

// let i = 0;

// while(i < nome.length) { 
//     console.log(nome[i])
//     i++      //O laço infinito é quando não há a condição de acrescentar ao valor, entao i seria sempre 0. Causando o laço infinito q pod travar computador, navegador
// }
