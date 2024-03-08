const myMap = new Map();

const keyString = 'a string';
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value assiciated with 'a string'");
myMap.set(keyObj, "value assiciated with keyObj");
myMap.set(keyFunc, "value assiciated with keyFunc");

myMap.size;

//getting the values
console.log(myMap.get(keyString));
console.log(myMap.get(keyObj));
console.log(myMap.get(keyFunc));

console.log(myMap.get('a string'));
// porque keyString === 'a string'
console.log(myMap.get({}));  //undefined, pq keyObj !== {}
console.log(myMap.get(function() {}))  // undefined, porque keyFunc !== function () {}



