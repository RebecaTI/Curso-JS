const objPersonagem = {
    nome: 'Gandalf',
    classe: 'mago',
    nivel: 20,
    aliado: {
        nome: 'Saruman',
        classe: 'mago',
    },
    status: 'desaparecido'
}

//Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:

delete objPersonagem.aliado

console.log(objPersonagem.aliado)

//Também é possível utilizar a notação de colchetes:
delete objPersonagem['status']

console.log(objPersonagem.status)