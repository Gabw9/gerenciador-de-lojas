document.getElementById('storeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const storeName = document.getElementById('storeName').value;
    const city = document.getElementById('city').value;
    const totalSales = parseFloat(document.getElementById('totalSales').value);

    const messageElement = document.getElementById('message');

    try {
        validarCampos(storeName, city, totalSales);
        exibirMensagem('Loja cadastrada com sucesso!', 'success');
    } catch (error) {
        exibirMensagem('Erro: ' + error.message, 'error');
    } finally {
        console.log('Validação do formulário concluída.');
    }
});

function validarCampos(nome, cidade, vendas) {
    if (!nome.trim() || !cidade.trim()) {
        throw new Error('Todos os campos devem estar preenchidos.');
    }
    if (isNaN(vendas) || vendas < 0) {
        throw new Error('O valor total vendido deve ser um número maior ou igual a zero.');
    }
}

function exibirMensagem(mensagem, tipo) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = mensagem;
    messageElement.className = 'message ' + tipo;
}
