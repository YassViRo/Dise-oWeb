function alertaConstruccion() {
    alert("Esta página está en construcción. Disculpa las molestias.");
 }

 function salirTienda() {
  if (confirm("¿Estás seguro de que deseas cerrar la tienda?")) {
    window.location.href = "index.html";
  }
}

let cart = []; // Array para almacenar los productos en el carrito

function añadiCarrito(product, price) {  actualizarCompra

    // Verificar si el producto ya existe en el carrito
    const index = cart.findIndex(item => item.product === product);

    if (index !== -1) {
        // Si el producto ya existe, incrementar la cantidad
        cart[index].quantity += 1;
    } else {
        // Si el producto no existe, agregarlo al carrito
        cart.push({ product: product, price: price, quantity: 1 });
    }

    actualizarCompra();
}

function removeFromCart(product) {
    // Verificar si el producto existe en el carrito
    const index = cart.findIndex(item => item.product === product);

    if (index !== -1) {
        // Si el producto existe, reducir la cantidad
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            // Si la cantidad es 1, eliminar el producto del carrito
            cart.splice(index, 1);
        }

        actualizarCompra();
    }
}

function actualizarCompra() {
    const cartBody = document.getElementById('cart-body');
    cartBody.innerHTML = ''; // Limpiar el contenido del carrito

    let total = 0; // Variable para almacenar el total de la compra

    // Recorrer los productos en el carrito y actualizar la tabla
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>S/${item.price.toFixed(2)}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.product}')">-</button>
            </td>
        `;

        cartBody.appendChild(row);

        // Calcular el subtotal del producto
        const subtotal = item.price * item.quantity;
        total += subtotal; // Sumar el subtotal al total
    });

    // Actualizar el total en el HTML
    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = `Total: S/${total.toFixed(2)}`;
}

function generarFactura() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (cart.length === 0 || name.trim() === '' || email.trim() === '') {
        alert('Debe ingresar al menos un producto y completar los campos de información del cliente.');
        return;
    }

    // Calcular el total de la compra
    const total = cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);

    // Generar la boleta de venta
    const factura = {
        name: name,
        email: email,
        products: cart,
        total: total.toFixed(2)
    };

    // Mostrar la boleta en la consola
    console.log(factura);

    // Reiniciar el carrito y limpiar los campos de información del cliente
    cart = [];
    actualizarCompra();
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    // Mostrar el modal de compra registrada
    mostrarCompra(name, total.toFixed(2));
}

function mostrarCompra(name, total) {
    const modal = document.getElementById('purchaseModal');
    const purchaseName = document.getElementById('purchase-name');
    const purchaseTotal = document.getElementById('purchase-total');

    purchaseName.textContent = name;
    purchaseTotal.textContent = `S/${total}`;

    $(modal).modal('show');
}

function vaciarCarrito() {  
    cart = [];
    actualizarCompra();
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}
