document.getElementById('formularioReclamo').addEventListener('submit', enviarFormulario);

function enviarFormulario(event) {
  event.preventDefault();

  var nombre = document.getElementById('nombre').value;
  var direccion = document.getElementById('direccion').value;
  var correo = document.getElementById('correo').value;
  var quejaReclamo = document.getElementById('quejaReclamo').value;
  var apellidos = document.getElementById('apellidos').value;
  var documentoIdentidad = document.getElementById('documentoIdentidad').value;
  var telefono = document.getElementById('telefono').value;
  var numeroPedido = document.getElementById('numeroPedido').value;
  var descripcion = document.getElementById('descripcion').value;

  if (nombre === '' || direccion === '' || correo === '' || quejaReclamo === '' || apellidos === '' || documentoIdentidad === '' || telefono === '' || numeroPedido === '' || descripcion === '') {
    alert('Por favor, complete todos los campos obligatorios');
    return;
  }

  guardarReclamo(nombre, direccion, correo, quejaReclamo, apellidos, documentoIdentidad, telefono, numeroPedido, descripcion);

  document.getElementById('formularioReclamo').reset();

  alert('¡Reclamo guardado exitosamente!, redigirendo a la página principal');
  window.location.href = 'index.html';
}

function guardarReclamo(nombre, direccion, correo, quejaReclamo, apellidos, documentoIdentidad, telefono, numeroPedido, descripcion) {
  console.log('Guardando reclamo:');
  console.log('Nombre:', nombre);
  console.log('Dirección:', direccion);
  console.log('Correo:', correo);
  console.log('Queja/Reclamo:', quejaReclamo);
  console.log('Apellidos:', apellidos);
  console.log('Documento de Identidad:', documentoIdentidad);
  console.log('Teléfono:', telefono);
  console.log('Número de Pedido:', numeroPedido);
  console.log('Descripción:', descripcion);
}
