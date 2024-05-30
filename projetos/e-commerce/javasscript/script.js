let itensCatalogo = document.querySelector(".itens-catalogo");
let id = 0;
for (const p of produtos) {
    itensCatalogo.innerHTML += `   
        <div class="info">
          <img src="${p.img}" alt="${p.dsImg}" />
          <h3>${p.nome}</h3>
          <h5>${p.descricao}:<span>R$${p.valor}</span></h5>
          <button id="id${id}" class="pedir">pedir agora</button>
        </div>`
id++;
}