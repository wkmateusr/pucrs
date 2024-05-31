class Carro {
    #marca;
    #modelo;
    #ano;
    #cor;

    constructor(marca, modelo, ano, cor) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
        this.#cor = cor;
    }

    getMarca() {
        return this.#marca;
    }

    getModelo() {
        return this.#modelo;
    }

    getAno() {
        return this.#ano;
    }

    getCor() {
        return this.#cor;
    }

    setCor(novaCor) {
        this.#cor = novaCor;
    }

    detalhesDoCarro() {
        return `${this.#marca} ${this.#modelo} (${this.#ano}) - Cor: ${this.#cor}`;
    }
}

module.exports = Carro;
