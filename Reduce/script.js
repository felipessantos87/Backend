const array = [0, 1, 2, 3, 4];

//Como somar todos os números de um array usando o for.
//let somaTotal = array[0];

//for (let i = 1; i < array.length; i++) {
//    const elementoAtual = array[i];

//    somaTotal = somaTotal + elementoAtual;
//}

//console.log(somaTotal);

const valorReduce = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
});

console.log(valorReduce);

const valorReduce2 = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
}, 10);

console.log(valorReduce2);