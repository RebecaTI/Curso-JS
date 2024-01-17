/*
Exercicio p fixar constantes e variaveis
Luiz Otavio Miranda tem 30 anos, pesa 84 kg, tem 1,8 de altura e seu IMC é de 25.929259

Adicionar ano de nascimento
*/

const nome = "Luiz Otavio Miranda";
let altura = 1.80;
const peso = 84;
const idade = 30;

function calculaIMC(peso, altura) {
    return peso / (altura * altura);
}

imc = calculaIMC(peso, altura);

function calculaAnoNascimento() {
    const now = new Date().getFullYear();
    return now - idade;
}

console.log(`${nome} tem ${idade} anos, pesa ${peso} quilos, tem ${altura} de altura e seu imcs É ${imc.toFixed(2)}, nasceu em ${calculaAnoNascimento()}`);

