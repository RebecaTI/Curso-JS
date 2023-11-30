const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]
const {tag, texto} = elementos
console.log(elementos)
for (i = 0 ; i < elementos.length ; i++) {
    console.log(`Esses são os textos: ${elementos.tag}`)
}