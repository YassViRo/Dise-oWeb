//JAVASCRIPT
//Lista de productos

const lista_productos = document.getElementById('lista_productos')

const productos = ['Producto A', 'Producto B', 'Producto C']

const template = document.getElementById('template_item').content

const fragment = document.createDocumentFragment()

productos.forEach(item => {
    template.querySelector('.lista .productos').textContent = item
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
});

lista_productos.appendChild(fragment)
console.log(lista_productos)

//Botones para aumentar la cantidad

//CONTENEDOR A
const cantidad1 = document.getElementById('cantidad1')
const contenedor1 = document.getElementById('contenedorA')
let contador1=0

contenedor1.addEventListener('click', (e) =>{
    if(e.target.classList.contains("btnA")){
        contador1++
        cantidad1.textContent=contador1
        actualizarTotales();
    }
    if (contador1<=0) {
        alert("Acción no valida")
    } else {
        if(e.target.classList.contains("btnD")){
            contador1--
            cantidad1.textContent=contador1
            actualizarTotales();
        }   
    }
})

//CONTENEDOR B
const cantidad2 = document.getElementById('cantidad2')
const contenedor2 = document.getElementById('contenedorB')
let contador2=0

contenedor2.addEventListener('click', (e) =>{
    if(e.target.classList.contains("btnA")){
        contador2++
        cantidad2.textContent=contador2
        actualizarTotales();
    }

    if (contador2<=0) {
        alert("Acción no valida")
    } else {
        if(e.target.classList.contains("btnD")){
            contador2--
            cantidad2.textContent=contador2
            actualizarTotales();
        }
    }
})

//CONTENEDOR C
const cantidad3 = document.getElementById('cantidad3')
const contenedor3 = document.getElementById('contenedorC')
let contador3 = 0

contenedor3.addEventListener('click', (e) => {
    if (e.target.classList.contains("btnA")) {
        contador3++
        cantidad3.textContent = contador3
        actualizarTotales();
    }
//Condición
    if (contador3 <= 0) {
        alert("Acción no válida")
    } else {
        if (e.target.classList.contains("btnD")) {
            contador3--
            cantidad3.textContent = contador3
            actualizarTotales();
        }
    }
})

// Actualizar subtotales y total
function actualizarTotales() {
    const subtotal1 = contador1 * 150;
    const subtotal2 = contador2 * 200;
    const subtotal3 = contador3 * 300;  
    //Definimos la celda del precio
    const subtotalElement1 = document.getElementById('subtotal1');
    const subtotalElement2 = document.getElementById('subtotal2');
    const subtotalElement3 = document.getElementById('subtotal3');
    const totalElement = document.getElementById('total');


    cantidad1.textContent=contador1;

    //Agregamos el valor del precio
    precio1.textContent = 'S/' + "150";
    precio2.textContent = 'S/' + "200";
    precio3.textContent = 'S/' + "300";
  
    subtotalElement1.textContent = 'S/' + subtotal1.toFixed(2);
    subtotalElement2.textContent = 'S/' + subtotal2.toFixed(2);
    subtotalElement3.textContent = 'S/' + subtotal3.toFixed(2);
  
    const total = subtotal1 + subtotal2 + subtotal3;
    totalElement.textContent = 'S/' + total.toFixed(2);
  }
  
  // Initial calculation of subtotals and total
  actualizarTotales();