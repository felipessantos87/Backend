const express = require('express');
const { }= require('./controladores/calcularFrete')

const rotas = express();

rotas.get('/produtos');

module.exports = rotas;