//Lista de productos

const lista_productos = document.getElementById('lista_productos')

const productos = ['Producto A S/150.00', 'Producto B S/200.00', 'Producto C S/300.00']

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
const resultado1 = document.getElementById('resultado1')
const contenedor1 = document.getElementById('contenedorA')
let contador1=0

contenedor1.addEventListener('click', (e) =>{
    if(e.target.classList.contains("btnA")){
        contador1++
        resultado1.textContent=contador1
    }

    if(e.target.classList.contains("btnD")){
        contador1--
        resultado1.textContent=contador1
    }
})

//CONTENEDOR B
const resultado2 = document.getElementById('resultado2')
const contenedor2 = document.getElementById('contenedorB')
let contador2=0

contenedor2.addEventListener('click', (e) =>{
    if(e.target.classList.contains("btnA")){
        contador2++
        resultado2.textContent=contador2
    }

    if(e.target.classList.contains("btnD")){
        contador2--
        resultado2.textContent=contador2
    }
})

//CONTENEDOR C
const resultado3 = document.getElementById('resultado3')
const contenedor3 = document.getElementById('contenedorC')
let contador3=0

contenedor3.addEventListener('click', (e) =>{
    if(e.target.classList.contains("btnA")){
        contador3++
        resultado3.textContent=contador3
    }

    if(e.target.classList.contains("btnD")){
        contador3--
        resultado3.textContent=contador3
    }
})