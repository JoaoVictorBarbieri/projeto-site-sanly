export function carregarProjetos() {
  const projetos = [
    { 
      titulo: "Pato Nintendista", 
      descricao: "Profile picture",
      imagem: "./imagens/patos.jpg"
  },
  { 
      titulo: "Commission", 
      descricao: "Commission number 1561",
      imagem: "./imagens/pedro.jpg"
  },
  { 
      titulo: "Emote Heart", 
      descricao: "Emote",
      imagem: "./imagens/vividdy.png"
  },
    { 
      titulo: "Pato Nintendista", 
      descricao: "Profile picture",
      imagem: "./imagens/projetoEx04.jpg"
  },
  { 
      titulo: "Commission", 
      descricao: "Commission number 1561",
      imagem: "./imagens/projetoEx05.jpg"
  },
  { 
      titulo: "Emote Heart", 
      descricao: "Emote",
      imagem: "./imagens/projetoEx06.jpg"
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
