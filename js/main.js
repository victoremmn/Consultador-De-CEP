'use strict';

const preencherForm = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    if (cep != "") {
        const url = `http://viacep.com.br/ws/${cep}/json/`;
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            alert('CEP Inexistente!'); 
        }else{
            preencherForm(endereco);
        }
    }else{
        alert('Digite um CEP!');
    }
}

document.getElementById('Btn').addEventListener('click', pesquisarCep);

// Verificação de caracteres especiais 

function BlockChar(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
}
