// Array para armazenar todos os itens
let items = [];

// Aguarda o carregamento completo do DOM (Document Object Model) antes de anexar os ouvintes de eventos
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const searchButton = document.getElementById('search-button');

    // Anexa ouvintes de eventos de clique aos botões
    addButton.addEventListener('click', addItem);
    searchButton.addEventListener('click', searchItems);

    // Exibe quaisquer itens existentes
    displayItems();
});

// Função para adicionar um novo item
function addItem() {
    const nameInput = document.getElementById('item-name');
    const urlInput = document.getElementById('item-url');

    const name = nameInput.value.trim(); // Remove espaços em branco
    const url = urlInput.value.trim(); // Remove espaços em branco

    if (name && url) {
        // Adiciona o novo item ao array
        items.push({ name, url });
        // Limpa os campos de entrada
        nameInput.value = '';
        urlInput.value = '';
        // Atualiza a exibição
        displayItems();
    }
    else {
        alert('Por favor, insira tanto o nome quanto a URL.');
    };
};

// Função para exibir os itens
function displayItems(itemsToDisplay = items) {
    const container = document.getElementById('items-container');
    container.innerHTML = ''; // Limpa o container

    itemsToDisplay.forEach(item => {
        const itemElement = document.createElement('div'); // Cria um novo elemento div
        itemElement.classList.add('item'); // Adiciona a classe 'item'
        itemElement.innerHTML = `
            <img src="${item.url}" alt="${item.name}"> <!-- Adiciona a imagem -->
            <p>${item.name}</p> <!-- Adiciona o nome do item -->
        `;
        container.appendChild(itemElement); // Adiciona o elemento ao container
    });
};

// Função para buscar itens
function searchItems() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase().trim(); // Converte para minúsculas e remove espaços

    if (searchTerm) {
        // Filtra os itens com base no termo de busca
        const filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(searchTerm) // Verifica se o nome do item inclui o termo de busca
        );
        displayItems(filteredItems); // Exibe os itens filtrados
    }
    else {
        // Se o termo de busca estiver vazio, exibe todos os itens
        displayItems();
    }
};