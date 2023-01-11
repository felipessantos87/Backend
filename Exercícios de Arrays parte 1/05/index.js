const original = [1, 4, 12, 21, 53, 88, 112];
const pares = [];

for (let algarismos of original) {
    if (algarismos % 2 === 0) {
        pares.push(algarismos);
    }
}
console.log(`Esse são os números pares: ${pares}`)