const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
resumoDoCliente: function () {
        console.log(`Cliente: ${this.nomeDoCliente}
        Total de intens: ${this.contabilizaTotal()};
        Total a pagar: RS${this.contabilizaTotalAPagar()}`);
    },
incluirPecas: function (pecas) {
        let indicePecasExistente = -1;
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === pecas.id) {
                indicePecasExistente = i;
                break;
            }
        }
    if (indicePecasExistente === -1) {
        this.produtos[this.produtos.length] = pecas;
    } else {
        this.produtos[indicePecasExistente].qtd += pecas.qtd;
        }
    },
imprimeDetalhes: function () {
    console.log(this.nomeDoCliente);
    console.log();
    for (let itens = 0; itens < this.produtos.length; itens++) {
        console.log(`Item ${itens + 1} - ${this.produtos[itens].nome} - ${this.produtos[itens].qtd} und - R$ ${this.produtos[itens].precoUnit / 100 * this.produtos[itens].qtd} `);
        }
        console.log();
        console.log(`Total de intens: ${this.contabilizaTotal()}
        Total a pagar: RS${this.contabilizaTotalAPagar() / 100}`);
    },
contabilizaTotal: function () {
    let totalDeItens = 0;
    for (let itens of this.produtos) {
        totalDeItens += itens.qtd;
        }
        return totalDeItens;
    },
contabilizaTotalAPagar: function () {
    let valorAPagar = 0;
    for (let itens of this.produtos) {
        valorAPagar += itens.qtd * itens.precoUnit;
        }
        let valorAPagarTexto = valorAPagar / 100;
        return valorAPagar;
    },
calcularDesconto: function () {
    let valorAPagar = this.contabilizaTotalAPagar();
    let totalDeItens = this.contabilizaTotal();
    let descontoPorItens = 0;
    let descontoPorTotal = 0;

    if (totalDeItens > 4) {
        descontoPorItens = this.produtos[0].precoUnit;
        for (let i = 1; i < this.produtos.length; i++) {
            if (this.produtos[i].precoUnit < descontoPorItens)
            descontoPorItens = this.produtos[i].precoUnit;
            }
        }
    if (valorAPagar > 10000) {
        descontoPorTotal = valorAPagar * 0.1;
        }
        return descontoPorItens > descontoPorTotal ? descontoPorItens : descontoPorTotal;
    }
}

console.log(carrinho.calcularDesconto() / 100);

const novaBermuda = {
        id: 2,
        nome: "Bermuda",
        qtd: 7,
        precoUnit: 1000
}

carrinho.incluirPecas(novaBermuda);

const novoTenis = {
        id: 3,
        nome: "Tenis",
        qtd: 3,
        precoUnit: 8000
}

carrinho.incluirPecas(novoTenis);
console.log(carrinho.calcularDesconto() / 100);
carrinho.resumoDoCliente();
carrinho.imprimeDetalhes();