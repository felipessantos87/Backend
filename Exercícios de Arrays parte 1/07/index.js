const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const iniciadosComLetrasA = [];

for (let i of nomes) {
    if (i[0] === "a" || i[0] === "A") {
        iniciadosComLetrasA.push(i);
    }
}
console.log(`Esses são os nomes iniciados com a letra A : ${iniciadosComLetrasA}`);