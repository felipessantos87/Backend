const original = [5, 7, 13, 17, 26, 34, 118, 245];
const numerosCriados = [];

for (let algarismo of original) {
    if (algarismo >= 10 && algarismo <= 20 || algarismo >= 100) {
        numerosCriados.push(algarismo);
    }
}
console.log(numerosCriados);
