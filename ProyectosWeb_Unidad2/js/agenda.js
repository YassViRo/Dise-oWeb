function guardarDatos() {
    var nombre = document.getElementById('nombre').value;
    var movil = document.getElementById('movil').value;
    var email = document.getElementById('email').value;

    if (!validarNombre(nombre)) {
        alert("El nombre solo debe contener letras");
        return;
    }

    if (!validarTelefono(movil)) {
        alert("El número de teléfono solo debe contener números");
        return;
    }

    var contacto = {
        movil: movil,
        email: email
    };

    localStorage.setItem(nombre, JSON.stringify(contacto));

    document.getElementById('nombre').value = '';
    document.getElementById('movil').value = '';
    document.getElementById('email').value = '';

    alert("Contacto guardado exitosamente");

    actualizarDatos();
}

function validarNombre(nombre) {
    var regex = /^[a-zA-Z\s]*$/;
    return regex.test(nombre);
}

function validarTelefono(telefono) {
    var regex = /^\d+$/;
    return regex.test(telefono);
}

function recuperarDatos() {
    var nombre = document.getElementById('nombre').value;
    var contacto = JSON.parse(localStorage.getItem(nombre));
    if (contacto) {
        document.getElementById('movil').value = contacto.movil;
        document.getElementById('email').value = contacto.email;
    } else {
        document.getElementById('movil').value = '';
        document.getElementById('email').value = '';
    }
}

function eliminarDatos() {
    var nombre = document.getElementById('nombre').value.trim();

    var contactos = Object.keys(localStorage); 
    if (contactos.includes(nombre)) {
        localStorage.removeItem(nombre);
        actualizarDatos();
        alert("Contacto eliminado exitosamente");
    } else {
        alert("El contacto no existe");
    }
}



function eliminarTodosDatos() {
    localStorage.clear();
    actualizarDatos();
    alert("Todos los contactos han sido eliminados exitosamente");
}

function actualizarDatos() {
    var contactosContainer = document.getElementById('contactos');
    contactosContainer.innerHTML = '';

    if (localStorage.length === 0) {
        var emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'Vacio';
        contactosContainer.appendChild(emptyMessage);
    } else {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var contacto = JSON.parse(localStorage.getItem(key));

            var contactoItem = document.createElement('li');
            contactoItem.classList.add('contacto');

            var nombreElement = document.createElement('span');
            nombreElement.classList.add('nombre');
            nombreElement.textContent = key;

            var movilElement = document.createElement('span');
            movilElement.textContent = contacto.movil;

            var emailElement = document.createElement('span');
            emailElement.textContent = contacto.email;

            contactoItem.appendChild(nombreElement);
            contactoItem.appendChild(movilElement);
            contactoItem.appendChild(emailElement);

            contactosContainer.appendChild(contactoItem);
        }
    }
}
