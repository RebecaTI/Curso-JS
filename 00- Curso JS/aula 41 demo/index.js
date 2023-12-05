//Escreva uma função que recebe 2 valores e retorne o maior deles

//RESOLUÇÃO DO PROFESSOR ------------------------

const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 20));


// const max2 = (x,y)=> {
//     return x > y ? x : y;
// };
// console.log(max2(10,20))


//Se x for maior doq y ? vou retornar o x, o contrario (:) disso vou retornar o y
// function max(x,y) {
//     return x > y ? x : y;
// }
// console.log(max(10, 20))


// function max(x, y){
//     if (x > y) return x;
//     return y;  
// }
// console.log(max(17, 2))


// function max(x, y){
//     if (x > y) {
//         return x;
//     }
//     return y;
    
// }
// console.log(max(17, 2))


// function max(x, y){
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// }
// console.log(max(17, 2))



// ------------------------------------------------



//RESOLUÇÃO DOS ALUNOS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// const n = [0,0];
// for (let i in n) {
//     function random(min, max) {
//         const r = Math.random()*(max - min) + min;
//         return Math.floor(r);
//     } 
//     const min = 1;
//     const max = 50;
//     let rand = random(min, max);
//     n.unshift(rand) ;
//     n.pop();        
// }
// const valorMax = n[0] > n[1] ? n[0] : n[1];
// console.log(n);
// console.log(valorMax);



// function maiorNumero(num1, num2, num3){
//     return Math.max(num1, num2, num3)
// }
// console.log(`Maior é = `,maiorNumero(234, 1234, 234));



// function retornaMaior(num1 , num2){
//     return num1 > num2 ? console.log(`O maior é ${num1}`) : console.log(`O maior é ${num2}`);
// }
// retornaMaior(6, 234)



// function maiorNumero(num1 = 10, num2 = 76){
//     return  (Math.max(num1, num2))
// }
// console.log(maiorNumero());



// function getMaiorNumero(num1, num2) { 
//     num1=67;
//     num2=23;   
//     return (Math.max(num1, num2));
// }
// console.log(getMaiorNumero())



// function getHigherNumber(){
//     const a = 6;
//     const b = 2345;
//     const maiorNumero = Math.min(a,b)
//     return maiorNumero
// }
// console.log(getHigherNumber())



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//MINHA RESOLUÇÃO (ERRADA) ===========================
// const valor1 = 5;
// const valor2 = 10;

// if (valor1 > valor2){
//     console.log(`O valor 1 é maior que valor 2`)
// } else if(valor1 < valor2) {
//     console.log('O valor 2 é maior que o valor1')
// }

//===================================================