let apareceData = document.querySelector('h1')
const data = new Date();
const diaSemana = data.getDay() + 1;
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    if (diaSemana === 0) {
        diaSemanaTexto = 'Domingo';
    } else if (diaSemana === 1) {
        diaSemanaTexto = 'Segunda'
    } else if (diaSemana === 2) {
        diaSemanaTexto = 'Terça';
    } else if (diaSemana === 3) {
        diaSemanaTexto = 'Quarta';
    } else if (diaSemana === 4) {
        diaSemanaTexto = 'Quinta';
    } else if (diaSemana === 5) {
        diaSemanaTexto = 'Sexta';
    } else if (diaSemana === 6) {
        diaSemanaTexto = 'Sabado';
    } else {
        diaSemanaTexto = '';
    }
}

console.log(diaSemanaTexto)
console.log(data.toString)