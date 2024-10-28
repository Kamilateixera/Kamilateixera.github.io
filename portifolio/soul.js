// Função para a animação de digitar o nome
const nome = document.getElementById('nome');
const nomeCompleto = 'Kamila Gonçalves';
let index = 0;

function digitarNome() {
    if (index < nomeCompleto.length) {
        nome.textContent += nomeCompleto.charAt(index);
        index++;
        setTimeout(digitarNome, 150); 
    }
}

// Inicia a animação de digitação quando a página carregar
window.onload = () => {
    digitarNome();
};

// Função para alternar a exibição do menu em telas pequenas
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Adiciona o evento de click no botão do menu toggle
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

// Função para alternar entre mostrar e esconder projetos ocultos
const verMaisButton = document.getElementById('verMais');
const projetosOcultos = document.querySelectorAll('.projeto.oculto');
let mostrandoMais = false; // Estado para saber se estamos mostrando mais projetos

if (verMaisButton) {
    verMaisButton.addEventListener('click', () => {
        mostrandoMais = !mostrandoMais; // Alterna o estado

        projetosOcultos.forEach(projeto => {
            projeto.style.display = mostrandoMais ? 'block' : 'none'; // Alterna a exibição
        });

        verMaisButton.innerText = mostrandoMais ? 'Ver menos' : 'Ver mais'; // Altera o texto do botão
    });
}
