(function() {
    let cpfCampo = document.querySelector('#cpf_campo');
    let cpfButao = document.querySelector('#cpf_enviar');
    let cpfResultado = document.querySelector('#cpf_resultado');
    let cpfNovo;
 
    let resultado = document.createElement('h1');
    resultado.style.fontSize = '15px';
    resultado.style.color = 'red';
    resultado.style.marginTop = '10px';
    cpfResultado.appendChild(resultado);
 
    cpfButao.addEventListener('click', () => {
        let cpf = verificarSintaxeCpf();
        if(!cpf) return;
        
        verificarCpf(cpf);
 
        if(cpfNovo.join('') === cpf[1].join('')) {
            resultado.textContent = `O CPF ${cpf[0].join('')} é válido.`;
        }else {
            resultado.textContent = `O CPF ${cpf[0].join('')} é inválido.`;
        }
    });
    function verificarSintaxeCpf() {  
        if(/^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/.test(cpfCampo.value)) {
            let cpf = cpfCampo.value.replace(/\D/g, '').split('');
            return [cpf.slice(0, 9), cpf];
        }
        cpfCampo.value = 'xxx.xxx.xxx-xx';
        return false;
    }
    function verificarCpf(cpf) {
        let multiplicacaoCpf = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        calcularDigitos(cpf[0], multiplicacaoCpf); 
    }
    function calcularDigitos(cpf, multiplicacaoCpf) {
        if(cpf.length === 11) return cpfNovo = cpf.slice(); 
 
        let valorDigito = cpf
            .map((valor, indice) => valor *= multiplicacaoCpf[indice])
            .reduce((acumulador, valor) => acumulador += valor);
 
        let digito = 11 - (valorDigito % 11) >= 10 ? 0 : 11 - (valorDigito % 11);
        cpf.push(digito);
 
        multiplicacaoCpf.unshift(11);
        calcularDigitos(cpf, multiplicacaoCpf);
    }
})();