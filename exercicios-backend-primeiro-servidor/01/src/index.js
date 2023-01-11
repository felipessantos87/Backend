const array = require('./array');

let lista = -1;

const express = (require('express'));

const app = express();

app.get('/', (resquisacao, resposta) => {
    lista++;
    resposta.send(`É a vez de ${array[lista]} jogar !`);

    if (lista === array.length - 1) {
        lista = -1;
    }
});

app.listen(3000);