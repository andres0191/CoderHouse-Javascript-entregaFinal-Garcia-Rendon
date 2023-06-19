const titulo = document.getElementById('titulo')
titulo.textContent = 'Donitas'

console.log(arrayPorductos)

const container = document.getElementById('container')
function retornoCardHTML(producto){
    return `<div class="card" style="width: 18rem;margin-top: 5%;margin-bottom: 5%">
    <img src="${producto.imagen}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${producto.base}</h5>
      <p class="card-text">${producto.description}</p>
      <a href="#" class="btn btn-primary" id="${producto.codigo}>Agregar</a>
    </div>
  </div>`
}

function cargarPorductos(){
    container.innerHTML = ''
    arrayPorductos.forEach((producto) => {
        container.innerHTML += retornoCardHTML(producto)
    });
}
cargarPorductos()

