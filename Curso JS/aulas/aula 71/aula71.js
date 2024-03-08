// defineProperty -> para definir UMA propriedade
//defineProperties -> para definir VARIAS propriedades de uma vez

// ---------- defineProperty  -------------------
function Produto(nome, preco, estoque){   //Se quero q a propriedade estoque fik travada
    this.nome = nome;
    this.preco = preco;
    //forçar que o estoque não possa ser alterada 

    Object.defineProperty(this, 'estoque', {
        enumerable: true,    //Para ser exibido, mostrar a chave
        // value: estoque,      //Para pegar o valor da propriedade estoque
        value: function() {
            return estoque;
        }, //valor
        writable: false,     //Eu posso alterar o valor dessa propriedade estoque?
        configurable: false  //Pode apagar ou reconfigurar a chave?
    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
delete p1.estoque;      //Não irá apagar pq o configurable está false
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave)
}


//         ----------- defineProperties  ----------------

function Produto2(nome2, preco2, estoque2) {
    
    Object.defineProperties(this, {
        nome2: {
            enumerable: true,
            value: nome2,
            writable: true,
            configurable: true
        },
        preco2: {
            enumerable: true,
            value: preco2,
            writable: true,
            configurable: true
        },
    });
}

const p2 = new Produto2('Sushi', 19, 300);
console.log(Object.keys(p2));
for(let chave in p2) {
    console.log(chave)
}

