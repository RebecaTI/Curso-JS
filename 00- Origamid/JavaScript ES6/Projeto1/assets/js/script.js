const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
// menu.classList.toggle('azul');

if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

// menu.className = 22; //substitui as class existentes

console.log(menu.className);
// console.log(menu.classList);
