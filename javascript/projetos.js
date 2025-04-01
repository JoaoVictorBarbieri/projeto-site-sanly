export function carregarProjetos() {
  const projetos = [
    { 
      titulo: "Torso", 
      descricao: "",
      imagem: "./imagens/project00.jpg"
  },
  { 
      titulo: "Wallpaper", 
      descricao: "",
      imagem: "./imagens/project01.jpg"
  },
  { 
      titulo: "Icon", 
      descricao: "",
      imagem: "./imagens/project02.jpg"
  },
    { 
      titulo: "Emotes", 
      descricao: "",
      imagem: "./imagens/project03.jpg"
  },
  { 
      titulo: "Full Body", 
      descricao: "",
      imagem: "./imagens/project04.jpg"
  },
  { 
      titulo: "Sheet Reference", 
      descricao: "",
      imagem: "./imagens/project05.jpg"
  }
];

  const container = document.querySelector('.projeto-lista');

  // Criar o modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <span class="modal-close">&times;</span>
    <img class="modal-content" id="modal-img">
  `;
  document.body.appendChild(modal);

  // Função para abrir o modal
  function openModal(imageSrc) {
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
  }

  // Função para fechar o modal
  function closeModal() {
    modal.style.display = 'none';
  }

  // Eventos para fechar o modal
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

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
