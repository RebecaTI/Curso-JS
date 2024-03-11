var numero = 20;
var numero2 = 10;
numero += numero2;
console.log(numero);

var idade = 20;
var possuiDiabetes = false;

var podeBeber;
podeBeber = (idade >= 18 && !possuiDiabetes) ? true : false;
/*Não faz sentido retornar valores boelanos em um operador ternário. Poque ele já faz isso. 
podeBeber = (idade >= 18 && !possuiDiabetes)
Faz sentido vc retornar um número, string
podeBeber = (idade >= 18 && !possuiDiabetes) ? 'pode beber' : 'não pode beber';
*/
console.log(podeBeber);


var possuiFaculdade = true;
if(possuiFaculdade) console.log('Sim, possui')
else console.log('Não possui');