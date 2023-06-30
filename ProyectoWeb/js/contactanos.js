document.getElementById('contactoFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    // Validar campos de contacto
    var nombres = document.getElementById('nombres').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var tipoSolicitud = document.getElementById('tipoSolicitud').value;
    var descripcion = document.getElementById('descripcion').value;
    var adjuntos = document.getElementById('adjuntos').value;
  
    if (!validarNombres(nombres)) {
      alert('Ingrese nombres válidos (solo caracteres alfabéticos)');
      return;
    }
  
    if (!validarEmail(email)) {
      alert('Ingrese un email válido');
      return;
    }
  
    if (!validarTelefono(telefono)) {
      alert('Ingrese un número de teléfono válido (solo números)');
      return;
    }
  
    // Enviar formulario
    enviarFormulario(nombres, email, telefono, tipoSolicitud, descripcion, adjuntos);
  });
  
  function validarNombres(nombres) {
    var regex = /^[A-Za-z\s]+$/;
    return regex.test(nombres);
  }
  
  function validarEmail(email) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }
  
  function validarTelefono(telefono) {
    var regex = /^[0-9]+$/;
    return regex.test(telefono);
  }
  
  function enviarFormulario(nombres, email, telefono, tipoSolicitud, descripcion, adjuntos) {
    console.log('Enviando formulario de contacto:');
    console.log('Nombres:', nombres);
    console.log('Email:', email);
    console.log('Teléfono:', telefono);
    console.log('Tipo de solicitud:', tipoSolicitud);
    console.log('Descripción:', descripcion);
    console.log('Archivos adjuntos:', adjuntos);
  
    // Limpiar campos
    document.getElementById('nombres').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('tipoSolicitud').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('adjuntos').value = '';
  
    alert('¡Formulario enviado exitosamente!');
  }
  