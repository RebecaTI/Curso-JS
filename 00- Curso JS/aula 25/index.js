const numero = 8;

if (numero < 10) {      //Essa linha será executada sozinha sem as demais de mais por não ter o if else
    console.log( 'O numero é menor q 10')
}

if (numero >= 0 && numero <= 5) {
    console.log('O numero esta entre o 0 e o 5')
} else if (numero >= 6 && numero <=8){
    console.log('O numero esta entre 0 6 e o 8')
} else if (numero >= 9 && numero <= 11) {
    console.log('O numero esta entre o 9 e o 11')
} else {
    console.log('O numero NAO esta entre 0 e 11')
}