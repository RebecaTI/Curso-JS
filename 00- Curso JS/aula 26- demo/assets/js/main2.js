
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('#resultado')

    const imcResultados = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
    
        let peso = Number(form.querySelector('#peso'));
        let altura = Number(form.querySelector('#altura'));
        
        imcResultados.push ({
            peso: peso.value,
            altura: altura.value
        });
        
        let imc = Number(peso / (altura * altura));
        

        // if (calculaIMC() < 18.5){
        //     resultado.innerHTML = `Seu IMC é ${calculaIMC()} (Abaixo do peso)`;
        // }
        
        console.log(imc);
    }
    
    form.addEventListener('submit', recebeEventoForm);
}


meuEscopo();


