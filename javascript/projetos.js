import { openModal } from './modal.js';

export function carregarProjetos() {
  const projetos = [
    {
      titulo: 'Torso',
      descricao: '',
      imagem: './imagens/project00.webp',
    },
    {
      titulo: 'Wallpaper',
      descricao: '',
      imagem: './imagens/project01.webp',
    },
    {
      titulo: 'Icon',
      descricao: '',
      imagem: './imagens/project02.webp',
    },
    {
      titulo: 'Emotes',
      descricao: '',
      imagem: './imagens/project03.webp',
    },
    {
      titulo: 'Full Body',
      descricao: '',
      imagem: './imagens/project04.webp',
    },
    {
      titulo: 'Sheet Reference',
      descricao: '',
      imagem: './imagens/project05.webp',
    },
  ];

  const container = document.querySelector('.projeto-lista');

  // Criar os projetos
  projetos.forEach((projeto) => {
    const div = document.createElement('div');
    div.classList.add('projeto');
    div.innerHTML = `
      <img src="${projeto.imagem}" alt="${projeto.titulo}" class="projeto-imagem">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
    `;

    // Adicionar evento de clique na imagem
    const imagem = div.querySelector('.projeto-imagem');
    imagem.addEventListener('click', () => openModal(projeto.imagem));

    container.appendChild(div);
  });
}
