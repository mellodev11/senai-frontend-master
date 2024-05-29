let itensCatalogo = document.querySelector(".itens-catalogo");
let id = 0;
for (const p of produtos) {
    itensCatalogo.innerHTML += `            
    <div class="">
    <img src="${p.img}" alt="${p.dsImg}">
    <div class="info">
        <h3>${p.nome}</h3>
        <h4><span>${p.descricao}</span></h4>
        <h4>Valor :<span>R$${p.valor}</span></h4>
        
        <button id="id${id}" class="pedir">pedir agora</button>
    </div>
</div>`
id++;
}