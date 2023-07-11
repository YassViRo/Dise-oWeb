document.getElementById('registroFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Validar campos de registro
  var nombre = document.getElementById('nombre').value;
  var apellidos = document.getElementById('apellidos').value;
  var email = document.getElementById('email').value;
  var contraseña = document.getElementById('contraseña').value;

  // Validar el formato de correo electrónico
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').style.display = 'block';
    return;
  }

  // Guardando datos
  guardarDatos(nombre, apellidos, email, contraseña);

  // Vaciar campos
  document.getElementById('nombre').value = '';
  document.getElementById('apellidos').value = '';
  document.getElementById('email').value = '';
  document.getElementById('contraseña').value = '';

  alert('¡Registro exitoso!');
  window.location.href = 'index.html';
});

function guardarDatos(nombre, apellidos, email, contraseña) {
  console.log('Guardando datos:');
  console.log('Nombre:', nombre);
  console.log('Apellidos:', apellidos);
  console.log('Email:', email);
  console.log('Contraseña:', contraseña);
}

