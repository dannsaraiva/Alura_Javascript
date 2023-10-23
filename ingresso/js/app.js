//Variáveis globais.


//Função comprar.
function comprarIngresso() {
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipo.value === "pista") {
        comprarPista(quantidade);

    } else if (tipo.value === "superior") {
        comprarSuperior(quantidade);

    } else if (tipo.value === "inferior") {
        comprarInferior(quantidade);

    } else {
        alert("Escolha um tipo!");
    }
};

//Comprar pista.
const comprarPista = (quantidade) => {

    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > quantidadePista) {
        alert("Ingresso esgotado!");
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert("Compra realizada com sucesso!");
    }
};

//Comprar superior.
const comprarSuperior = (quantidade) => {

    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > quantidadeSuperior) {
        alert("Ingresso esgotado!");
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert("Compra realizada com sucesso!");
    }
};

//Comprar inferior.
const comprarInferior = (quantidade) => {

    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > quantidadeInferior) {
        alert("Ingresso esgotado!");
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert("Compra realizada com sucesso!");
    }
};