// document.getElementById('bt-apagar').addEventListener('click', apagar);
document.getElementById('bt-gravar').addEventListener('click', gravar);
// document.getElementById('bt-novo').addEventListener('click', limparForm);
let lsPessoa = [];

let tpStatus = {
    "Transferido": "text-bg-info",
    "Pré-Operatório": "text-bg-success",
    "Em Recuperação": "text-bg-danger"
}
function gravar() {
    let nome = document.getElementById('name').value;
    let status = document.getElementById('status').value;
    let local = document.getElementById('local').value;
    let horaI = document.getElementById('horaInicio').value;
    let horaC = document.getElementById('horaCirurgia').value;
    let horaF = document.getElementById('horaFim').value;
    let horaS = document.getElementById('horaSaida').value;

    // if (nome == "") {
    //     lsItem.push(obj);
    // } else {
    //     lsItem[nome] = obj;
    // }
    // console.table(lsPessoa);

    // if (nome === '' || status === '' || local === '' || horaI === '' || horaC === '' || horaF === '' || horaS === '') {
    //     alert('Por favor, preencha todos os campos.');
    //     return;
    // }
    let obj = {
        nome: nome,
        status: status,
        local: local,
        horaInicio: horaI,
        horaCirurgia: horaC,
        horaFim: horaF,
        horaSaida: horaS
    };
    // if (indice == "") {
        createRow(obj).then((o) => {
            lsPessoa.push(o);
            atualizarTabela();
            
        } );        
    limparForm();

}

function atualizarTabela() {
    let tbody = "";
    for (const p of lsPessoa) {
        tbody += `<tr>
        <td>${p.nome}</td>
        <td class = "${tpStatus[p.status]}" >${p.status}</td>
        <td>${p.local}</td>
        <td>${p.horaInicio}</td>
        <td>${p.horaCirurgia}</td>
        <td>${p.horaFim}</td>
        <td>${p.horaSaida}</td>
        
        
        </tr>`



    }
    document.getElementById("tbody").innerHTML = tbody;
}
function limparForm() {
    document.getElementById('name').value = "";
    document.getElementById('status').value = "";
    document.getElementById('local').value = "";
    document.getElementById('horaInicio').value = "";
    document.getElementById('horaCirurgia').value = "";
    document.getElementById('horaFim').value = "";
    document.getElementById('horaSaida').value = "";
}

// function editar(nome) {
//     obj = lsItem[nome];
//     document.getElementById('nome').value = nome;
//     document.getElementById('status').value = obj.status;
//     document.getElementById('local').value = obj.local;
//     document.getElementById('horaInicio').value = obj.horaI;
//     document.getElementById('horaCirurgia').value = obj.horaCirurgia;
//     document.getElementById('horaFim').value = obj.horaF;
//     document.getElementById('horaSaida').value = obj.horaS;
// }




async function getData() {
    const response = await fetch("https://api.zerosheets.com/v1/o6c");
    const data = await response.json();
    return data;
}

getData().then( (dados) => {
    lsPessoa = dados;
    atualizarTabela();
} );

async function createRow(payload) {
    
    const response = await fetch("https://api.zerosheets.com/v1/o6c", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    const data = await response.json();
  
    return data;
}