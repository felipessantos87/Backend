const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

for (const lista of usuarios) {
    if (lista.pets.length >= 1) {
        console.log(`sou ${lista.nome} e tenho ${lista.pets.length} pets.`)
    } else {
        console.log(`sou ${lista.nome} e não tenho pets.`)
    }
}