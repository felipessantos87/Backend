const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const verificaLista = (produtos) => {
    const resultado = produtos.some((produto) => {
        return produto === 'cerveja' || produto ==='vodka';
    });
    if (resultado) {
        console.log('revise sua lista, joão. possui bebida com venda proibida!');
    } else {
        console.log('tudo certo, vamos as compras!')
    }
}
verificaLista(palavras);