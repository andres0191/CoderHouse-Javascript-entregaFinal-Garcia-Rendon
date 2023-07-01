const tbody = document.querySelector('tbody')
const myTable = document.querySelector('#myTable')
const animatinoGif = document.querySelector('#animatinoGif')
const imgGif = './src/img/donitaTime.gif'



 function mostrarProductos(productCar){
    return`<tr id="${productCar.ref}">
                <td><img class="donitaIcon" src="${productCar.imagen}"></td>
                <td>${productCar.base}</td>
                <td>${productCar.description}</td>
                <td>${productCar.precio}</td>
                <td><img class="deleteProduct" style="width:35px" src="./src/img/eliminar.png"></td>
           </tr>`
}

//Add prodcuts to LS and print in table
function updateProducts(){
    animatinoGif.innerHTML = `<img src=${imgGif}>`
    setTimeout(() => {
        animatinoGif.innerHTML = ''
        let carShop = dataLS()
        if(carShop.length > 0){
            carShop.forEach((productCar) => {
                tbody.innerHTML += mostrarProductos(productCar)
            })
        }
    }, 3500);
}

updateProducts()

//Delete Product
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('deleteProduct')) {
        const rowId = e.target.closest('tr').id;
        const index = parseInt(rowId.split('-')[1])
        carShop.splice(index, 1)
        localStorage.setItem('myShop', JSON.stringify(carShop))
        e.target.closest('tr').remove()
        alertify.message('Producto eliminado con exito :)');
    }
})

//animation of onload page
/* window.onload = function(){
    alert('esta cargando la pagina')
    setTimeout(() => {
        alert('Ya cargo la pagina')
    }, 3000);
} */