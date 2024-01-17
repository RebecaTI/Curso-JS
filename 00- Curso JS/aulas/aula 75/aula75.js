/*
// new Object  ->  Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // Se caso eu quiser que ao invez de proto ser Object.prototype eu quero q proto seja p objeto objA
    // Tem uma função especifica no JS
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveB);
*/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

//Literal
const p2 = {
    nome: 'Caneca' ,
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

// p1.desconto(100);
p2.aumento(10);

//Uma forma de fazer
// const p3 = Object.create(Produto.prototype);
// p3.preco = 113;
// p3.aumento(10);
// console.log(p3);

//Outra forma de fazer
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    },
});

p3.aumento(10);

console.log(p3)