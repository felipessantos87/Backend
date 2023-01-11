const express = require("express");
const { jogadaDaVez, removerJogador, adicionarJogador } = require("./controladores/rodadas");

const rotas = express();


rotas.get("/", jogadaDaVez);
rotas.get("/remover",removerJogador)
rotas.get("/adicionar", adicionarJogador)

module.exports = rotas;