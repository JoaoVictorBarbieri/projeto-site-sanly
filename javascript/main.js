// scripts/main.js
import { carregarProjetos } from "./projetos.js";
import SlideNav from "./slide.js";


document.addEventListener('DOMContentLoaded', () => {
  carregarProjetos();
  const slide = new SlideNav('.slide', '.slide-wrapper');
  slide.init();
  slide.addArrow('.prev', '.next')
  slide.addControl('.custom-controls');
});
