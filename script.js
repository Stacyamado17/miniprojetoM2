// Array para armazenar os animais cadastrados
let animais = [];

// Classe para definir a estrutura de um animal
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Função para adicionar um animal ao array
function adicionarAnimal(nome, idade) {
    const novoAnimal = new Animal(nome, idade);
    animais.push(novoAnimal);
    atualizarLista();
}

// Função para atualizar a lista de animais exibida no DOM
function atualizarLista() {
    const listaAnimais = document.getElementById('listaAnimais');
    listaAnimais.innerHTML = '';
    
    animais.forEach((animal, index) => {
        const item = document.createElement('li');
        item.innerHTML = `
            <strong>Nome:</strong> ${animal.nome}, 
            <strong>Idade:</strong> ${animal.idade} 
            <button onclick="editarAnimal(${index})">Editar</button>
            <button onclick="excluirAnimal(${index})">Excluir</button>
        `;
        listaAnimais.appendChild(item);
    });
}

// Função para excluir um animal
function excluirAnimal(index) {
    animais.splice(index, 1);
    atualizarLista();
}

// Função para editar um animal
function editarAnimal(index) {
    const animal = animais[index];
    document.getElementById('nome').value = animal.nome;
    document.getElementById('idade').value = animal.idade;

    document.getElementById('animalForm').onsubmit = function(event) {
        event.preventDefault();
        atualizarAnimal(index);
    };
}

// Função para atualizar o animal editado
function atualizarAnimal(index) {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    animais[index] = new Animal(nome, idade);
    atualizarLista();
    document.getElementById('animalForm').reset();
    document.getElementById('animalForm').onsubmit = cadastrarAnimal;
}

// Função de cadastro
function cadastrarAnimal(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    adicionarAnimal(nome, idade);
    document.getElementById('animalForm').reset();
}

// Configurando o evento de cadastro ao formulário
document.getElementById('animalForm').onsubmit = cadastrarAnimal;
