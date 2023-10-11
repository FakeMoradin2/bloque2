/*var array = ["Octavio"arreglo en su campo 0 "gabriel" arreglo en su campo 1];
function crear(){
    var usuario = document.getElementById("Nuser").value;
    array.push(usuario);
    show();
}*/
var array = ["Jose", "Pedro", "Holy", "Gaby"];

function showA(){
    crear();
    var liJs = document.getElementById("lista");
    for (var i = 0; i < array.length; i++) {
        var liJa = document.createElement("li");
        liJa.innerHTML = array[i]; 
        liJs.appendChild(liJa);
    }
}

var usuarios = [];
function crear(){
    var user = document.getElementById("Nuser").value;
    var pass = document.getElementById("Npass").value;
    var age = document.getElementById("age").value;

    var NuevoUsuario = {
        usuario : user,
        password : pass,
        edad : age
    }
    usuarios.push(NuevoUsuario);
    show();
}

function show(){
    var liJs = document.getElementById("lista");
    liJs.innerHTML = "";
    for(var i = 0; i < usuarios.length; i++){
        var liJa = document.createElement("li");
        liJa.innerHTML = usuarios[i].usuario + " / edad: " + usuarios[i].edad;
        liJs.appendChild(liJa);
    }
}

function borrar(){
    usuarios.pop();
    show();
}

function borrarP(){
    usuarios.shift();
    show();
}

function ordenar(){
    array.sort();
    showA();
}

function voltearCa(){
    array.reverse();
    show();
}

function buscar(){
    pedir();
    var res = array.find(datos => datos === Nuser);
    if(res){
        alert(res);
    }
    else{
        alert("no se encontro");
    }
}

































/*var usuarios = [{}];

function crear(){
    var usuario = {usuario : document.getElementById("Nuser").value, contraseña : document.getElementById("Npass").value, edad : document.getElementById("age").value};
    usuarios.push(usuario);
}

function login() {
    var parrafo = document.getElementById("parrafo");
    var user = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var usuarioEncontrado = false;

    for (let i = 0; i < usuarios.length; i++) {
        if (user === usuarios[i].usuario && password === usuarios[i].contraseña) {
            console.log("El usuario existe");
            usuarioEncontrado = true;

            if (usuarios[i].edad >= 18) {
                parrafo.innerHTML = "Es mayor de edad";
            } else {
                parrafo.innerHTML = "Es menor de edad";
            }
            break;
        }
    }
    if (!usuarioEncontrado) {
        parrafo.innerHTML = "El usuario no existe";
    }
}*/