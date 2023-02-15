const finalDaCopa = new Date(2002, 5, 30, 8);
const inicioTimestamp = +finalDaCopa;

const primeiroGoTimestamp = inicioTimestamp + (45 + 15 + 22) * 60 * 1000;
const primeiroGolDate = new Date(primeiroGoTimestamp);

console.log(primeiroGolDate);

console.log(new Date(+finalDaCopa + (45 + 15 + 38) * 60 * 1000));