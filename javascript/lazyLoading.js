export function initLazyLoading() {
  // Seleciona todas as imagens que devem ser carregadas de forma lazy
  const lazyImages = document.querySelectorAll(
    '.projeto-imagem, .precos-imagem',
  );

  // Cria um Intersection Observer para observar as imagens estão visíveis
  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;

          // Substitui a src com o data-src
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }

          // Remove o observador após a imagem ser carregada
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: '50px 0px', // Inicia o carregamento das imagens 50px antes de entrarem na viewport
      threshold: 0.1, // Ativa quando 10% da imagem está visível
    },
  );

  lazyImages.forEach((img) => {
    // Armazena a src original em data-src
    img.dataset.src = img.src;
    // Define um placeholder ou src vazia
    img.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
    // Start observing
    imageObserver.observe(img);
  });
}
