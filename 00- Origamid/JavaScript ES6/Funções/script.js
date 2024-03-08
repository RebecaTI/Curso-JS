function areaQuadrada(lado) {
  return lado * lado;
}

console.log(areaQuadrada(10))

function pi(){
  return 3.14;
}
var total = 5 * pi();
console.log(pi())

function imc(peso, altura){
  var imc = peso / (altura * altura);
  return imc
}

console.log(imc(80, 1.67));

function corFavorita(cor){
  if(cor === 'Azul'){
    return 'Eu gosto do céu';
  } else if(cor === 'verde'){
    return 'eu gosto de grama';
  } else {
    return 'Eu não gosto de cores';
  }
}
function mostraConsole() {
  console.log('oi')
}

addEventListener('click', mostraConsole);

function terceiraIdade(idade){
  console.log(typeof idade);
  if(typeof idade !== 'number'){
    return 'Por favor preencha com um número'
  }
  if(typeof idade !== 'number'){
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(60));

function faltaVisitar(paisesVisitados){
  var totalPaises = 193;
  return `falta visitar ${totalPaises - paisesVisitados} países`;
}

var profissão ='Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados(){
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissão}`
  }
  return outrosDados();
}

console.log(dados());