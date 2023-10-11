const cliente = {
    nome: "Joao",
    idade: 24,
    email: 'jogao@firma.com',
    telefone: ['133565','343545655'],
}

cliente.endereco = [
    {
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
    },
]

for (let chave in cliente){
    let tipo = typeof cliente[chave]
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
}

//in- essa palavra vai fazer que a gente pegue cada uma das chaves no objeto cliente