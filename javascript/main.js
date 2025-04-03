// scripts/main.js
import { carregarProjetos } from './projetos.js';
import SlideNav from './slide.js';
import { initModal } from './modal.js';
import { initLazyLoading } from './lazyLoading.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o AOS
  AOS.init({
    duration: 1000, // Duração da animação em ms
    once: true, // A animação acontece apenas uma vez
    offset: 100, // Offset (em pixels) do ponto de ativação
    easing: 'ease-in-out', // Função de easing
  });

  carregarProjetos();
  const slide = new SlideNav('.slide', '.slide-wrapper');
  slide.init();
  slide.addArrow('.prev', '.next');
  slide.addControl('.custom-controls');
  initModal();
  initLazyLoading();
});
