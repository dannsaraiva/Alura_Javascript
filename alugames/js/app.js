function alterarBotao(id) {
    //Variáveis.
    let botaoClicado = document.getElementById(`game-${id}`);
    let fundoAlugado = botaoClicado.querySelector('.dashboard__item__img');
    let botaoAlugado = botaoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = botaoClicado.querySelector('.dashboard__item__name');

    //Troca o nome do botão.
    if (fundoAlugado.classList.contains('dashboard__item__img--rented')) {
        fundoAlugado.classList.remove('dashboard__item__img--rented');
        botaoAlugado.innerHTML = "Alugar";
        botaoAlugado.classList.remove('dashboard__item__button--return');
    } else {
        fundoAlugado.classList.add('dashboard__item__img--rented');
        botaoAlugado.innerHTML = "Devolver";
        botaoAlugado.classList.add('dashboard__item__button--return');
    };



};