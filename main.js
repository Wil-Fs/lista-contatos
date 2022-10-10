const form = document.getElementById('form-contatos');
var lines = '';
var listaNome = [];
var listaNumero = [];


form.addEventListener('submit', function(e){
    e.preventDefault();
    atualizaLista();
})

function atualizaLista() {
    const nomeTabela = document.getElementById('table');

    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');
    
    listaNome.push(inputNome.value);
    listaNumero.push(inputNumero.value);

    var line = '<tr>';
    line += `<td> ${inputNome.value}</td>`;
    line += `<td> ${inputNumero.value}</td>`;
    line += `<td> <img src="./images/confirmado.png" alt="Salvo"> </td>`;
    line += `</tr>`;
    
    lines += line;

    nomeTabela.innerHTML = lines;
    inputNome.value = '';
    inputNumero.value = '';
}