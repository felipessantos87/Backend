/*function saudacao(callback) {
    const nome = 'Felipe';
    callback(nome);
}

function mensagem(nome) {
    console.log(`Bem vindo, ${nome}`);
}

saudacao(mensagem);*/
//Arrow function
//const saudacao = (callback) => {
//    const nome = 'Felipe';
//    callback(nome);
//}

//const mensagem = (nome) => {
//    console.log(`Bem vindo, ${nome}`);
//}

//saudacao(mensagem);

//saudacao(nome => {
//    console.log(`Bem vindo, ${nome}`)
//});

const imprimirDados = (funcaooCallback) => {
    const nome = 'Felipe Santos';
    const idade = 35;
    funcaooCallback(nome, idade);
}

//imprimirDados((nome, idade) => {
  //  console.log('A função callback foi executada');

//    if (nome) {
//        console.log(`Nome: ${nome}`);
//    }

//    if (idade) {
//        console.log(`Idade: ${idade}`);
//    }
//});//

const dados =(nome, idade) => {
    console.log('A função callback foi executada');

    if (nome) {
        console.log(`Nome: ${nome}`);
    }

    if (idade) {
        console.log(`Idade: ${idade}`);
    }
};

imprimirDados(dados);