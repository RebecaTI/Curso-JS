// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll('img');
console.log(todasImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgComeca = document.querySelectorAll('img[src^="./assets/img/imagem"]');
console.log(imgComeca)

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]')
console.log(links)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelectorAll('.animais-descricao h2')
console.log(primeiroh2[0]);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]);