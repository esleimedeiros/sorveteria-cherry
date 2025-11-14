function mostrar(tipo) {
  let conteudo = document.getElementById("conteudo");
  conteudo.className = ""; // limpa classes anteriores

  if (tipo === "sorvetes") {
    conteudo.classList.add("sorvetes");
    conteudo.innerHTML = `
      <h2>Sabores de Sorvetes</h2>
      <ul>
        <li>Chocolate - R$ 8,00</li>
        <li>Morango - R$ 8,00</li>
        <li>Baunilha - R$ 7,00</li>
      </ul>
    `;
  } else if (tipo === "acai") {
    conteudo.classList.add("acai");
    conteudo.innerHTML = `
      <h2>Sabores de Açaí</h2>
      <ul>
        <li>Açaí tradicional - R$ 10,00</li>
        <li>Açaí com granola - R$ 12,00</li>
        <li>Açaí com frutas - R$ 14,00</li>
      </ul>
    `;
  } else if (tipo === "sucos") {
    conteudo.classList.add("sucos");
    conteudo.innerHTML = `
      <h2>Sabores de Sucos</h2>
      <ul>
        <li>Laranja - R$ 6,00</li>
        <li>Maracujá - R$ 6,00</li>
        <li>Uva - R$ 7,00</li>
      </ul>
    `;
  }
}

function contatoWhatsapp() {
  window.open("https://wa.me/5517991602759", "_blank");
}