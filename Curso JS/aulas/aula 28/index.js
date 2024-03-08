//60(seg) * 60(seg) = 1(hr) * 3 = 3(hrs)
//soq no javascript é por minisegundo entao o * 1000
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);

//                          Mes abril
//const data = new Date(2019, 3, 20, 15 , 14, 56); // ano, mes, dia, hora, minuto, segundo, milezimos de segundos)

//                        mes real
const data = new Date('2019-04-20 20:20:59')
console.log('Dia', data.getDate()) //para obter o numero do dia
console.log('Mes', data.getMonth() + 1) //P o mes atual é necessario adicionar 1, pq no javascript sempre comeca no indice 0
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minutos', data.getMinutes())
console.log('Segundos', data.getSeconds())
console.log('Milisegundos', data.getMilliseconds())
console.log('Dia da semana', data.getDay()) //0 - domingo e 6 é sabado

console.log(data.toString());

console.log(Date.now()) //milesimos de asegundos

const data2 = new Date(1701129425437)
console.log(data2)

//No javaScript o mes de indice 0 seria janeiro, e o de  indice 11 seria novembro