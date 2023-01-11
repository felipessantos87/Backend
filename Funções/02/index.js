const carro = {
    ligado: false,
    velocidade: 0,
    statusCarroLigado: function () {
        return this.ligado ? "ligado" : "desligado"
    },
acionar: function () {
    if (this.ligado === true) {
        console.log("Este carro já está ligado.");
    } else {
        this.ligado = true;
        console.log(`Carro ${this.statusCarroLigado()} . Velocidade: ${this.velocidade} .`);
        }
    },
desativar: function () {
    if (this.ligado === false) {
        console.log("Este carro já está desligado.");
    } else {
        this.ligado = false;
        this.velocidade = 0;
        console.log(`Carro ${this.statusCarroLigado()} . Velocidade: ${this.velocidade} .`);
        }
    },
acelerarando: function () {
    if (this.ligado === false) {
        console.log("Não é possível acelerar um carro desligado.");
    } else {
        this.velocidade += 10;
        console.log(`Carro ${this.statusCarroLigado()} . Velocidade: ${this.velocidade} .`);
        }
    },
desacelerarando: function () {
        if (this.ligado === false) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            this.velocidade -= 10;
            console.log(`Carro ${this.statusCarroLigado()} . Velocidade: ${this.velocidade} .`);
        }
    }
}

carro.desativar();
carro.acionar();
carro.acionar();
carro.acelerarando();
carro.acelerarando();
carro.desacelerarando();
carro.desativar();
carro.acelerarando();
carro.desacelerarando()