//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorParcelado = (valorDoProduto / quantidadeDoParcelamento) / 100;
const parcelasQuitas = valorPago / valorParcelado;
console.log(`Restam ${quantidadeDoParcelamento - parcelasQuitas} parcelas de R$ ${valorParcelado.toFixed(2)} reais.`)