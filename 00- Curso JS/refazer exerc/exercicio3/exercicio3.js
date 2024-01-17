/*
const num1 = prompt('Digite um numero: ');
const num1 = prompt('Digite outro numero: ');
const resultado = num1 + num2
alert('O resultado de &{num1} + &{num2} é : &{resultado})

usar a conta de + . pq vai precisar converter as strings para numeros
*/

const num1Input = prompt('Digite um numero: ');
const num2Input = prompt('Digite outro numero: ');

const num1 = Number(num1Input);
const num2 = Number(num2Input);

const resultado = (num1, num2) => num1 + num2;

function saoNumeros() {
    if (isNaN(num1) || isNaN(num2)) {
        return alert("Digite apenas numeros");
    } else {
        return alert(num1 + num2);
    }
}

saoNumeros();

/*
Irei fazer conversao das strings em number
fazer uma funtion p calcular
fazer uma function para verificar se são numeros 
*/