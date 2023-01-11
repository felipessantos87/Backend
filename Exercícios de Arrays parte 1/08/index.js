const numeros = [3, 24, 1, 8, 11, 7, 15];
let superior = 0;

for (algarismos of numeros) {
    if (algarismos > superior) {
        superior = algarismos;
    }
}
console.log(`Esse é o maior número : ${superior}`);