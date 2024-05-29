let itensCatalogo = document.querySelector(".itens-catalogo");
let id = 0;
for (const p of produtos) {
    itensCatalogo.innerHTML += `            
    <div class="">
    <img src="${p.img}" alt="${p.dsImg}">
    <div class="info">
        <h3>${p.nome}</h3>
        <h4>6 fatias<span>R$${p.fatias6}</span></h4>
        <h4>8 fatias<span>R$${p.fatias8}</span></h4>
        <h4>12 fatias<span>R$${p.fatias12}</span></h4>
        <button id="id${id}" class="pedir">pedir agora</button>
    </div>
</div>`
id++;
}