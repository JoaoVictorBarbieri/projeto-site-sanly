export function iniciarCarrossel() {
  const images = document.querySelectorAll('.carrossel-imagem');
  let currentIndex = 0;

  function showImage(index) {
    // Remove active class from all images
    images.forEach((img) => {
      img.style.opacity = '0';
      img.style.transform = 'translateX(100%)';
    });

    // Add active class to current image
    images[index].style.opacity = '1';
    images[index].style.transform = 'translateX(0)';
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  // Adiciona eventos aos botões de navegação
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');

  if (nextButton && prevButton) {
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);
  }

  // Transição automática a cada 5 segundos
  const autoSlide = setInterval(nextImage, 9000);

  // Parar a transição automática quando o mouse estiver sobre o carrossel
  const carrossel = document.querySelector('.carrossel');
  if (carrossel) {
    carrossel.addEventListener('mouseenter', () => clearInterval(autoSlide));
    carrossel.addEventListener('mouseleave', () =>
      setInterval(nextImage, 9000),
    );
  }

  // Adiciona funcionalidade de modal para as imagens
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-content');
  const closeBtn = document.querySelector('.modal-close');

  // Adiciona evento de clique para cada imagem do carrossel
  images.forEach((img) => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
    });
  });

  // Fecha o modal quando clicar no botão X
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Fecha o modal quando clicar fora da imagem
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Fecha o modal quando pressionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });

  // Inicializa o carrossel
  showImage(currentIndex);
}
