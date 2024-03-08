//Conjunto de variaveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: 'André',
  idade: 28,
  profissão: 'Designer',
  possuiFaculdade:true ,
}

var quadrado = {
  lados: 4,
  area(lado) {  //Isso é o mesmo que area:function(lado)...
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

var menu = {
  width:800,
  height:50,
  backgroundColor: '#84E',
  metadeHeight(){
    return this.height / 2;
  }
}
menu.backgroundColor = '#000';
menu.color='blue';
menu.esconder = function(){
  console.log('Esconder')
}
var bg = menu.backgroundColor;