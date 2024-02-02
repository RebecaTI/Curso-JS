//Iterando o Map com for ..of
//Maps podem ser iterados usando um loop for ..of:
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");

for (const [key, value] of myMap) {
    console.log(key + ' = ' + value);
}
// 0
// 1

for (const value of myMap.values()) {
    console.log(value);
}

for (const [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value);
}

// for (const [key, value] of myMap) {
//     console.log(3 * key);
// }
