/*
Seu nomero é 55   negrito e font size 2m, maiuscula
numero é inteiro: 
Raiz quadrada:
é NaN:
Arredondando para baixo: 
Arredondando para cima:
Com duas casas decimais: 55.00
*/
const texto = document.querySelector('#seu-numero');
const num = prompt('Digite um numero:');

texto.innerHTML += `<strong>Seu numero é: ${num}<br/></strong>`;
texto.innerHTML += `Raiz quadrada: ${num ** 0.5}<br/>`;
texto.innerHTML += `É NaN: ${isNaN(num)} <br/>`;
texto.innerHTML += `${num} é inteiro: ${Number.isInteger(num)}<br/>`
texto.innerHTML += `Arredondado para baixo: ${Math.floor(num)}<br/>`;
texto.innerHTML += `Arredondado para cima: ${Math.ceil(num)}<br/>`
texto.innerHTML += `Com duas casas decimais: ${Number(num).toFixed(2)}<br/>`





