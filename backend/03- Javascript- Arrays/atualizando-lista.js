const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo");

console.log(nomes);

//O primeiro parâmetro do método splice() é o índice do elemento que queremos remover. Portanto, para remover o nome de Ana, passamos o índice 1:
//O segundo parâmetro é a quantidade de itens que queremos remover a partir desse índice. Logo, para remover o nome de Ana e de Caio, informaremos o valor 2:
//O método splice() aceita um terceiro parâmetro.Então, vamos colocar a string "Rodrigo": Assim, vamos remover os nomes de Ana e Caio, e inserir Rodrigo no lugar. Após salvar o arquivo, vamos executá-lo no terminal: