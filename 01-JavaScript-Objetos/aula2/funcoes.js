const cliente = {
    nome: "Joao",
    idade: 24,
    email: 'jogao@firma.com',
    telefone: ['133565','343545655'],
    saldo: 200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo) {
            console.log('Saldo insuficiente')
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(25)

//O "this" em JavaScript se refere ao objeto que está sendo referenciado em um determinado contexto ou escopo. Ele pode ser usado dentro de uma função para se referir ao objeto que a chamou, ou pode ser usado fora de uma função para se referir ao objeto global (no caso do navegador, seria o objeto "window").