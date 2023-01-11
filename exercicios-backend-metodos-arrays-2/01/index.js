const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const buscaLivro = livros.findIndex((livro) => {
    return livro === nomeDoLivro;
})+1;

console.log(`O livro está na posição ${buscaLivro}.`);