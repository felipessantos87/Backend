const carros = [
    { nome: 'corrola', marca: "toyota", ano: "2020", cor: "prata" },
    { nome: 'argo', marca: "fiat", ano: "2021", cor: "preto" },
    { nome: 'ranger', marca: "ford", ano: "2021", cor: "prata" },
    { nome: 'hilux', marca: "toyota", ano: "2018", cor: "branco" }
];

const ordenarCarros = (arrayCarros, campoOrdencao) => {
    arrayCarros.sort((primeiro, segundo) => {
        return primeiro[campoOrdencao].localeCompare(segundo[campoOrdencao])
    });
    console.log(arrayCarros)
};

ordenarCarros(carros, 'marca');