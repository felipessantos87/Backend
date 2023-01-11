const express = require('express');
const { obterLivros, obterLivrosPorId, cadastrarLivro, alterarLivro, alterarParteDoLivro, excluirLivro } = require('./controladores/livros');

const rotas = express();

rotas.get('/livros', obterLivros);
rotas.get('/livros/:id', obterLivrosPorId);
rotas.post('/livros', cadastrarLivro);
rotas.put('/livros/:id', alterarLivro);
rotas.patch('/livros/:id', alterarParteDoLivro);
rotas.delete('/livros/:id', excluirLivro)

module.exports = rotas;