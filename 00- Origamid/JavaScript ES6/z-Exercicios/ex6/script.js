// Retorne o url da página atual utilizando o objeto window
const href = window.location.href;
console.log(href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const classAtivo = document.querySelectorAll('.ativo');

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

if(linguagem === 'EN-us'){
  // codigo
}

// Retorne a largura da janela 
console.log(window.innerWidth);