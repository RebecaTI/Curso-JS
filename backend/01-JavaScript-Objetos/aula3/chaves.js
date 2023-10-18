const cliente = {
    nome: "Joao",
    idade: 24,
    email: 'jogao@firma.com',
    telefone: ['133565','343545655'],
}

cliente.enderecos = [
    {
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
    },
]

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")) {
    console.error('Erro. É necessario ter um endereço cadastrado.')
}

