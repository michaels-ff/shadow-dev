# 🚀 Buscador de Linguagens de Programação

Este é um projeto simples de front-end que exibe uma lista de linguagens de programação e permite que o usuário as filtre por nome em tempo real.

## 📜 Descrição

A aplicação carrega uma lista de linguagens de programação a partir de um arquivo `data.json` e as exibe em formato de "cards". Há um campo de busca que permite ao usuário digitar o nome de uma linguagem para filtrar a lista e encontrar rapidamente a informação desejada.

## ✨ Funcionalidades

-   **Listagem de Linguagens:** Exibe informações sobre várias linguagens de programação.
-   **Busca Dinâmica:** Filtra as linguagens em tempo real conforme o usuário digita no campo de busca.
-   **Detalhes da Linguagem:** Cada card mostra o nome, ano de criação e uma breve descrição da linguagem.
-   **Link para Documentação:** Cada card inclui um link "Saiba mais" que redireciona para a documentação oficial da linguagem.
-   **Feedback Visual:** Exibe uma mensagem "Nenhum resultado encontrado" se a busca não retornar resultados.

## 🛠️ Como Funciona

1.  **Carregamento de Dados:** Ao abrir a página, o arquivo `script.js` utiliza a função `fetch` para carregar os dados do arquivo `data.json`.
2.  **Renderização:** As informações são exibidas em cards, cada um representando uma linguagem de programação.
3.  **Busca:** A função `iniciarBusca()` é acionada para filtrar o array de dados com base no texto digitado no campo de busca.
4.  **Atualização da UI:** A função `renderizarCards()` limpa a tela e exibe apenas os cards que correspondem ao critério de busca.

## 💻 Tecnologias Utilizadas

-   **HTML:** Estrutura da página web.
-   **CSS:** Estilização dos componentes (inferido a partir do `script.js`).
-   **JavaScript:** Lógica principal da aplicação, como busca, manipulação do DOM e requisições.
-   **JSON:** Armazenamento dos dados das linguagens de programação.

## 🚀 Como Usar

1.  Veja se todos os arquivos (`index.html`, `script.js`, `data.json` e a pasta de imagens) estejam na mesma estrutura de diretórios.
2.  Abra o arquivo `index.html` em um navegador web.
3.  Digite o nome de uma linguagem de programação no campo de busca para ver os resultados.


---
