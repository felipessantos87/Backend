const express = require('express');
const {getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground');

const app = express();

app.get('/', async(req, res) => {
    const cidade = getCityFromZipcode('29317427');
    const cidade2 = getCityFromZipcode('29060490');

    //Promise.all só é usado se uma promessa não depender da outra.
    const promise = await Promise.all([cidade, cidade2]);

    // console.log(promise)

    const [resposta1, resposta2] = promise

    res.send(`As cidades encontradas foram: ${resposta1} e ${resposta2}`);
});

app.get('/pacote/:nomePacote', async (req, res) => {
    const { nomePacote } = req.params;

    const descricaoPacote = await getPackageDescriptionNpm(nomePacote);

    return res.send(descricaoPacote);
});

app.listen(3000);