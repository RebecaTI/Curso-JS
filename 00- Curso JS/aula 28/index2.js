//criando uma função q coloca o 0 a esquerda, pq nao aparec o 0 . Por ex: 1hra 2 min e 8seg, sendo q a forma correta seria: 01hra 02min e 08seg.
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`; //Se num for maior ou igual a 10, ela retorna o num. Se não ela retorna uma template string adicionando o 0 a esquerda do numero
}


function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia} / ${mes} / ${ano}  ${hora} : ${minuto} : ${segundo} `
}

const data= new Date(1701129425437);
const dataBrasil = formataData(data);
console.log(dataBrasil);