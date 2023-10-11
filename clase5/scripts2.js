var array = ["Jose", "Pedro", "Holy", "Gaby"];
var numeros = [ 5, 35, 64, 3, 27, 18 ,5 ,8];

var usuarios = [];

function pedir() {
        var usuario = document.getElementById("Nuser").value;
        var contraseña = document.getElementById("Npass").value;
        var age = document.getElementById("age").value;

        var nuevoUsuario = {
            username: usuario,
            password: contraseña,
            age: age
        };

            usuarios.push(nuevoUsuario);
}

function show() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    for (var i = 0; i < usuarios.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = "Usuario: " + usuarios[i].username + " / Edad: " + usuarios[i].age;
        lista.appendChild(li);
    }
}

function crear(){
    pedir();
    show();
}

//Funcion de control de datos
function borrar(){
    usuarios.pop();
    show();
}

function borrarP(){
    usuarios.shift();
    show();
}

function ordenar(){
    usuarios.sort((a, b) => a.age - b.age);  //si no se pone la condicion lo acomoda en orden alfabetico 
    //usuarios.sort((a, b) => a.username.localeCompare(b.username)); para acomodar los strings
    show();
}

function voltearCa(){
    usuarios.reverse();
    show();
}

function buscar() {
    var usuarioBuscado = document.getElementById("Nuser").value;
    var encontrado = usuarios.find(function(usuario) {
        return usuario.username === usuarioBuscado;
    });
    if (encontrado) {
        alert("Usuario encontrado: " + encontrado.username);
    } else {
        alert("Usuario no encontrado");
    }
}