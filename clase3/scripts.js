var plantas = ["Rosa", "Girasol",  "tulipan", "cactus", "suculenta"];
var objetos = [
{Nombre : "Jose", Apellido : "Perez", Edad : 32},
{Nombre : "Octavio", Apellido : "Chong", Edad : 19},
{Nombre : "Pedro", Apellido : "Aguirre", Edad : 27},
{Nombre : "Luis", Apellido : "vazquez", Edad : 32}];

function ShowList(){
    var lista = document.getElementById("list");
    for(let i = 0; i < plantas.length; i++){
        var li = document.createElement("li"); //crea cualquier elemento de html desde JS
        li.innerHTML = plantas[i]; //pon en el html
        lista.appendChild(li); //haz hijo a lo que este dentro del parentesis
    }
}
function ShowTable(){
    var tabla = document.getElementById("Table");

    for(let i = 0; i < objetos.length; i++){
        var tr = document.createElement("tr");

    for (let j = 0; j < objetos.length; j++) {
        var td = document.createElement("td");
        
        var datos = [objetos[i].Nombre, objetos[i].Apellido, objetos[i].Edad];

        td.innerHTML = datos[j];
        tr.appendChild(td);
    }
    tabla.appendChild(tr);
    }
}

function alternativo(){
    var lista = document.getElementById("list");
    plantas.forEach(
        function(datos)
        { //ForEach sirve para desarmar arreglos
        var li = document.createElement("li"); //crea cualquier elemento de html desde JS
        li.innerHTML = datos; //pon en el html
        lista.appendChild(li);
    }
    )
}

function main(){ //funcion que manda llamar distintas funciones
    ShowList();
    ShowTable();
}

function login(){
    for(let i = 0; i < objetos.length; i++){
        var usuario = document.getElementById("user").value;
        var contraseña = document.getElementById("pass").value;

        if(usuario == objetos[i].Nombre && contraseña == objetos[i].Apellido){
            window.location = "index.html";
        }
        else{
            console.log("no se cumple");
        }
    }
}
