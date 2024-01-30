const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];
const emails = [];

var linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinhas();
    atualizarTabela();
    totalContatos();
});

function adicionarLinhas(){
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');
    const inputEmail = document.getElementById('email');

    if (numeros.includes(inputNumero.value)){
        alert('Este contato já está salvo na sua agenda.');
    }else{
        nomes.push(inputNome.value);
        numeros.push(inputNumero.value);
        emails.push(inputEmail.value);

        var linha = '<tr>';
        linha += '<th>Nome:</th>';
        linha += `<td>${inputNome.value}</td>`;
        linha += '</tr>';
        linha += '<tr>';
        linha += '<th>Número:</th>';
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';
        linha += '<tr>';
        linha += '<th id="ultima-th">E-mail:</th>';
        linha += `<td id="ultima-td">${inputEmail.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    };

    inputNome.value = '';
    inputNumero.value = '';
    inputEmail.value = '';
};

function atualizarTabela(){
    const listaContatos = document.querySelector('Table');
    listaContatos.innerHTML = linhas;
};

function totalContatos(){
    document.getElementById('totalContatos').innerHTML = `Contatos: ${nomes.length}`;
};