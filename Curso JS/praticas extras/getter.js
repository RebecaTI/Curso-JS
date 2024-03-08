// getter -> A sintaxe de get associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada.

var log = ["test"];
var obj = {
    get latest() {
        if(log.length == 0) return undefined;
        return log[log.length -1];  //Explicação abaixo sobre esse -1
    },
};
console.log(obj.latest);

//Se você quer remover um getter, você pode apenas utilizar delete.   JS ===== delete obj.latest;

// Explicação ====> When you remove the -1 you're indexing past the end of the array which is undefined.
//The length is 1 but the highest index is 0. Your array contains 1 item, the word "test"

