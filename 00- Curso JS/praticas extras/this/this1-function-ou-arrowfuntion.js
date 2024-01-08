const person = {
    firstName: 'Luiz',
    lastName: 'Otávio',
}

function fullNameFn() {
    return `${this.firstName} ${this.lastName}`
}
const boundFullNameFn = fullNameFn.bind(person);
console.log(boundFullNameFn())
// Pra fazer uma bound function ou seja atrelar o this dentro da função no objeto que quiser. 


const fullNameArrow = () => `${this.firstName} ${this.lastName}`
const boundFullNameArrow = fullNameArrow.bind(person);
console.log(boundFullNameArrow());


