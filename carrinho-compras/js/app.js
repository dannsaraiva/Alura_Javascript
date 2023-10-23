//Variável global.
let totalCarrinho = 0;
limpar();

//Adicionar produto.
function adicionar() {
    //Variáveis.
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;
    let precoTotal = quantidadeProduto * valorUnitario;

    //Lista do carrinho.
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML += `    
    <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}X -</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`;

    //Preço total do carrinho.
    totalCarrinho = totalCarrinho + precoTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalCarrinho}`;

    //Limpar quantidade.
    document.getElementById('quantidade').value = "0"
};

//Limpa carrinho.
function limpar() {
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = "";
    document.getElementById('valor-total').textContent = "R$ 0";
};