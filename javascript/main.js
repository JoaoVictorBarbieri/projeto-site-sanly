// scripts/main.js
import { carregarProjetos } from "./projetos.js";
import { iniciarCarrossel } from "./carrossel.js"; // Importando a função do carrossel

document.addEventListener("DOMContentLoaded", () => {
    carregarProjetos();
    iniciarCarrossel(); // Chamando a função para iniciar o carrossel
});
