const numeros = [3, 20, 13, 50, 1, 13, 4, 2];
// ordena de acordo com a tabela unicode.
//numeros.sort();

//ordenação crescente
numeros.sort((a, b) => {
    if (a < b) {
        return -1; 
    }
    if (a > b) {
        return 1;
    }
    return 0;
});

console.log(numeros);

//odernação decrescente
numeros.sort((a, b) => {
    if (a < b) {
        return 1; 
    }
    if (a > b) {
        return -1;
    }
    return 0;
});

console.log(numeros);

//ordenação crescente sem uso das comparações
numeros.sort((a, b) => {
    return a - b;
});

console.log(numeros);

//ordenação descrecente sem uso das comparações
numeros.sort((a, b) => {
    return b - a;
});

console.log(numeros);