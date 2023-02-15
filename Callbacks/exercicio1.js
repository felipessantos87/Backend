const informarDadosUsuarios = (callback) => {
    const nome = 'Felipe Santos';
    const idade = 35;
    callback(nome, idade);
}

const funcaoCallback = (nome, idade) => {
    console.log(`Olá, ${nome}`);

    if (idade) {
        const anoAtual = new Date().getFullYear();
        console.log(`Você nasceu em ${anoAtual - idade}`);
    }
}

informarDadosUsuarios(funcaoCallback);