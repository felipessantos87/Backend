// require uso para importação de biblioteca
//const lodash = require('lodash');

const { uniq } = require('lodash');

//require uso para importar arquivo
//const array = require('./array');

const { arrayNumeros, arrayLetras } = require('./array');

console.log(arrayLetras);
console.log(arrayNumeros);

const arrayNumeroUnico = uniq(arrayNumeros);
const arrayLetraUnica = uniq(arrayLetras);

console.log(arrayNumeroUnico);
console.log(arrayLetraUnica);