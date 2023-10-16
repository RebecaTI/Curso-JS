function troca2(livros, atual){
    let livroAtual = livros[atual];
    let livroMenorPreco= livros[menor];

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}