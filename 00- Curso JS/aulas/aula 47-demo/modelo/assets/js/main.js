function relogio(){

    function getTimeFromSeconds(segundos){
        const data = new Date(segundos * 1000); //O js recebe os segundos em milesimos de segundos então a maneira mais pratica é multiplicar os segundos por 1000
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    
    const relogio = document.querySelector('.relogio')
    // const iniciar = document.querySelector('.iniciar')   //Não precisa selecionar os botoes pq ja esta sendo 
    // const pausar = document.querySelector('.pausar')     //selecionado no 
    // const zerar = document.querySelector('.zerar')       // document.addEventListener
    let segundos = 0
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000) 
    }
    
    document.addEventListener('click', function(e){
        // console.log(e.target) //permite que você detecte quando uma função ou construtor foi chamado 
        const el = e.target;   //el= elemento   e= evento
        
        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
                clearInterval(timer);
                relogio.innerHTML = '00:00:00';
                segundos = 0;    
            }
    
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
    
        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado')
    
        }
    })
}

relogio()


    
// iniciar.addEventListener('click', function(event) {
//     relogio.classList.remove('pausado')
//     clearInterval(timer)
//     iniciaRelogio();
// })

// pausar.addEventListener('click', function(event) {
//     clearInterval(timer);
//     relogio.classList.add('pausado')
// })

// zerar.addEventListener('click', function(event) {
//     relogio.classList.remove('pausado')
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00'
//     segundos = 0;
// })