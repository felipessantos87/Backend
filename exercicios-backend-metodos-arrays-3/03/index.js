const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorInteiro = numeros.reduce((acumulador, elementoAtual) => {
    let resultado = acumulador;
    if (elementoAtual > resultado) {
        resultado = elementoAtual
    }
    return resultado;
});

console.log(maiorInteiro);
