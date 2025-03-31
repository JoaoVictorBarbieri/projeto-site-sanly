export function iniciarCarrossel() {
  const images = document.querySelectorAll('.carrossel-imagem');
  let currentIndex = 0;
  let autoSlide; // Variável para armazenar o setInterval

  function showImage(index) {
    images.forEach((img) => {
      img.style.opacity = '0';
      img.style.transform = 'translateX(100%)';
    });

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

  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');

  if (nextButton && prevButton) {
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);
  }

  function startAutoSlide() {
    if (autoSlide) clearInterval(autoSlide); // Evita múltiplos intervalos ativos
    autoSlide = setInterval(nextImage, 10000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  startAutoSlide(); // Inicia o carrossel automaticamente

  const carrossel = document.querySelector('.carrossel');
  if (carrossel) {
    carrossel.addEventListener('mouseenter', stopAutoSlide);
    carrossel.addEventListener('mouseleave', startAutoSlide);
  }

  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-content');
  const closeBtn = document.querySelector('.modal-close');

  images.forEach((img) => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });

  showImage(currentIndex);
}
