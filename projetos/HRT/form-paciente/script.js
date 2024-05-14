// document.getElementById('bt-apagar').addEventListener('click', apagar);
// document.getElementById('bt-gravar').addEventListener('click', gravar);
// document.getElementById('bt-novo').addEventListener('click', limparForm);
let lsPessoa = [];

let tpStatus = {
    "Transferido": "text-bg-info",
    "Pré-Operatório": "text-bg-success",
    "Em Recuperação": "text-bg-danger"
}
function gravar() {
    let nome = document.getElementById('name').value;
    let indice = document.getElementById('indice').value;
    let _lineNumber = document.getElementById('_lineNumber').value;
    let status = document.getElementById('status').value;
    let local = document.getElementById('local').value;
    let horaI = document.getElementById('horaInicio').value;
    let horaC = document.getElementById('horaCirurgia').value;
    let horaF = document.getElementById('horaFim').value;
    let horaS = document.getElementById('horaSaida').value;

  
    
    if (nome != "" ){
    let obj = {
        nome: nome,
        status: status,
        local: local,
        horaInicio: horaI,
        horaCirurgia: horaC,
        horaFim: horaF,
        horaSaida: horaS,
        // _lineNumber: _lineNumber,
    };
    if (indice == "") {
        createRow(obj).then((o) => {
            lsPessoa.push(o);
            atualizarTabela();

        });
    } else {
        patchRow(_lineNumber, obj).then((o) => {
            lsPessoa[indice] = o;
            atualizarTabela();
        });
    }


    limparForm(); }

}

function atualizarTabela() {
    let tbody = "";
    let i = 0;
    for (const p of lsPessoa) {
        tbody += `<tr onclick='editar(${i})'>
        <td>${p.nome}</td>
        <td class = "${tpStatus[p.status]}" >${p.status}</td>
        <td>${p.local}</td>
        <td>${p.horaInicio}</td>
        <td>${p.horaCirurgia}</td>
        <td>${p.horaFim}</td>
        <td>${p.horaSaida}</td>
        </tr>`
        i++
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
    document.getElementById('indice').value = "";
    document.getElementById('_lineNumber').value = "";

}

function editar(i) {
    obj = lsPessoa[i];
    document.getElementById('name').value = obj.nome;
    document.getElementById('indice').value = i;
    document.getElementById('_lineNumber').value = obj._lineNumber;
    document.getElementById('status').value = obj.status;
    document.getElementById('local').value = obj.local;
    document.getElementById('horaInicio').value = obj.horaInicio;
    document.getElementById('horaCirurgia').value = obj.horaCirurgia;
    document.getElementById('horaFim').value = obj.horaFim;
    document.getElementById('horaSaida').value = obj.horaSaida;
    
    
    
}

function apagar(){
    let indice = document.getElementById('indice').value;
    let _lineNumber = document.getElementById('_lineNumber').value;
    if (indice != ""){
        deleteRow(_lineNumber).then(() =>{
            lsPessoa.splice(indice, 1);
            atualizarTabela();
            limparForm();
        });
    }



}




async function getData() {
    const response = await fetch("https://api.zerosheets.com/v1/o6c");
    const data = await response.json();
    return data;
}

getData().then((dados) => {
    lsPessoa = dados;
    atualizarTabela();
});

async function createRow(payload) {

    const response = await fetch("https://api.zerosheets.com/v1/o6c", {
        method: "POST",
        body: JSON.stringify(payload)
    });
    const data = await response.json();

    return data;
}

async function patchRow(lineNumber, payload) {
 
    const url = "https://api.zerosheets.com/v1/o6c/" + lineNumber;
    const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(payload)
    });
    const data = await response.json();

   
    return data;
}
async function deleteRow(lineNumber) {
    const url = "https://api.zerosheets.com/v1/o6c/" + lineNumber; 
    await fetch(url, {
        method: "DELETE"
    });
    
}
