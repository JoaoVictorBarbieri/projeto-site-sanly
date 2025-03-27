
export function carregarProjetos() {

  const projetos = [
    { 
        titulo: "Projeto 1", 
        descricao: "Descrição do projeto 1",
        imagem: "./imagens/patos.jpg"
    },
    { 
        titulo: "Projeto 2", 
        descricao: "Descrição do projeto 2",
        imagem: "./imagens/pedro.jpg"
    },
    { 
        titulo: "Projeto 3", 
        descricao: "Descrição do projeto 3",
        imagem: "./imagens/vividdy.png"
    }
];

const container = document.querySelector(".projeto-lista");

projetos.forEach(projeto => {
    const div = document.createElement("div");
    div.classList.add("projeto");
    div.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.titulo}" class="projeto-imagem">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
    `;
    container.appendChild(div);
  });
}
