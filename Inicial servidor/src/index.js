const express = require('express');
const { filtrarProfessores,
    encontrarUmProfessor } = require('./controladores/professores');

const app = express();

//intermediários independentes
const primeiroItermediario = (req, res, next) => {
    console.log('passei no primeiro intermediário');
    next();
};

const segundoIntermediario = (req, res, next) => {
    console.log('passei no segundo intermediário');
    next();
};

//intermediário na rota
const intermediarioDaRota = (req, res, next) => {
    console.log('passei no intermediário da rota');
    next();
};


app.use(primeiroItermediario);
app.use(segundoIntermediario);

//localhost:3000/professores
app.get('/professores',intermediarioDaRota, filtrarProfessores);

//localhost:3000/professores/:id
app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);