document.getElementById('identificacionFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    // Validar campos
    var correo = document.getElementById('correo').value;
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var tipoDocumento = document.getElementById('tipoDocumento').value;
    var documento = document.getElementById('documento').value;
    var telefono = document.getElementById('telefono').value;
  
    // Validar número de documento de identidad
    if (!/^[0-9]+$/.test(documento)) {
      document.getElementById('documento').classList.add('is-invalid');
      return;
    } else {
      document.getElementById('documento').classList.remove('is-invalid');
    }
  
    // Resto de la validación y procesamiento de datos
    if (correo === '' || nombre === '' || apellidos === '' || tipoDocumento === '' || documento === '' || telefono === '') {
      alert('Por favor, complete todos los campos');
      return;
    }
  
    // Guardando datos
    guardarDatos(correo, nombre, apellidos, tipoDocumento, documento, telefono);
  
    // Vaciar campos
    document.getElementById('correo').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('tipoDocumento').value = '';
    document.getElementById('documento').value = '';
    document.getElementById('telefono').value = '';
  
    alert('¡Identificación guardada exitosamente!');
    window.location.href = 'Envio.html';
  });
  
  function guardarDatos(correo, nombre, apellidos, tipoDocumento, documento, telefono) {
    console.log('Guardando datos de identificación:');
    console.log('Correo:', correo);
    console.log('Nombre:', nombre);
    console.log('Apellidos:', apellidos);
    console.log('Tipo de Documento:', tipoDocumento);
    console.log('Documento de Identidad:', documento);
    console.log('Teléfono Móvil:', telefono);
  }
  