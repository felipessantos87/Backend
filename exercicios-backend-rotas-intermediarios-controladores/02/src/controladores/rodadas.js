const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let i = 0;

const jogadaDaVez = (req, res) => {
    const nomeJogador = jogadores[i];
    i++;

    if (i >= jogadores.length) {
        i = 0;
    }
    return res.send(`É a vez de ${nomeJogador} jogar!`);
};

const removerJogador = (req, res) => {
    const indiceDoArray = Number(req.query.indice);

    if (indiceDoArray >= jogadores.length) {
        return res.send(`Não existe jogador no índice informado (${indiceDoArray}) para ser removido.`);
    }
    
    jogadores.splice(indiceDoArray, 1);

    return res.send(jogadores);
};

const adicionarJogador = (req, res) => {
    let nomeAdicionar = req.query.nome;
    const indiceDoArray = Number(req.query.indice);

    nomeAdicionar = `${nomeAdicionar[0].toUpperCase()}${nomeAdicionar.slice(1).toLowerCase()}`;

    if (isNaN(indiceDoArray)) {
        jogadores.push(nomeAdicionar);
        return res.send(jogadores);
    }

    if (indiceDoArray >= jogadores.length) {
        return res.send(`O índice informado (${indiceDoArray}) não existe no array. Novo jogador não adicionado.`);
    }

    jogadores.splice(indiceDoArray, 0, nomeAdicionar);
    return res.send(jogadores);
};

module.exports = {
  jogadaDaVez,
  adicionarJogador,
  removerJogador,
};