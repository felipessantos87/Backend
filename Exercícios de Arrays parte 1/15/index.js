const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let algoritmos of original) {
    if (algoritmos % 2 === 0) {
        pares.push(algoritmos);
    } else {
        impares.push(algoritmos);
    }
}
console.log(`Esse são os número pares ${pares}.`);
console.log(`Esse são os número impares ${impares}.`);