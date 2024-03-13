const href = window.location.href;

console.log(href);
if(href === 'http://127.0.0.1:5500/00-%20Origamid/JavaScript%20ES6/DOM/index.html') {
  console.log('É igual')
}

const h1Selecionado = document.querySelector('h1');


h1Selecionado.addEventListener('click', callbackh1)
function callbackh1(){
  console.log('clicou em ', h1Selecionado.innerText)
}


/*
const titulo = document.querySelector('h1')
titulo.innerText; //retorna o texto
titulo.classList;//retorna as classes;
titulo.id;//retora o ID
titulo.offsetHeight;//retorna a altura
titulo.addEventListener('click', callback)
*/