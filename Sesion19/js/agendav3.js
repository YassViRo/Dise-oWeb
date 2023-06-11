window.onload = function() {//es como una clases con atribos
    var objJason = {
        "Personas":[
            {"nombre":"Jorge", "edad":23},
            {"nombre":"Carlos", "edad":19},
            {"nombre":"Maria", "edad":43},
            {"nombre":"Tomas", "edad":25},
        ]
    };

    for (var i  = 0; i < 4; i++) {
        texto = objJason.Personas[i].nombre + " " + objJason.Personas[i].edad + "<br>";

        document.getElementById("contenido").innerHTML += texto;
    }
}