const Carro = require('./Carro');

class CarrosComPlaca extends Carro {
    #placa;

    constructor(marca, modelo, ano, cor, placa) {
        super(marca, modelo, ano, cor);
        this.#placa = placa;
    }

    getPlaca() {
        return this.#placa;
    }

    detalhesDoCarro() {
        return `${super.detalhesDoCarro()} - Placa: ${this.#placa}`;
    }
}

module.exports = CarrosComPlaca;