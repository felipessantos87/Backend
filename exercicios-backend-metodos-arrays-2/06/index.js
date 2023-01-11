const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
];

const verificaCidade = cidades.filter ((cidade) => {
    const cidadesEncontradas =  cidade.length;
    return cidadesEncontradas <= 8;
});

console.log(verificaCidade.join(','));