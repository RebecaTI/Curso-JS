const dados = require("./cliente.json")

console.log(dados)
console.log(typeof dados)


const clienteEmString = JSON.stringify(dados)

console.log(clienteEmString)
console.log(typeof clienteEmString)

console.log(clienteEmString.nome)

const objetoClient = JSON.parse(clienteEmString)

console.log(objetoClient)

//Ler um arquivo .json.
//Transformá-lo em uma string para podermos salvá-lo, transmiti-lo ou usá-lo em alguma outra operação que é comumente realizada com strings;
//Por fim, transformamos essa string de volta em um objeto para podermos alterar as propriedades e realizar operações comuns do JavaScript.