//Variável global.
let listaAmigos = [];

//Adicionar amigo.
const adicionarAmigo = () => {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    // if (listaAmigos.includes(amigo.value)) {
    //     alert("Nome já incluido");
    //     return;
    // };

    if (amigo.value === "") {
        alert("Digite o nome!");

    } else {
        if (lista.textContent == "") {
            lista.textContent = amigo.value;
        } else {
            lista.textContent = lista.textContent + ", " + amigo.value;
            listaAmigos.push(amigo.value);
        };
        amigo.value = " ";
        return amigo.value = "";
    }
};

//Sortear amigo.
const sortear = () => {
    if (parseInt(listaAmigos.length - 1) % 2 == 0) {
        let listaSorteio = document.getElementById('lista-sorteio');

        embaralha(listaAmigos);
        for (let i = 0; i < listaAmigos.length; i++) {
            if (i == listaAmigos.length - 1) {
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + ' ==> ' + listaAmigos[0]
                    + '</br>';
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + ' ==> ' + listaAmigos[i + 1]
                    + '</br>';
            }
        }
    } else {
        alert("Adicione mais um amigo!");
    }
};

//Embaralhar os nomes.
function embaralha(lista) {

    let indice = lista.length

    while (indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice]];
    }
};

//Reiniciar o jogo.
const reiniciarSorteio = () => {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = "";
    document.getElementById('lista-sorteio').innerHTML = "";

};