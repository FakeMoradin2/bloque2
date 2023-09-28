var numeros = [];

for (var i = 0; i < 7; i++) {
    var numeroTexto = prompt("Ingresa un número:");
    var numero = parseInt(numeroTexto);
    if (!isNaN(numero)) {
        numeros.push(numero); 
    } else {
        console.log("El valor ingresado no es un número válido. Por favor, intenta de nuevo.");
        i--; 
    }
}
console.log("los numeros ingresados son: ", numeros)
for(var i = 0; i <= numeros.length; i++){
    for(var a = 0; a <= numeros.length; a++){
        if(numeros[i] + numeros[a] === 10 && i != a && i < a){
            console.log("la suma de estos numeros da 10: ", numeros[i], numeros[a]);
        }
    }
}
