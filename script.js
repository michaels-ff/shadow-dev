const cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("header input");
let dados = [];

// Função para carregar os dados do JSON uma única vez quando a página abre
async function carregarDados() {
    const resposta = await fetch("data.json");
    dados = await resposta.json();
}

// Esta função agora é responsável por FILTRAR e mostrar os resultados
async function iniciarBusca() {
    // Pega o elemento do campo de busca e o valor digitado
    // Alterado para encontrar o input pelo placeholder, já que não podemos mudar o HTML
    const searchInput = document.querySelector('input[placeholder="Digite uma linguagem de programação"]');
    const termoBusca = searchInput.value.toLowerCase();

    // Filtra o array 'dados' para encontrar itens que correspondam ao termo de busca
    const dadosFiltrados = dados.filter(dado => {
        return dado.nome.toLowerCase().includes(termoBusca);
    });

    // Chama a função para renderizar APENAS os cards filtrados
    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    // Limpa os resultados anteriores antes de mostrar os novos
    cardContainer.innerHTML = "";

    // Verifica se o array de dados filtrados está vazio
    if (dados.length === 0) {
        // Se estiver vazio, exibe a mensagem
        cardContainer.innerHTML = `<p class="mensagem-erro">Nenhum resultado encontrado</p>`;
    } else {
        // Caso contrário, renderiza os cards normalmente
        for (let dado of dados) {
            let article = document.createElement("article");
            article.classList.add("card");
            article.style.backgroundColor = "#11111111";
            article.style.borderRadius = "15px";
            article.style.border = "1px solid #888888";
            article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.ano}</p>
            <p>${dado.descrição}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
            `;
            cardContainer.appendChild(article);
        }
    }
}

// Carrega os dados assim que o script é lido
carregarDados().then(() => {
    // Tenta encontrar a imagem shadow.png e arredondar suas bordas
    const shadowImage = document.querySelector('img[src*="imagens/shadow.jpg"]');
    if (shadowImage) {
        shadowImage.style.borderRadius = '10px'; // Você pode ajustar o valor conforme necessário
    }
});
carregarDados();