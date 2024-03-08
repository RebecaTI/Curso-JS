const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

const second = new Map([
    [1, 'uno'],
    [2, 'dos'],
]);

// Mescla dois maps. A última chave a se repetir vence.
// O operador spread essencialmen converte um Map para um Array
const merged = new Map([...first, ...second])

console.log(merged.get(1))
console.log(merged.get(2))
console.log(merged.get(3))



