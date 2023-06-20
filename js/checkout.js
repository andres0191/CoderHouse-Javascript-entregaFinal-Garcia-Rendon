const tbody = document.querySelector('tbody')

 function mostrarProductos(productCar){
    return`<tr>
                <td><img class="donitaIcon" src="${productCar.imagen}"></td>
                <td>${productCar.base}</td>
                <td>${productCar.description}</td>
                <td>${productCar.precio}</td>
                <td><a><img style="width:35px" src="./src/img/eliminar.png"></a></td>
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
