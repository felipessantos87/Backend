const express = require('express');
const { get, getId } = require('./controladores/imoveis');
const rotas = express();

rotas.get('/imoveis', get);
rotas.get('/imoveis/:id', getId);

module.exports = rotas;