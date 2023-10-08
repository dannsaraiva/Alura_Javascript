alert("Bem vindo ao jogo número secreto!");

//Variáveis.
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroDigitado;
let tentativas = 1;

//Enquanto.
while (numeroDigitado != numeroSecreto) {
    numeroDigitado = prompt(`Escolha um número entre 1 à ${numeroMaximo}:`);

    //Validação do numero secreto.
    if (numeroDigitado == numeroSecreto) {
        break;
    }
    else {
        if (numeroDigitado < numeroSecreto) {
            alert(`Número digitado é menor`);
        }
        else {
            alert(`Número digitado é maior`);
        }
        tentativas++;
    }
};

//Tratativa da palavra tentativa.
let palavraTentativa = tentativas > 1 ? "tentativas." : "tentativa.";
alert(`Você acertou!
    Com ${tentativas} ${palavraTentativa}`);