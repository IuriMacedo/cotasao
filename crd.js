function calcularConversao() {
    const valorReal = document.getElementById('valorReal').value;
    const cotacaoDolar = 5.06;
    const valorDolar = valorReal / cotacaoDolar;

    document.getElementById('resultado').textContent = valorDolar.toFixed(2);
}

const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;

toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode")
})