function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:    //Caso o dia da semana for 0 Execute isso
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;  //Está fazendo o mesmo papel do break
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

const data = new Date('1987-04-2 00:00:00');
const diaSemana = data.getDay() + 1;
const diaSemanaTexto = getDiaSemanaTexto(diaSemana) //Criando essa const com o mesmo nome do let dentro da função pq não é possivel pegar um item dentro do escopo, por isso é preciso criar o nome ligado a função fora do escopo

console.log(diaSemana, diaSemanaTexto)


// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if(diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if(diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if(diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if(diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if(diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if(diaSemana === 6) {
//     diaSemanaTexto = 'Sabado';
// } else {
//     diaSemanaTexto = '';
// }



// switch (diaSemana) {
//     case 0:    //Caso o dia da semana for 0 Execute isso
//         diaSemanaTexto = 'Domingo';
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sabado';
//         break;
//     default:
//         diaSemanaTexto = '';
// }