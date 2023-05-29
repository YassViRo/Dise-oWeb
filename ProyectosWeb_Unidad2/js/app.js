/*
BUSCAR ELEMENTOS HTML
document.querySelector('h3')
console.log(document.querySelector('h3'))

console.log(document.querySelector('.h3'))

console.log(document.querySelectorAll('.h3'))
console.log(document.querySelector('#parrafo'))

console.log(document.getElementById('parrafo'))
*/




/*
ELEMENTOS
const parrafo = document.getElementById('parrafo')
parrafo.textContent = 'texto desde JS'
parrafo.innerHTML = '<b>texto con INNER HTML</b>'
parrafo.classList.add('h3')
*/


/*
CREAR ELEMENTOS
const lista = document.getElementById('lista')
console.log(lista)


const arrayElement = ['primer elemento', 'segundo', 'tercer']


arrayElement.forEach(item =>{
    console.log(item)
    const li = document.createElement('li')
    li.textContent = item

    lista.appendChild(li)
})


arrayElement.forEach(item=>{
    lista.innerHTML += `<li>${item}</li>`
})
*/



/*
FRAGMENTOS
const arrayElement = ['primer elemento', 'segundo', 'tercer']
const lista = document.getElementById('lista')
console.log(lista)

const fragment = document.createDocumentFragment()

//const fragment = new DocumentFragment()

arrayElement.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    fragment.appendChild(li)
})

lista.appendChild(fragment)

*/


/*
INSERTAR PRIMERO:
const arrayElement = ['primer elemento', 'segundo', 'tercer']
const lista = document.getElementById('lista')
console.log(lista)

const fragment = document.createDocumentFragment()

//const fragment = new DocumentFragment()

arrayElement.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item

    const childNode = fragment.firstChild

    console.log(item. childNode)

    fragment.insertBefore(li, childNode)
})

lista.appendChild(fragment)

*/




const lista = document.getElementById('lista')

const arrayLista = ['Item 1', 'Item 2', 'Item 3']

/*
No acepta al inner  html   OPCIÓN 1
const fragment = document.createDocumentFragment()

arrayLista.forEach(item =>{
    const li = document.createElement('li')
    li.classList.add('list')

    const b = document.createElement('b')
    b.textContent = 'Nombre: '

    li.appendChild(b)

    const span = document.createElement('span')
    span.classList.add('text-danger')
    span.textContent = item

    li.append(b)
    li.append(span)

    fragment.append(li)
})

lista.appendChild(fragment)
*/



/*
OPCIÓN 2
let fragment = ''
arrayLista.forEach(item =>{
    fragment += `
    <li class='list'>
            <b>Nombre:</b> <span class="text-danger">${item}</span>
    </li>
    `
})

lista.innerHTML = fragment
*/


//MANIPULACIÓN CORRECTA - TEMPLATE  
const template = document.getElementById('template-li').content
const fragment = document.createDocumentFragment()


arrayLista.forEach(item =>{
    template.querySelector('.list span').textContent = item
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})

lista.appendChild(fragment)
