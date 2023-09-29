function crear(){
    var usuario = [{usuario : document.getElementById("Nuser").value, contraseña : document.getElementById("Npass").value, edad : document.getElementById("age").value}];
    return usuario;
}

var usuario = [{usuario : "Octavio", contraseña : "12345", edad : 19}, {usuario : "Pepe", contraseña : "12345", edad : 15}];

function login(){
    var parrafo = document.getElementById("parrafo");
    var user = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    
    for(let i = 0; i < usuario.length; i++){
        if(user == usuario[i].usuario && password == usuario[i].contraseña){
            console.log("si existe");
            if(usuario[i].edad >= 18){
                var p = document.createElement("p");
                p.innerHTML = "es mayor de edad";
                parrafo.appendChild(p);
            }
            else{
                var p = document.createElement("p");
                p.innerHTML = "es menor de edad";
                parrafo.appendChild(p);
            }
        }
        else{
            var p = document.createElement("p");
                p.innerHTML = "el usuario no existe";
                parrafo.appendChild(p);
        }
    }
}