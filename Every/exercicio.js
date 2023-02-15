const usuarios = [
    { nome: 'Felipe', idade: 35 },
    { nome: 'Joyce', idade: 26 },
    { nome: 'Luiz Antônio', idade: 2 },
    { nome: 'Caio', idade: 30 }
];

const fiscalizarFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    });

    if (resultado) {
        console.log('Festa liberada!')
    } else {
        console.log('Possui menor de idade!')
    }
};

fiscalizarFesta(usuarios);