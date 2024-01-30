//Escreva uma função que recebe um número e retorno o seguinte:
//Numero é divisivel por 3 = Fizz
//Numero é divisivel por 5 = Buzz
//Numero é divisivel por 3 e 5 = FizzBuzz
//Numero não é divisivel por 3 e 5 = retorna o proprio numero
//checar se o numero é realment um numero
//use a funcão com números de 0 a 100


//RESOLUÇÃO DO PROFESSOR ------------------------


function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz'; 
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    return numero
}
console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 10 ; i++) {
    console.log(i, fizzBuzz(i))
}


//--------------------------------------------------


//RESOLUÇÃO DOS ALUNOS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// const fizzBuzz = (num) => {
//     return (isNaN(num)) ? `${num} não é um numero válido`: //Não é ;
//     ((num % 3 == 0) && (num % 5 == 0)) ? 'FizzBuzz' :
//     (num % 3 == 0) ? 'Fizz' :
//     (num % 5 == 0) ? 'Buzz' :
//     num
// }
// console.log(fizzBuzz('30'))





//MINHA RESOLUÇÃO (ERRADO) ====================== ================================================= 


// function avaliarNum(){
//     num = 50
//     if (num % 3 === 0) {
//         console.log('Fizz')
//     } else if (num % 5 === 0) {
//         console.log('Buzz')
//     } else if (num % 3 === 0 && num % 5 === 0) {
//         console.log('FizzBuzz')
//     } else {
//         console.log(`${num}`)
//     } 
    
// }
// console.log(avaliarNum())
//==========================================================================================