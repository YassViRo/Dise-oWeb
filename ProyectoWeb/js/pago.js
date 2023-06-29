document.getElementById('pagoFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    // Validar campos de pago
    var nombreTitular = document.getElementById('nombreTitular').value;
    var numeroTarjeta = document.getElementById('numeroTarjeta').value;
    var metodoPago = document.getElementById('metodoPago').value;
    var mesVencimiento = document.getElementById('mesVencimiento').value;
    var anioVencimiento = document.getElementById('anioVencimiento').value;
    var codigoSeguridad = document.getElementById('codigoSeguridad').value;
  
    if (nombreTitular.length <= 3) {
      alert('El nombre del titular debe contener más de 3 caracteres');
      return;
    }
  
    if (numeroTarjeta.length !== 16 || isNaN(numeroTarjeta)) {
      alert('Ingrese un número de tarjeta válido (16 dígitos)');
      return;
    }
  
    if (codigoSeguridad.length !== 3 || isNaN(codigoSeguridad)) {
      alert('Ingrese un código de seguridad válido (3 dígitos)');
      return;
    }
  
    // Guardar datos
    guardarDatosPago(nombreTitular, numeroTarjeta, metodoPago, mesVencimiento, anioVencimiento, codigoSeguridad);
  
    // Vaciar campos
    document.getElementById('nombreTitular').value = '';
    document.getElementById('numeroTarjeta').value = '';
    document.getElementById('metodoPago').value = '';
    document.getElementById('mesVencimiento').value = '';
    document.getElementById('anioVencimiento').value = '';
    document.getElementById('codigoSeguridad').value = '';
  
    alert('¡Método de pago registrado correctamente!');
  });
  
  function guardarDatosPago(nombreTitular, numeroTarjeta, metodoPago, mesVencimiento, anioVencimiento, codigoSeguridad) {
    console.log('Guardando datos de pago:');
    console.log('Nombres completos del titular:', nombreTitular);
    console.log('Número de tarjeta:', numeroTarjeta);
    console.log('Método de pago:', metodoPago);
    console.log('Fecha de vencimiento:', mesVencimiento + '/' + anioVencimiento);
    console.log('Código de seguridad:', codigoSeguridad);
  }
  