// Obtener los elementos del DOM
const producto1 = document.getElementById('producto1');
const producto2 = document.getElementById('producto2');
const producto3 = document.getElementById('producto3');
const totalPagar = document.getElementById('total');
const guardar = document.getElementById('guardarDatos');
const recuperar = document.getElementById('recuperarDatos');
const eliminar = document.getElementById('eliminarDatos');
const actualizar = document.getElementById('actualizarDatos');

// Escuchar los cambios en los inputs
producto1.addEventListener('change', actualizarTotal);
producto2.addEventListener('change', actualizarTotal);
producto3.addEventListener('change', actualizarTotal);

// Función para actualizar el total
function actualizarTotal() {
  const producto1Cantidad = parseInt(producto1.value) || 0;
  const producto2Cantidad = parseInt(producto2.value) || 0;
  const producto3Cantidad = parseInt(producto3.value) || 0;

  const producto1Price = 10;
  const producto2Price = 15;
  const producto3Price = 30;

  const total = (producto1Cantidad * producto1Price) + (producto2Cantidad * producto2Price) + (producto3Cantidad * producto3Price);

  totalPagar.textContent = total;
}

// Función para guardar los datos del carrito en el localStorage
function guardarDatos() {
  const producto1Cantidad = producto1.value;
  const producto2Cantidad = producto2.value;
  const producto3Cantidad = producto3.value;

  const data = {
    producto1Cantidad,
    producto2Cantidad,
    producto3Cantidad
  };

  localStorage.setItem('cartData', JSON.stringify(data));
  alert('Datos guardados correctamente.');
}

// Función para recuperar los datos del carrito del localStorage
function recuperarDatos() {
  const data = localStorage.getItem('cartData');

  if (data) {
    const parsedData = JSON.parse(data);

    producto1.value = parsedData.producto1Cantidad;
    producto2.value = parsedData.producto2Cantidad;
    producto3.value = parsedData.producto3Cantidad;

    actualizarTotal();
    alert('Datos recuperados correctamente.');
  } else {
    alert('No hay datos guardados.');
  }
}

// Función para eliminar los datos del carrito del localStorage
function eliminarDatos() {
  localStorage.removeItem('cartData');
  producto1.value = 0;
  producto2.value = 0;
  producto3.value = 0;
  actualizarTotal();
  alert('Datos eliminados correctamente.');
}

// Función para actualizar los datos del carrito en el localStorage
function actualizarDatos() {
  guardarDatos();
  alert('Datos actualizados correctamente.');
}

// Asociar eventos a los botones
guardar.addEventListener('click', guardarDatos);
recuperar.addEventListener('click', recuperarDatos);
eliminar.addEventListener('click', eliminarDatos);
actualizar.addEventListener('click', actualizarDatos);

// Validar la cantidad de productos para evitar valores negativos
producto1.addEventListener('input', validarCantidad);
producto2.addEventListener('input', validarCantidad);
producto3.addEventListener('input', validarCantidad);

function validarCantidad(e) {
  const input = e.target;
  const currentValue = parseInt(input.value);
  
  if (currentValue < 0) {
    input.value = 0;
    alert('La cantidad de productos no puede ser negativa.');
  }
}
