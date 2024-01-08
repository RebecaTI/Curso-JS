// Função construtora -> objetos
// Funcção fabrica - objetos
// Construtora -> Pessoa (new)



//Construtora
function Pessoa(nome, sobrenome) {
    // Atributos ou metodos privador
    const ID = 1235;
    const metodoInterno = function() {

    };
    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome +  ' : sou um metodo');
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();
