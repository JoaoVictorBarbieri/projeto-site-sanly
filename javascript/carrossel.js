// carrossel.js

export function iniciarCarrossel() {
    let indexImagem = 0;
    const imagens = document.querySelectorAll('.carrossel-imagem');

    // Mostrar a primeira imagem
    mostrarImagem(indexImagem);

    // Função para mudar a imagem
    function mudarImagem(n) {
        indexImagem += n;
        if (indexImagem >= imagens.length) {
            indexImagem = 0;
        } else if (indexImagem < 0) {
            indexImagem = imagens.length - 1;
        }
        mostrarImagem(indexImagem);
    }

    // Função para mostrar a imagem ativa
    function mostrarImagem(n) {
        imagens.forEach((img, i) => {
            img.style.display = (i === n) ? 'block' : 'none';
        });
    }

    // Atribuindo os eventos de clique aos botões
    document.querySelector('.prev').addEventListener('click', () => mudarImagem(-1));
    document.querySelector('.next').addEventListener('click', () => mudarImagem(1));
}
