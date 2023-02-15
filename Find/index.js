const usuarios = [
    { nome: 'Felipe', idade: 35 },
    { nome: 'Joyce', idade: 26 },
    { nome: 'Luiz Antônio', idade: 2 },
    { nome: 'Caio', idade: 30 }
];

const nomes = ['Felipe', 'Joyce', 'Luiz Antônio', 'Caio']
//const resultado = usuarios.find((usuario) => {
//    return usuario.nome === 'Felipe';
//});
const resultado = nomes.find((nome) => {
    return nome === 'Felipe';

});
console.log(resultado);