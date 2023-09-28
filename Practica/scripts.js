function ObtenerN(){
    var usuario = [{nombre : document.getElementById("nombre").value, apellido : document.getElementById("apell").value}];

    var tabla = document.getElementById("tabla")
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");

    td.innerHTML = usuario[0].nombre;
    td2.innerHTML = usuario[0].apellido;

    tr.appendChild(td);
    tr.appendChild(td2);
    tabla.appendChild(tr);
}

function main(){
    ObtenerN();
}