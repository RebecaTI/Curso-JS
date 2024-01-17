//Atribuição via desestruturação

let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [b, c, a];
[a, b, c] = letras
//console.log(a, b, c)

//-------------------------------------------------------------------------------------------------------------------

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, ,tres, , cinco] = numeros;
//console.log(um, tres, cinco);

//-------------------------------------------------------------------------------------------------------------------

// ..rest, ...spread
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros2[1][0])

