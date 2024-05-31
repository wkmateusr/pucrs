document.getElementById('calcular').addEventListener('click', calcularPreco);

function calcularPreco() {
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    const distancia = document.getElementById('distancia').value;

    // Validação de entrada
    if (origem === '' || destino === '' || distancia === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (isNaN(distancia) || distancia <= 0) {
        alert('Por favor, insira uma distância válida.');
        return;
    }

    // Cálculo do preço
    const precoPorKm = 2; // Valor fictício para o preço por km
    const precoBase = 5; // Valor base fictício
    const precoTotal = (precoPorKm * distancia) + precoBase;

    // Exibição do resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>O preço estimado para a viagem de <strong>${origem}</strong> a <strong>${destino}</strong> é R$${precoTotal.toFixed(2)}.</p>`;
}

// Função para simular uma chamada de API (fictícia)
function simularAPI() {
    return {
        precoPorKm: 2,
        precoBase: 5
    };
}