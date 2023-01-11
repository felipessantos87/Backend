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

for (let i = 0; i < usuarios.length; i++) {
    const verificaIdade = usuarios[i];
    if (verificaIdade.idade >= 18) {
        verificaIdade['maior_Idade'] = true
    } else {
        verificaIdade['maior_Idade'] = false
    }
}

console.log(usuarios);