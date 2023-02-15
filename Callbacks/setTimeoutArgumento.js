const irmprimirMensagem = (nome, idade) => {
    console.log(`Olá ${nome}. Você tem ${idade} anos!`);
}

setTimeout(irmprimirMensagem, 2000, 'Felipe', 35)