// defineProperty  Getter e Setter

function Produto(nome, preco, estoque){   //Se quero q a propriedade estoque fik travada
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: false,
        get: function() {  //O trabalho do getter é so pegar o valor e exibir 
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number'){
                throw new TypeError('Mensagem')
            }
            estoquePrivado = valor;
        }    
    });
}

function criaProduto(nome) {     //FACTORY FUNCTION
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '') //Para tirar o coisa. da linha 41
        nome = valor
        }
    }
}

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
// p1.estoque = "DFDFD";
// console.log(p1.estoque)

const p2 = criaProduto('Gatinhos')
p2.nome ='Qualquer coisa.'
console.log(p2.nome);





// Getter e Setter seria uma maneira q eu tenho de proteger a minha propriedade
// Getter  -> obter valor
// Setter  -> configurar valor


