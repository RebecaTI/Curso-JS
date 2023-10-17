const notas= [7, 7, 8, 9]

//Esses pontos é um operador do Js que se chama spread Operator.The spread operator is commonly used to make deep copies of JS objects. When we have nested arrays or nested data in an object, the spread operator makes a deep copy of top-level data and a shallow copy of the nested data. Using this operator makes the code concise and enhances its readability.

const novasNotas = [5, ...notas, 10]

//Esse ultimo valor 10 é o mesmo que: novasNotas.push(10)
//O valor 5 na frente é o mesmo que : novasNotas.unshift(5)

console.log(`As notas notas são: ${novasNotas}`)
console.log(`As notas originais são : ${notas}`)