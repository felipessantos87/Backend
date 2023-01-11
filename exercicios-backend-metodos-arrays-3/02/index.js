const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const buscarCidade = cidades.reduce((acumulador, elementoAtual) => {
    let maiorString = acumulador;

    if (elementoAtual.length > maiorString.length) {
        maiorString = elementoAtual
    }
    return maiorString
});

console.log(buscarCidade);