const form = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaContato();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (inputNomeContato.value && inputTelefoneContato.value) {
        const telefoneFormatado = formatarTelefone(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${telefoneFormatado}</td>`;
        linha += '</tr>';

        tabelaContatos.innerHTML += linha;

        inputNomeContato.value = '';
        inputTelefoneContato.value = '';
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function formatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');

    if (telefone.length === 11) {
        return `${telefone.slice(0, 2)} ${telefone.slice(2, 3)} ${telefone.slice(3, 7)}-${telefone.slice(7)}`;
    } else {
        return telefone;
    }
}