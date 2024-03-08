//capturar o evento de submite do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {  //'e' de event
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value)
    const altura= Number(inputAltura.value)

    if (!peso) {    //Se peso for DIFERENTE de peso, ou, se peso não for falso
        setResultado('Peso invalido!', false); //false para fundo vermelho
        return; //Sempre que eu retorno verdadeiro ele vai parar aqui não vai mais executar os codigos à frente. Ou seja, se o peso for um NaN ele vai parar a função nesse local
    }
    
    if (!altura){
        setResultado('Altura invalida', false);
        return;
    }
    
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu imc é ${imc} (${nivelImc}).`;

    setResultado(msg, true);

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso' , 'Peso normal', 'Sobre peso' , 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']  //Criar array com indices
    
    if (imc >= 39.9) return nivel[5];
    
    if (imc >= 34.9) return nivel[4]; 
    
    if (imc >= 29.9) return nivel[3]; 
    
    if (imc >= 24.9) return nivel[2]; 
    
    if (imc >= 18.5) return nivel[1];
    
    if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2; //Altura elevado a 2
    return imc.toFixed(2); //Com 2 casas decimais
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';  

    const p = criaP();  //O p vai ser inserido na div
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
