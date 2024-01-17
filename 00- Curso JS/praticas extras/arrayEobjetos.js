/*
time 3 - Might Guy (Rock lee, tenten, hyuuga Neji)
time 7 - kakashi
time 8 - kurenai (Kiba inuzuke, Hyuuga hinata, shino aburame)
time
*/

function Times(numTime, professor, alunos){
    this.numTime = numTime;
    this.professor= professor;
    this.alunos= alunos;
}

let time3 = new Times("Time 3", 'Might Guy', ['Rock lee', 'tenten', 'hyuuga Neji'])
let time7 = new Times('Time 7', 'Hataki Kakashi', ['Uzumaki Naturo', 'Haruno Sakura', 'Uchiha Sasuke'])
let time8 = new Times('time 8', 'Kurenai', ['Kiba Inuzuke', 'Hyuuga Hinata', 'Shino Aburame'])
time8.animais = ['Cachorro', 'Insetos']
console.log(time3);
console.log(time8);



// const times = ['Time 3', 'Time 7', 'Time 8']
// const pessoas = [
//     {
//         time: time,
//         alunos: alunos,
//         professores: professor,
//     },
// ]

// console.log(pessoas.time(times[0]).push)