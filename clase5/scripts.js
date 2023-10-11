var array = ["Jose", "Pedro", "Holy", "Gaby"];
var Nuser;


function pedir(){
    Nuser = [document.getElementById("Nuser").value];
}
function login(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    for(var i = 0; i < array.length; i++){
    if(user == array[i]){
        var p = document.createElement("p");
                p.innerHTML = "existe";
                parrafo.appendChild(p);
    }
    }
}

function show(){
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    for(var i = 0; i < array.length; i++){
        var li = document.createElement("li");
        li.id = "elemento: " + i;
        var button = document.createElement("button");
        button.innerHTML = "delete";
        button.addEventListener("click", () => {Splice(i)})
        li.innerHTML = array[i];
        li.appendChild(button);
        lista.appendChild(li);
    }
}

function crear(){
    pedir();
    array.push(Nuser);
    show();
}
//Funcion de control de datos
function borrar(){
    var temp = array.pop();
    alert(temp);
    show();
}

function borrarP(){
    array.shift();
    show();
}

function ordenar(){
    array.sort();
    show();
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


function Splice(D){   //(indice, cuantos, que va a poner); con "cuantos en 0 va a insertar"
    array.splice(D, 1); /* con un valor borra de ese en adelante, 
                        con dos valores borra apartir del primero los que le digas y con 3 sustituye el valor*/
    show();
}