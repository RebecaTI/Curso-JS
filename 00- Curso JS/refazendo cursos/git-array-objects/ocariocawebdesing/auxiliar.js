/*
https://gist.github.com/ocariocawebdesign/8eff9f3df894b54c8e63ab4a50cc2f63 
*/
/* Arrays, Objetos, loops e forEach  --------------------*/

const marcaPedal = ["Boss", "Digitech", "Mooer", "Ibanez"];

//Array com Objetos
const pedaisGuitarra = [
  {
    modelo: "DS-1",
    marca: marcaPedal[0],
    ano: "1978",
    madeIn: "Japão",
    tipo: "Distorção",
  },

  {
    modelo: "SD-1",
    marca: marcaPedal[0],
    ano: "1980",
    madeIn: "Japão",
    tipo: "Overdrive",
  },

  {
    modelo: "Super Phaser",
    marca: marcaPedal[1],
    ano: "1992",
    madeIn: "Japão",
    tipo: "Modulação",
  },

  {
    modelo: "Tube Screamer",
    marca: marcaPedal[3],
    ano: "1976",
    madeIn: "Japão",
    tipo: "Overdrive",
  },
];

const modeloDoPedal = pedaisGuitarra[2].modelo; // Atribui o valor do array com o objeto[2] e o modelo
const butaoMostrar = document.querySelector("#mostrar");
const marcaDoPedal = document.querySelector("#marcaPedal").value;
const btn1 = document.querySelector("#btn1");

function mostrar() {
  console.log(marcaDoPedal, modeloDoPedal);
  result.innerHTML = `Essa é a marca: ${marcaDoPedal} e esse é o modelo: ${modeloDoPedal}`;
}

btn1.addEventListener("click", mostrar);

const result = document.querySelector("#result");

butaoMostrar.addEventListener("click", () => {
  result.innerHTML = `modelo do pedal: ${pedaisGuitarra[0].modelo} | marca do pedal: ${pedaisGuitarra[0].marca}`;
});

console.log(
  `modelo do pedal: ${pedaisGuitarra[0].modelo} | marca do pedal: ${pedaisGuitarra[0].marca}`
);

//Usando o forEach
marcaPedal.forEach((item, index, array) => {
  console.table(`Item: ${item} e o Array: ${array}`);
  console.log(`Usando FOREACH: ${item}. ${index}. ${array}`);
  //console.table(array);
});

//Usando o for para percorrer a array mais usual com uma array simples
for (let index = 0; index < marcaPedal.length; index++) {
  console.log(`Unsado FOR: ${index}. ${marcaPedal[index]}`);
  if (marcaPedal[index] == "Mooer") break;
}

//Usando o forin para percorrer a array com objetos
for (let pedal in pedaisGuitarra) {
  console.log(`Usando FORIN: ${pedaisGuitarra[pedal].modelo}`);
}

//Usando map.

const precos = [250, 350, 450, 540];
precos.forEach((item) => {
  //console.log(item);
  const promocao = item / 2;

  console.log(promocao);
});

//OBS:
//Array likes são listas que parecem arrays. HTMLCollection ou NodeList
//No caso da HTMLCollection ela não possue os métodos de um array então é preciso
// converter para uma array com Array.from(arraylike)

/*Classes e atributos---------------------------------------------*/

const menu = document.querySelector("#menu");

menu.className; //string
menu.classList; // Lista de classes
menu.classList.add("ativo"); // adiciona uma classe
menu.classList.add("ativo", "mobile"); // adiciona mais classe
menu.classList.remove("ativo"); //Remove a classe
menu.classList.toggle("ativo"); // Remove e ativa a classe
menu.classList.contains("ativo"); // true ou false
menu.classList.replace("ativo", "desativo"); // dá um replace na classe

//Exemplo

const imagens = document.querySelectorAll(".produtos");

imagens.forEach((item) => {
  item.classList.add("class-pointer");
  const estado01 = item.classList.contains("img-opacity");
  if (estado01 === false) {
    item.addEventListener("mouseenter", () => {
      item.classList.toggle("img-opacity");
      imagens[0].getAttribute("title", "Acesse esse produto");
    });
  }
});
//animate__animated animate__pulse
/*-----getAttribute e setAttribute---------*/

img.getAttribute("src"); // Valor so src
img.setAttribute("alt", "Texto alternativo"); // muda o alt
img.hasAttribute("id"); //true ou false
img.remove.Attribute("alt"); // remove o alt
img.hasAttributes(); //true ou false se tem atributos

/*------------------------------*/
//Eventos

//Mudando a cor clicando no "f"
function handleKeyboard(event) {
  if (event.key === "f") {
    document.body.classList.toggle("azul");
  }
}
window.addEventListener("keydown", handleKeyboard);

//-------------------------------------
//Moda com click e arrowFunction
const butao = document.querySelector("#trocacor");
console.log(butao);
butao.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//Outro exemplo de eventos
const imgs = document.querySelectorAll("img");

function handleImg(event) {
  console.log(event.currentTarget.getAttribute("src"));
}

imgs.forEach((img) => {
  console.log(img);
  img.addEventListener("click", handleImg);
});

//Evento Exemplo

//Peguei todas os links internos com o final '#'
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);

//Criei a função do evento
function addClassLink(event) {
  //Previni o comportamento padrão do elemento
  event.preventDefault();
  //forEach na lista de links
  linksInternos.forEach((link) => {
    //Aqui pegou cada item e remove se a classe "ativo" estiver ativa
    // no link
    link.classList.remove("ativo");
  });
  //Aqui o evento adicona a classe exatamente ao link
  event.currentTarget.classList.add("ativo");
}
//Fora da função do evento
//fez um forEach nos links novamento
//e faz o evento click chamando a função
linksInternos.forEach((link) => {
  link.addEventListener("click", addClassLink);
});

//Exemplo

function handleEventBody(event) {
  //console.log(event.currentTarget);
  event.currentTarget.remove();
}

const elementosSite = document.querySelectorAll("body *");
console.log(elementosSite);

elementosSite.forEach((item) => {
  item.addEventListener("click", handleEventBody);
});


(function () {
  "use strict";

  var btnSetItem = document.querySelector(".btnSetItem");

  function setLocalStorage() {
    btnSetItem.addEventListener("click", () => {
      localStorage.setItem("nome", "Jack Sparrow");
    });
  }
  setLocalStorage();
})();