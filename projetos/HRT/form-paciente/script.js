// document.getElementById('bt-apagar').addEventListener('click', apagar);
document.getElementById('bt-gravar').addEventListener('click', gravar);
// document.getElementById('bt-novo').addEventListener('click', limparForm);
let lsPessoa = [];

let tpStatus = {
    "Transferido": "text-bg-info",
    "Pre-Operatorio": "text-bg-success",
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

    lsPessoa.push(obj);
    // limparForm();
    ataulizarTabela();
}

function ataulizarTabela() {
    let tbody = "";
    for (const p of lsPessoa) {
        tbody += `<tr>
        <td>${p.nome}</td>
        <td>${p.status}</td>
        <td>${p.local}</td>
        <td>${p.horaInicio}</td>
        <td>${p.horaCirurgia}</td>
        <td>${p.horaFim}</td>
        <td>${p.horaSaida}</td>
        </tr>`

    }
    document.getElementById("tbody").innerHTML = tbody;
}