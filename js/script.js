const titulo = document.getElementById('titulo')
titulo.textContent = 'Donitas'

const imgLogo = document.querySelector('img#logo')


const container = document.getElementById('container')
function retornoCardHTML(product){
    return `<div class="card" style="width: 18rem;margin-top: 5%;margin-bottom: 5%">
    <img src="${product.imagen}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${product.base}</h5>
      <p class="card-text">${product.description}</p>
      <b><p class="card-text">${product.precio}</p></b>
      <a class="btn addProdcut btn-primary" id="${product.ref}">Agregar</a>
    </div>
  </div>`
}

function productErr(){
  return `<div id="productErr">
            <h2>Error</h2>
            <h3>Producto No disponible</h3>
          </div>`
}

function cargarPorductos(){
    container.innerHTML = ''
    if(arraySabores.length > 0){
      arraySabores.forEach((product) => {
          container.innerHTML += retornoCardHTML(product)
      })
    }else{
      container.innerHTML = productErr()
    }
    activarClick()
}
cargarPorductos()

function activarClick(){
  const btns = document.querySelectorAll('a.btn.btn-primary')
  for (let btn of btns){
    btn.addEventListener('click', (e)=> {
      const donaSeleccionada = arraySabores.find((sabor) => sabor.ref === parseInt(e.target.id))
      carShop.push(donaSeleccionada)
      console.table(carShop)
      localStorage.setItem('carShop', JSON.stringify(carShop))
      console.log(JSON.stringify(carShop))
    })
  }
}

imgLogo.addEventListener('click', ()=> {
  location.href = 'checkout.html'
})

imgLogo.addEventListener('mousemove', (e)=> {
  imgLogo.title = 'Ver Donitas'
})