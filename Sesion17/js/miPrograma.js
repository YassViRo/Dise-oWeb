function compara() {
    var a = 4;
    var b = 4;
    if(a == b){
        alert("A y B son iguales");
    }else{
        alert("A y B son diferentes");
    }
}

function resta(x,y) {
    var rest = x - y;
    document.write("<h2>La resta es: " + rest + "</h2>");
}

function suma(x,y){
    var suma = x + y;
    document.getElementById("sumar").innerHTML = "La suma es: " + suma;
}

function escribir(){
    valor = document.getElementById("entrada").value;
    document.getElementById("contenido").innerHTML = ' ' + valor;
}