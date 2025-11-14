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
      <h2>Sucos</h2>

      <h3>Sucos Tradicionais (1 Litro / 500 ml)</h3>
      <div class="price-table-wrapper">
        <table class="price-table">
          <thead>
            <tr><th>Sabor</th><th>1 Litro (R$)</th><th>500 ml (R$)</th></tr>
          </thead>
          <tbody>
            <tr><td>Laranja</td><td>15,00</td><td>8,00</td></tr>
            <tr><td>Caju</td><td>14,00</td><td>7,65</td></tr>
            <tr><td>Limão</td><td>14,00</td><td>7,50</td></tr>
            <tr><td>Abacaxi</td><td>14,00</td><td>9,00</td></tr>
            <tr><td>Goiaba</td><td>14,00</td><td>7,50</td></tr>
            <tr><td>Melancia</td><td>14,00</td><td>7,50</td></tr>
            <tr><td>Acerola</td><td>14,00</td><td>7,50</td></tr>
            <tr><td>Melão</td><td>14,00</td><td>7,50</td></tr>
            <tr><td>Tangerina</td><td>14,00</td><td>7,50</td></tr>
            <tr><td>Manga</td><td>14,00</td><td>7,50</td></tr>
            <tr><td>Maracujá</td><td>14,00</td><td>7,50</td></tr>
            <tr><td>Tamarindo</td><td>14,00</td><td>7,50</td></tr>
            <tr><td>Água de Coco</td><td>15,00</td><td>8,50</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Sucos Especiais (1 Litro / 500 ml)</h3>
      <div class="price-table-wrapper">
        <table class="price-table">
          <thead>
            <tr><th>Sabor</th><th>1 Litro (R$)</th><th>500 ml (R$)</th></tr>
          </thead>
          <tbody>
            <tr><td>Açaí</td><td>17,00</td><td>9,00</td></tr>
            <tr><td>Morango</td><td>16,00</td><td>9,00</td></tr>
            <tr><td>Laranja com Acerola</td><td>16,00</td><td>9,00</td></tr>
            <tr><td>Abacaxi com Hortelã</td><td>16,00</td><td>9,00</td></tr>
            <tr><td>Mamão com Laranja</td><td>16,00</td><td>8,50</td></tr>
            <tr><td>Abacaxi com Limão</td><td>16,00</td><td>8,50</td></tr>
            <tr><td>Abacaxi, Maracujá e Laranja</td><td>18,00</td><td>10,00</td></tr>
            <tr><td>Açaí, Morango, Banana e Laranja</td><td>24,00</td><td>20,00</td></tr>
            <tr><td>Maracujá, Morango e Chantilly</td><td>25,00</td><td>12,00</td></tr>
          </tbody>
        </table>
      </div>
    `;
  }
}

function contatoWhatsapp() {
  window.open("https://wa.me/5517991602759", "_blank");
}
