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
    }
],

cliente.enderecos.push({
    rua:'R. Josepf Ladder',
    numero: 404,
    apartamento: false,
})

const listaApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaApartamentos)


