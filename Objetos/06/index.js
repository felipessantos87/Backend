const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = [];
const adultos = [];

for (let verificarIdade of usuarios) {
    if (verificarIdade.idade < 18 && verificarIdade.idade >= 0) {
        jovens.push(verificarIdade);
    } else {
        adultos.push(verificarIdade);
    }
}

console.log(jovens);
console.log(adultos);