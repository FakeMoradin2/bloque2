var users = [
    { user: "Kapa", pass: "27", type: "A"},
    { user: "fernanda", pass: "fer", type: "B"},
    { user: "fransisco", pass: "1903", type: "B"}
];

var user, pass, userR, passR;

function extract() {
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
    userR = document.getElementById("userR").value;
    passR = document.getElementById("passR").value;
}

function login() {
    extract();
    var S = false;
    for (let i = 0; i < users.length; i++) {
        if (user == users[i].user && pass == users[i].pass) {
            alert("Te logeaste");
            S = true;
            if(users[i].type == "A"){
                ClearTable();
                ShowTable();
            }
            else{
                ClearTable();
            }
        }
    }
    if (!S) {
        alert("Contraseña o usuario incorrecto");
        ClearTable();
    }
}

function Register() {
    extract();
    users.push({ user: userR, pass: passR, type: "B"});
    ClearTable();
    ShowTable();
}

function ClearTable() {
    var table = document.getElementById("tabla");
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

function ShowTable() {
    let table = document.getElementById("tabla");
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 2; j++) {
            let td = document.createElement("td");
            let datos = [users[i].user, users[i].type];
            td.innerHTML = datos[j];
            tr.appendChild(td);
        }
        let input = document.createElement("input");
        input.type = "text";
        input.value = users[i].type;
        input.addEventListener("change", (event) => {
            users[i].type = event.target.value;
            ClearTable();
        });
        tr.appendChild(input);

        table.appendChild(tr);
    }
}