const questions = [
    { question: "O que é HTML?", answer: "HTML é uma linguagem de marcação para criar páginas web." },
    { question: "O que é CSS?", answer: "CSS é uma linguagem de estilo para definir o layout das páginas web." },
    { question: "O que é JavaScript?", answer: "JavaScript é uma linguagem de programação para web que permite criar conteúdo dinâmico." },
    { question: "O que é uma função em programação?", answer: "Uma função é um bloco de código projetado para executar uma tarefa específica." },
    { question: "O que significa DOM?", answer: "DOM significa Document Object Model." },
    { question: "O que é uma variável?", answer: "Uma variável é um espaço na memória para armazenar valores." },
    { question: "O que é uma API?", answer: "API é um conjunto de regras que permite a comunicação entre diferentes softwares." }
];

function generateCards() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    questions.forEach(({ question, answer }) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="front">
                <p>${question}</p>
            </div>
            <div class="back">
                <p>${answer}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

document.getElementById('refresh-btn').addEventListener('click', () => {
    questions.sort(() => Math.random() - 0.5);
    generateCards();
});

// Gera os cartões na primeira carga da página
generateCards();
