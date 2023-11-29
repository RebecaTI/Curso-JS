// ? : 
//? Valor para verdadeiro
//  : Valor para falso

const pontuacaoUsuario = 5000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario vip' : 'Usuario normal' ;

const corUsuario = 'pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)

// const pontuacaoUsuario = 5000;
// const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario vip' : 'Usuario normal' 
// console.log(nivelUsuario);

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuario vip')
// } else {
//     console.log('Usuario normal')
// }