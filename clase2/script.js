var suma = 0;
const dato = 100;


function login(){
    var num1 = document.getElementById("num1").value; //esto pide un objeto y despues del punto se pide solo ese atributo
    var num2 = document.getElementById("num2").value; //por lo tanto solo se pide el atributo de ese objeto

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    suma = num1 + num2; 


    if(suma > dato){
        console.log("la suma es: " + suma + " entonces es mayor a 100");
    }
    else if(suma == dato){
        console.log("la suma es igual a 100");
    }
    else{
        console.log("la suma es menor a 100");
    }
    if(user == variable1 && password == variable2){
        console.log("el usuario es correcto");
    }
    else{
        console.log("el usuario es incorrecto");
}
}

function condicion()
{
    var num2 = document.getElementById("num2").value;
    if(num2 > 10){
        if(num2 > 50){
            console.log("es mayor de 50");
        }
        else{
            console.log("es menor de 50");
        }
    }
    else{
        console.log("es menor que 10");
    }
}

var acumulador = 0;
function ciclo(){
    for(let i = 0; i <= 10; i++){
        if(i == 3){
            console.log("hola");
        }
        else{
            console.log(i)
        }
        acumulador += i;
    }
    console.log("la suma es: ", acumulador);
}



