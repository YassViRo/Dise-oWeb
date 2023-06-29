document.getElementById('envioFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    // Validar campos de envío
    var destinatario = document.getElementById('destinatario').value;
    var direccion = document.getElementById('direccion').value;
    var pisoApartamento = document.getElementById('pisoApartamento').value;
    var departamento = document.getElementById('departamento').value;
    var provincia = document.getElementById('provincia').value;
    var distrito = document.getElementById('distrito').value;
  
    if (destinatario === '' || direccion === '' || departamento === '' || provincia === '' || distrito === '') {
      alert('Por favor, complete todos los campos obligatorios');
      return;
    }
  
    // Guardar datos de envío
    guardarDatosEnvio(destinatario, direccion, pisoApartamento, departamento, provincia, distrito);
  
    // Vaciar campos
    document.getElementById('destinatario').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('pisoApartamento').value = '';
    document.getElementById('departamento').value = '';
    document.getElementById('provincia').value = '';
    document.getElementById('distrito').value = '';
  
    alert('¡Envío guardado exitosamente!');
    window.location.href = 'Pago.html';
  });
  
  function guardarDatosEnvio(destinatario, direccion, pisoApartamento, departamento, provincia, distrito) {
    console.log('Guardando datos de envío:');
    console.log('Destinatario:', destinatario);
    console.log('Dirección:', direccion);
    console.log('Piso o Apartamento:', pisoApartamento);
    console.log('Departamento:', departamento);
    console.log('Provincia:', provincia);
    console.log('Distrito:', distrito);
  }
  