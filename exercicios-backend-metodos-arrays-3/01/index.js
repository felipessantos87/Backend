//Ordenar o array abaixo em ordem crescente
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

numeros.sort((a, b) => {
    return a - b;
});

console.log('Crescente:', numeros);
console.log('-----------');

//Ordenar o array abaixo em ordem decrescente
numeros.sort((a, b) => {
    return b - a;
});

console.log('Decrescente', numeros);
console.log('-----------');

//Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código Unicode
numeros.sort();
console.log('Crescentes Unicode', numeros);
console.log('-----------');

//Ordenar o array abaixo em ordem alfabética.
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

frutas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log('Crescente', frutas);
console.log('-----------');

//Ordenar o array abaixo em ordem alfabética decrescente.
frutas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log('Decrescente', frutas);
console.log('-----------');

// Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais).
frutas.sort((a, b) => {
    return a.length - b.length;
});

console.log('Crescente por quantidade de letras', frutas);
console.log('-----------');