const usuarios = [
    { nome: 'Felipe', sobrenome: 'da Silva Santos', idade: 35 },
    { nome: 'Joyce', sobrenome: 'Peres Jacinto', idade: 26 },
    { nome: 'Luiz Antônio', sobrenome: 'Lauriano Peres', idade: 2 },
];

const novoArray = usuarios.map((usuario) => {
    return {
        nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`, idade: usuario.idade
    }
});

console.log(novoArray);