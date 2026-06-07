const convertBtn = document.getElementById('convertBtn');
const usdInput = document.getElementById('usdValue');
const resultText = document.getElementById('resultText');

const exchangeRate = 5.50;

function convertCurrency() {
    const usdValue = parseFloat(usdInput.value);

    if (isNaN(usdValue) || usdValue <= 0) {
        resultText.innerHTML = "❌ Por favor, insira um valor válido.";
        resultText.style.color = "#e74c3c";
        return;
    }

    const brlValue = usdValue * exchangeRate;

    const formattedBrl = brlValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    resultText.innerHTML = ` $${usdValue.toFixed(2)} equivalem a <br><strong>${formattedBrl}</strong>`;
    resultText.style.color = "#27ae60";
}

convertBtn.addEventListener('click', convertCurrency);