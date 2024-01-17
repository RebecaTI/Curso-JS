//FUNÇÕES CONSTRUTORAS



function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error ('x e y precisam ser números')
    }

    return x + y;
}
try {
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch (error) {
    //console.log(error)
    console.log('Alguma coisa mais amigavel')
}



// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw('x e y precisam ser números')
//     }

//     return x + y;
// }
// try {
//     console.log(soma(1, 2))
//     console.log(soma('1', 2))
// } catch (error) {
//     console.log(error)
// }


//Tente usar esse bloco, caso ocorra algum erro aqui eu preciso que caia em outro bloco
// try {
//     console.log(naoExisto);
// } catch(err) {
//     console.log('naoExisto não existe');
//     console.log (err)
// }
