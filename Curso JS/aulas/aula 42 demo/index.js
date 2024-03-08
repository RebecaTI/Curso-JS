//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem(number)
//Retorne true se a imagem estiver no modo paisagem
//imagem paisagem = horizontal
//imagem nao paisagem = vertical

//RESOLUÇÃO DO PROFESSOR ------------------------

const ePaisagem = (largura, altura) => largura > altura
console.log(ePaisagem(1080, 1920))


// function ePaisagem(largura, altura) {
//         return largura > altura 
//     }
//     console.log(ePaisagem(1920, 1920))


// function ePaisagem(largura, altura) {
//     return largura > altura ? true : false
// }
// console.log(ePaisagem(1920, 1080))
// //Estamos checando uma coisa q já vai retornar ou true ou false, não precisaria escrever true ou false. Só precisamos retornar a condição

//----------------------------------------------------

//RESOLUÇÃO DOS ALUNOS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// ePaisagem = (largura, altura) => largura > altura ? "Paisagem" : "Retrato"
// console.log(ePaisagem(200, 500))


// const resolucaoImg = {altura: 800 , largura: 1600};
// const ePaisagem = () =>{
//     const {altura, largura} = resolucaoImg;
//     const resultado = largura > altura ? true : false;
//     console.log(resultado)
// }
// ePaisagem()


// function ePaisagem(largura, altura) {
//     if (largura > altura) return true;
//     return false;
// }
// console.log(ePaisagem(600, 300))

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//MINHA RESOLUÇÃO (CERTO, MAS LONGO) ================ ==== ======

// function ePaisagem(largura, altura) {
//     if(largura > altura){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(ePaisagem(800, 400))


//  =================================================