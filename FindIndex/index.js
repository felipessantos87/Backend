const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
    { nome: 'ranger', marca: 'ford', ano: '2020', cor: 'prata' },
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco' }     
];

const nomes = ['Felipe', 'Joyce', 'Luiz Antônio', 'Caio'];
const numeros = [1, 2, 3, 4];

//const resultado = carros.findIndex((carro) => {
//    return carro.nome === 'ranger';
//});

//const resultado = nomes.findIndex((nome) => {
//    return nome === 'Joyce';
//});

const resultado = numeros.findIndex((numero) => {
    return numero === 3;
});

console.log(resultado);