const notas = [10, 9.5, 8, 7, 6]

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
})
//Operador ternario. Nota +1 é maior ou igual a 10 ?(a interrogação depois dessa condição), dpois do ponto de interrogação vou dizer oq eu vou qrer retornar se a condição for verdadeira. Vou retornar nota +1 caso minha nota n seja igual ou mais a 10

console.log(notasAtualizadas)