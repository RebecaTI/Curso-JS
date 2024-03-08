const kvArray= [
    ['key1', 'value'],
    ['key2', 'value2']
];

// Use o construtor padrão do Map para transformar um array 2D chave-valor em um map
const myMap = new Map(kvArray);

myMap.get("key1"); // retorna "value1"

// Use o Array.from() para transformar um map em um Array bidimensional de chaves e valores
console.log(Array.from(myMap));  // Irá exibir para você o mesmo Array como um Array chave-valor


// Uma forma sucinta de fazer o mesmo, utilizando a sintaxe spread
console.log([...myMap]);

// Ou use os iteradores keys() ou values(), e os converta para um array
console.log(Array.from(myMap.keys()))



