//Declaraçãp de função (Function hoisting)
falaOi()
function falaOi() {
    console.log('Oie');
}

//first-Class objets (Objetos de primeira classe) A função pode ser tratada em JS ou em outras unidades de programação, vc pode tratar as funções como dado.

//Funcition expression
const souUmDado = function (){
    console.log('Sou um dado.')
}

function executaFuncao(funcao) {
    console.log('Vou executar sua funcao abaixo.')
    funcao()
}
executaFuncao(souUmDado)


//Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto
const objeto = {
    falar () {
        console.log('Estou falando...')
    }
};
objeto.falar()