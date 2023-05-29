function mostrarDescripcion(){
    var combo = document.getElementById('productoSelect');

    var imagen = document.getElementById('productoImagen');
    var descProducto = document.getElementById('productoDescripcion');

    //Producto va a almacenar laptop, smartphone o tablet
    var producto = combo.value;

    switch (producto) {
        case "laptop":
            descripcion="Es un dispositivo portatil para utilizar diversas aplicaciones";
            imagenSrc="img/laptop.jpg";
            break;
    
        case "telefono":
            descripcion="Es un dispositivo de comunicaciones para hacer llamadas y enviar mensajes";
            imagenSrc="img/smartphone.png";
        break;

        case "tablet":
            descripcion="Es un dispositivo híbrido entre una laptop y un teléfono...";
            imagenSrc="img/tablet.png";
        break;
        default:
            var descripcion = "";
            var imagenSrc ="";
        break;
    }
    imagen.src = imagenSrc;
    descProducto.textContent = descripcion;
}