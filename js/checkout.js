const tbody = document.querySelector('tbody')

 function mostrarProductos(productCar, index){
    return`<tr>
                <td><img class="donitaIcon" src="${productCar.imagen}"></td>
                <td>${productCar.base}</td>
                <td>${productCar.description}</td>
                <td>${productCar.precio}</td>
                <td class="deleteProduct"><img style="width:35px" src="./src/img/eliminar.png"></td>
           </tr>`
}
updateProducts()

function updateProducts(){
    let carShop = dataLS()
    console.log(carShop)

    if(carShop.length > 0){
        carShop.forEach((productCar) => {
            tbody.innerHTML += mostrarProductos(productCar)
        })
    }
}

//Delete Product
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('deleteProduct')) {
          const filaId = e.target.closest('tr').id;
          const index = parseInt(filaId.split('-')[1])
          carShop.splice(index, 1)
          localStorage.setItem('myShop', JSON.stringify(carShop))
          e.target.closest('tr').remove()
        }
      })
