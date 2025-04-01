// Modal functionality for both projects and prices
let modal = null;

function createModal() {
  if (!modal) {
    modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <span class="modal-close">&times;</span>
      <img class="modal-content" id="modal-img">
    `;
    document.body.appendChild(modal);

    // Add close events
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
  return modal;
}

export function openModal(imageSrc) {
  const modal = createModal();
  const modalImg = document.getElementById('modal-img');
  modal.style.display = 'block';
  modalImg.src = imageSrc;
}

export function closeModal() {
  if (modal) {
    modal.style.display = 'none';
  }
}

export function initModal() {
  // Initialize modal for prices image
  const pricesImage = document.querySelector('.precos-imagem');
  if (pricesImage) {
    pricesImage.addEventListener('click', () => openModal(pricesImage.src));
  }
}
