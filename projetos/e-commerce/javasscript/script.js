// const menuContent = document.querySelector('.content');
// const show = true;




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

let telaCarrinho = document.querySelector('.tela-carrinho');
let carrinho = document.querySelector('.carrinho');
carrinho.addEventListener('click', ()=>{
  console.log('d');
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
    
})

let continuar = document.querySelector('.continuar');
continuar.addEventListener('click', ()=>{
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
})











// let tbody = document.querySelector('tbody');
// function atualizarTabela(){
//     tbody.innerHTML = '';
//     let valorTotal = 0 ;
//     let id = 0; 
//     for (const p of produtos) {
//         if (p.quantidade > 0) {
//             tbody.innerHTML += `  <tr>
//             <td>${p.nome}</td>
//             <td>${p.quantidade}x${p.valor}=R$ ${p.quantidade * p.valor}(valor)</td>
//             <td>
//             <i class="bi bi-plus-square-fill"id="plus${id}"></i>
//             <i class="bi bi-dash-square-fill"id="dash${id}"></i>
//             </td>
//             </tr> `;
//             valorTotal += p.quantidade*p.fatias8;
//         }
//         id++
        
//     }