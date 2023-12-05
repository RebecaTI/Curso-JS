function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', { hour12: false });
}

const timer = setInterval(function () {
    console.log(mostraHora())
}, 1000) 

setTimeout(function () {
    clearInterval(timer)
}, 10000) //Para parar em 10 segundos

setTimeout(function(){
    console.log('Olá mundo!')
}, 2000)



// function mostraHora() {
//     let data = new Date();

//     return data.toLocaleTimeString('pt-BR', {hour12: false});
// }

// function funcaoDoIntervalo () {
//     console.log(mostraHora())
// }

// setInterval(funcaoDoIntervalo, 1000) //Esta chamando a função sem executar ela, retirando as () vc não executa uma função. Está passando a referencia, o segundo parametro é de quanto em quanto tempo eu qro q isso seja executado. 1000 milesimos de segundos