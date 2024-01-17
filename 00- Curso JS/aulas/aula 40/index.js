const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
do {
    let numero = numeros[i];

    if(numero === 2) {
        console.log('Pulei o numero 2')
        i++;
        continue;
    }

    console.log(numero)

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        i++;
        break;
    }
    i++;
} while ( i < numeros.length)



// for (let numero in numeros) {
//     let numero = numeros[i];

//     if (numero === 2 || numero === 5) {
//         console.log('Pulei numero 2 e 5');
//         continue;  //continue para a proxima iteraçao. Ele pula para a proxima iteração do laço
//     }

//     if (numero === 7){
//         break; //Isso serve para quebrar o laço. NÃO ira executar o 7, para executar o codigo abaixo tem q estar antes desse if
//     }
//     console.log(numero);  //Colocar o continue antes da ação q esta executando

// }


// for (let numero of numeros) {

//     if (numero === 2 || numero === 5) {
//         console.log('Pulei numero 2 e 5')
//         continue;  //continue para a proxima iteraçao. Ele pula para a proxima iteração do laço
//     }

//     if (numero === 7){
//         break; //Isso serve para quebrar o laço. NÃO ira executar o 7, para executar o codigo abaixo tem q estar antes desse if
//     }
//     console.log(numero)  //Colocar o continue antes da ação q esta executando

// }