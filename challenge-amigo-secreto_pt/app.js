// Criando uma lista de nomes
const inputAmigo = document.getElementById('amigo');
const listaAmigos = [];
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');


function adicionarAmigo() {
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    if (!inputAmigo.value) {
        alert('Insira um nome!');
        return;
    }
    inputAmigo.value = '';
}

function sortearAmigo() {
    const random = parseInt(Math.random()*listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>Seu amigo secreto é: ${amigoSecreto}</li>`;
}