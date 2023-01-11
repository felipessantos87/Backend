const contaBacaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

depositoBancario: function (quantia) {
        this.saldo += quantia;
        this.historicos[this.historicos.length] = {
            tipo: "Depósito",
            quantia: quantia
        }
        return `Deposito de R$${quantia / 100} realizado para o cliente: ${this.nome}.`;
    },
saqueBancario: function (quantia) {
        if (quantia > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}.`;
        } else {
            this.sacar -= quantia;
            this.historicos[this.historicos.length] = {
                tipo: "Saque",
                quantia: quantia
            }
            return `Saque de R$${quantia / 100} realizado para o cliente: ${this.nome}.`
        }
    },
extratoBancario: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}
Histórico:`)
for (historico of this.historicos) {
    console.log(`${historico.tipo} de R$${historico.quantia / 100}`)
    }
    }
}

console.log(contaBacaria.depositoBancario(10000));
console.log(contaBacaria.saqueBancario(50000));
console.log(contaBacaria.saqueBancario(5000));
contaBacaria.extratoBancario();