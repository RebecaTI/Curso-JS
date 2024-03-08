var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames[0];
videoGames[1];
// videoGames.pop();
// videoGames.push('3DS');
// videoGames.length;

for(var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);  
  if(videoGames[item] === 'PS4'){
    break;
  }
}

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva']

frutas.forEach(function(fruta, index){
  frutas.pop()
  console.log(fruta, index)
})