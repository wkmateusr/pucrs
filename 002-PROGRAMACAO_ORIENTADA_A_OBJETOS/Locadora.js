const CarrosComPlaca = require('./CarrosComPlaca');

class Locadora {
    constructor(nome) {
        this.nome = nome;
        this.carros = [];
    }

    adicionarCarro(carro) {
        if (carro instanceof CarrosComPlaca) {
            this.carros.push(carro);
        } else {
            console.log("Somente carros com placa podem ser adicionados.");
        }
    }

    listarCarros() {
        return this.carros.map(carro => carro.detalhesDoCarro()).join('\n');
    }
}

module.exports = Locadora;