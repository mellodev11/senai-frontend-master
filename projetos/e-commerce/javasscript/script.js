let menuContent = document.querySelector('.content');
let menuToggle = menuContent.querySelector('.menu-toggle');
let show = true;




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
 
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
    
})
let home = document.querySelector('.btn-home');
let continuar = document.querySelector('.continuar');
continuar.addEventListener('click', ()=>{
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
    
})
home.addEventListener('click', ()=>{
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
    
})


//até aqui tudo OK 

let lsPedido = document.querySelectorAll('.pedir');
for (const bt of lsPedido) {
    bt.addEventListener('click', () => {
        let id = bt.id.replace('id', '');
        let car = document.getElementById('car')
        bt.classList.toggle('selecionado');
        if (bt.innerHTML == 'REMOVER') {
            produtos[id].quantidade = 0;
            bt.innerHTML = 'pedir agora'
            car.innerHTML = ` <i class='bx bx-cart-add'></i>`
        } else {
            produtos[id].quantidade = 1;
            bt.innerHTML = 'REMOVER';
            car.innerHTML = ` <i class='bx bx-cart-add'></i>`
        }
        atualizarTabela();
    });
}

//ATÉ AQUI REMOVER E ADC OK 



let tbody = document.querySelector('tbody');
function atualizarTabela() {
    tbody.innerHTML = '';
    let total = 0;
    let id = 0;
    for (const p of produtos) {
        if (p.quantidade > 0) {
            tbody.innerHTML += `
              <tr>
                            <td><img src="${p.img}"> </td>
                            <td><span class="valor">${p.nome} = R$ ${p.valor},00 </span></td>
                            <td> ${p.quantidade} </td>
                            <td> R$ ${p.quantidade * p.valor},00 </td>
                            <td>
                                <i class="bx bx-plus" id="plus${id}"></i>
                    
                                <i class="bx bx-minus" id="minus${id}"></i>
                            </td>
                        </tr>
            
           `;
            total += p.quantidade * p.valor;
        }
        id++;
    }
    document.querySelector('#total-pedido').innerHTML = `Valor total do pedido = R$ ${total},00`;
    atualizarPlusDash('plus');
    atualizarPlusDash('minus');
}
function atualizarPlusDash(tipo) {
    let botoes = document.querySelectorAll(`.bx-${tipo}`);
    for (const bt of botoes) {
        bt.addEventListener('click', () => {
            let id = bt.id.replace(tipo, '');
            if (tipo == 'plus') {
                produtos[id].quantidade++;
            }
            if (tipo == 'minus') {
                produtos[id].quantidade--;
                if (produtos[id].quantidade < 1) {
                    document.getElementById('id' + id).click();
                }
            }
            atualizarTabela();
        });
    }
}
let enviar = document.querySelector('.enviar');

enviar.addEventListener('click', () => {

    let msg = 'Gostaria de fazer o seguinte pedido:\n';

    let total = 0;

    for (const p of produtos) {

        if (p.quantidade > 0) {

            msg += `${p.nome} ${p.quantidade}x${p.valor}=${p.quantidade * p.valor}\n`;

            total += p.quantidade * p.valor;

        }

    }

    msg += `Total = ${total}`;

    msg = encodeURI(msg);

    let fone = '5561992918787';

    let link = `https://api.whatsapp.com/send?phone=${fone}&text=${msg}`;

    window.open(link);

});










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