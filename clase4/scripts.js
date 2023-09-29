var boolean = true;
var string = "Akira";

function check(){
    if(boolean){
        console.log("Funciona");
    }
    else{
        console.log("esto no funciona");
    }
}

function create(){
    var box = document.getElementById("box").checked;
    if(box){
        var objeto = document.getElementById("show");
        objeto.style.background = "pink"; //del objeto me estoy trayendo su estilo y usando el background
        objeto.style.width = "60%";
        objeto.style.textAlign = "right";
        var imagen = document.createElement("img");
        imagen.src = "https://saborusa.com.pa/imagesmg/imagenes/5ff3e6a0b703f_potatoes-food-supermarket-agriculture-JG7QGNY.jpg"
        objeto.appendChild(imagen);
    }
}