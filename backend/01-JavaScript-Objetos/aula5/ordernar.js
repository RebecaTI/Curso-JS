const clientes = require("./clientes.json")

//Função de ordenação
function ordernar(lista, propriedade) {
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]){
            return -1
        }
        if (a[propriedade] > b[propriedade]){
            return 1
        }
        return 0
    })

    return resultado;
}

const ordenadoNome= ordernar(clientes,"nome")

console.log(ordenadoNome)

//sort vem do ingles ordernar