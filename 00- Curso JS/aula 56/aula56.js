// Factoru function
// Construtor function
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = "falando") {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        //Getter 
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.80, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala())

// console.log(p1.imc);


//Getters and setters are functions that allow you to get and set object values in JavaScript.

//THIS -> No contexto de execução global (fora de qualquer função), this refere-se ao objeto global, seja em modo estrito ou não.  
//Contexto de função, dentro de uma função, o valor de this depende de como a função é chamada.
//Funções Arrow (seta), nas arrow functions (funções seta), o this é definido lexicalmente, isto é, seu valor é definido pelo contexto de execução onde está inserido. Em um código global, this assume o objeto global:
//Como método de um objeto, quando uma função é chamada como um método de um objeto, seu this toma o valor do objeto pertencente ao método chamado.
