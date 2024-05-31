const CarrosComPlaca = require('./CarrosComPlaca');
const Locadora = require('./Locadora');

// Criando alguns carros
const carro1 = new CarrosComPlaca('Toyota', 'Corolla', 2020, 'Preto', 'ABC-1234');
const carro2 = new CarrosComPlaca('Honda', 'Civic', 2021, 'Branco', 'XYZ-5678');

// Criando uma locadora
const minhaLocadora = new Locadora('Locadora XYZ');

// Adicionando carros à locadora
minhaLocadora.adicionarCarro(carro1);
minhaLocadora.adicionarCarro(carro2);

// Listando carros na locadora
console.log(minhaLocadora.listarCarros());