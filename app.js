// **Passo 1: Capturando elementos HTML**
// Campo de texto para inserir nomes
const campoNome = document.getElementById("amigo");
// Lista onde os nomes serão exibidos
const listaAmigos = document.getElementById("listaAmigos");
// Lista para exibir o resultado do sorteio
const resultado = document.getElementById("resultado");

// Array para armazenar os nomes
const nomes = [];

// **Função: Adicionar um nome**
function adicionarAmigo() {
    // Captura o valor do campo de texto
    const nome = campoNome.value.trim(); // `trim` remove espaços extras

    // Validação: Verifica se o campo está vazio
    if (nome === "") {
        alert("É necessário inserir o nome de um amigo."); // Mensagem de erro
        return; // Sai da função sem adicionar
    }

    // Adiciona o nome ao array
    nomes.push(nome);

    // Atualiza a lista visualmente
    const novoItem = document.createElement("li"); // Cria um novo item na lista
    novoItem.textContent = nome; // Define o texto do item como o nome
    listaAmigos.appendChild(novoItem); // Adiciona o item à lista na página

    // Limpa o campo de texto para nova entrada
    campoNome.value = "";
    campoNome.focus(); // Retorna o cursor para o campo
}

// **Função: Sortear um amigo**principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function sortearAmigo() {
    // Limpa os resultados anteriores
    resultado.innerHTML = "";

    // Verifica se há nomes no array
    if (nomes.length === 0) {
        alert("Adicione pelo menos um nome antes de realizar o sorteio!");
        return; // Sai da função sem sortear
    }

    // Realiza o sorteio
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = nomes[indiceSorteado];

    // Exibe o resultado
    const itemResultado = document.createElement("li");
    itemResultado.textContent = `🎉 O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(itemResultado);

    // Gera confetes
    const container = document.getElementById("confetti-container");
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Define posição e cor aleatórias
        confetti.style.left = Math.random() * 150 + "vw"; // Posição horizontal aleatória
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s"; // Duração aleatória
        confetti.style.setProperty("--confetti-color", `hsl(${Math.random() * 360}, 100%, 50%)`);

        // Adiciona o confete ao contêiner
        container.appendChild(confetti);

        // Remove confetes após a animação
        setTimeout(() => confetti.remove(), 5000);
    }
}


