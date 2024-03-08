(function() {
    // const random = num => Math.random() * num;
    //Pra tirar as casas decimais
    // const random = num => Math.floor(Math.random() * num)
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);  //Declarando o min e o max
    const nomes = ['Luiz', 'Maria', 'Helena'];
    console.log(nomes[random(0, nomes.length)]);
})();



