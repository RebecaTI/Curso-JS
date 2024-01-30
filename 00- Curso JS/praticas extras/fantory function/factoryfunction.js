// const me = {
//     name: 'Sina',
//     talk() {
//         return `Hello I am ${this.name}`
//     }
// }
// const ben = {
//     name: 'Ben',
//     talk() {
//         return `Hello I am ${this.name}`
//     }
// }
// console.log(me.talk())

function personFactory(name){
    return {
        name: name,
        talk() {
            return `Hello I am ${this.name}`
        }
    }
}
const me = personFactory('Sina')
const ben = personFactory('Ben')
console.log(ben.talk());




