//nomes.splice(indice, delete, elem1, eleme2)
//  Primero argumento -> ql indice qu qro começar a mexer
//  Segundo argumento -> qntos elementos qro remover
//  Terceiro argumento -> receber elementos para adicionar todos separados por virgula

//Simular o pop(remover o ultimo indice do meu elemento)
//Essa função splice retorna tbm o elemento removido assim como o pop, porem a unica dferença é q vai te retornar um array, ao invez de retornar o proprio elemento. Porque posso remover mais de um elemento

//              -5        -4       -3         -2        -1
//               0         1        2          3         4 
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

const removidos = nomes.splice(3, 2);
const removidos1 = nomes.splice(-2, 1);
console.log(nomes, removidos);


//Para remover de um lugar ate o fim do array
const nomes2 = ['Sebastiana', 'ana', 'joana', 'fabiola', 'airton', 'luan']
const removidos2 = nomes2.splice(-3, Number.MAX_VALUE)
console.log(nomes2, removidos2)


//Posso enviar coisas a serem adicionadas a partir do indice
const nomes3 = ['naruto', 'sasuke', 'sakura', 'kakashi', 'neji', 'lee'];
const removidos3 = nomes3.splice(3, 0, 'Luiz'); //Adicionar NO indice 3 Luiz
console.log(nomes3, removidos3);
const removidos3troca = nomes3.splice(1, 1, 'Novo', 'Novo2'); // Para trocar
console.log(nomes3, removidos3troca);


//Para simular o push
const nomes4 = ['Gutemberg', 'felipe', 'vitoria', 'sara'];
const removidos4 = nomes4.splice(nomes4.length, 0, 'Ritinha', 'Francisco', 'Zezinho');
console.log(nomes4, removidos4)

//Para simular unshift
const nomes5 =['Sakura', 'Mel', 'Mingau', 'Teo'];
const removidos5 = nomes5.splice(0, 0, 'Bethoven');
console.log(nomes5, removidos5);
