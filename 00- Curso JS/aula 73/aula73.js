/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop)
... (spread)

//Já vimos
Object.keys(retorna as chaves)
Object.freeze (congela o objeto)
Oject.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/

//-------------------------------------------------------------------
// const produto = { nome:'Produto', preco: 1.8};
// const caneca = {
//     ... produto,
//     material: "porcelana"       //Também posso adicionar coisas aqui dentro
// };

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// // produto.nome = 'Luiz otávio';
// console.log(produto)
// console.log(caneca);
//-------------------------------------------------------------------

//Object.assign({})
// const produto = { nome: 'Produto', preco: 1.8};
// const caneca = Object.assign({}, produto, {material: 'porcelana'});

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);


//-------------------------------------------------------------------
//Object.keys()
// const produto = { nome: 'Produto', preco: 1.8};
// const caneca = { nome: produto.nome, preco: produto.preco};
// console.log(Object.keys(produto))


//-------------------------------------------------------------------
//Object.freeze
// const produto = { nome: 'Produto', preco: 1.8};
// Object.freeze(produto)    //Usando esse metodo nao sera mais possivel mudar 
// produto.nome = 'outro nome';  //Essa mudança não ira acontecer graças ao object.freeze(produto)
// const caneca = { nome: produto.nome, preco: produto.preco};
// console.log(produto);

//-------------------------------------------------------------------
// Object.getOwnPropertyDescriptor()
// const produto = { nome: 'Produto', preco: 1.8};
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Qualquer coisa coisa'
// })
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// produto.nome = 'Outra coisa';
// delete produto.nome;
// console.log(produto)

//-------------------------------------------------------------------
// Object.keys         .values()             Object.entries()
const produto = { nome: 'Produto', preco: 1.8};
console.log(Object.values(produto));   //O valor da propriedade
console.log(Object.keys(produto));    //Esse metodo é para mostrar a chave das propriedades
console.log(Object.entries(produto));  // Esse metodoso mostrará as chaves e o valor das propriedades. Exibe com arrays 
//Tambem pode ser feito usando for
for(let entry of Object.entries(produto)) {
    console.log(entry)
}
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}
for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1])    //Se preferir pode iterar também. Dará o mesmo resultado da linha 77 ~ 79
}
