/*
NaN também pode ser usado como chave. Apesar de todo o NaN não ser igual a ele mesmo (NaN !== NaN), o exemplo a seguir funciona porque não é possível distinguir um NaN de outros.
*/

const myMap = new Map();
myMap.set(NaN, "not a number");

console.log(myMap.get(NaN));

const otherNaN = Number('foo');
console.log(myMap.get(otherNaN));


