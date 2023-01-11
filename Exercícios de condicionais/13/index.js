//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let precoComDesconto;

if(tipoDePagamento === "credito") {
    precoComDesconto = valorDoProduto * 95 / 100;
} else if (tipoDePagamento === "cheque") {
    precoComDesconto = valorDoProduto * 97 / 100;
} else if (tipoDePagamento === "dinheiro") {
    precoComDesconto = valorDoProduto * 90 / 100;
}
console.log(`Valor a ser pago: R$ ${(precoComDesconto / 100).toFixed(2)}`)