const titulo = document.getElementById('titulo')
titulo.textContent = 'Donitas'

const imgLogo = document.querySelector('img#logo')
const carReview = document.getElementById('carReview')
carReview.textContent = 'Por favor revisa tu carrito antes de finalizar la compra'

const tbody = document.querySelector('tbody')

function mostrarProductos(product){
    return`<tr>
                <td>${product.imagen}</td>
                <td>${product.base}</td>
                <td>${product.description}</td>
                <td>${product.precio}</td>
           </tr>`
}

if(carShop.length >= 0){
    carShop.forEach((product) => {
        tbody.innerHTML += mostrarProductos(product)
    })
}



