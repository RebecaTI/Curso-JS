// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let copaBrasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(let ano = 0 ;ano < copaBrasil.length ; ano++){
  console.log(`O Brasil ganhou a copa nos anos de ${copaBrasil[ano]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(i = 0; i < frutas.length ; i++){
  console.log(frutas[i])
  if(frutas[i] === 'Pera'){
    break;
  }
}
console.log(frutas) 

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta)
