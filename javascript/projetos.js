import { openModal } from './modal.js';

export function carregarProjetos() {
  const projetos = [
    {
      titulo: 'Torso',
      descricao: '',
      imagem: './imagens/project00.jpg',
    },
    {
      titulo: 'Wallpaper',
      descricao: '',
      imagem: './imagens/project01.jpg',
    },
    {
      titulo: 'Icon',
      descricao: '',
      imagem: './imagens/project02.jpg',
    },
    {
      titulo: 'Emotes',
      descricao: '',
      imagem: './imagens/project03.jpg',
    },
    {
      titulo: 'Full Body',
      descricao: '',
      imagem: './imagens/project04.jpg',
    },
    {
      titulo: 'Sheet Reference',
      descricao: '',
      imagem: './imagens/project05.jpg',
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
