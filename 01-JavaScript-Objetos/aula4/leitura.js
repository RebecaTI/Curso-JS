const dados = require("./cliente.json")

console.log(dados)
console.log(typeof dados)


const clienteEmString = JSON.stringify(dados)

console.log(clienteEmString)
console.log(typeof clienteEmString)

console.log(clienteEmString.nome)

const objetoClient = JSON.parse(clienteEmString)

console.log(objetoClient)

//transformar em string JSNON.stringigy()