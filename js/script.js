const titulo = document.getElementById('titulo')
titulo.textContent = 'Donitas'

const imgLogo = document.querySelector('img#logo')
const logoCesta = document.querySelector('img#logoCesta')
const vlorCount = document.querySelector('spam#count')

const nosotros = document.getElementById('nosotros')
nosotros.textContent = `¡Bienvenidos a Donitas!En Sweet Delights, somos una microempresa dedicada a la producción y venta de deliciosas mini donas. Nuestro amor por los postres nos ha llevado a crear un concepto único que combina la pasión por la repostería con la creatividad en cada una de nuestras creaciones. En cada paso del proceso de elaboración, nos esforzamos por brindar la máxima calidad. Utilizamos ingredientes frescos y de la más alta calidad para asegurar un sabor inigualable en cada bocado. Nuestras mini donas se hornean diariamente en nuestras instalaciones, lo que garantiza su frescura y textura irresistibles. La variedad es uno de nuestros pilares fundamentales. Ofrecemos una amplia gama de sabores exquisitos y coberturas tentadoras que te dejarán sin palabras. Desde clásicas como glaseado de chocolate y azúcar en polvo hasta opciones más audaces como caramelo salado y crema de avellanas, tenemos algo para satisfacer todos los gustos.`

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
  let contador = 0
  btns.forEach(boton => {
    boton.addEventListener('click', function(e) {
      const estilos = e.currentTarget.classList
      if(estilos.contains('addProdcut')){
        contador++
      }
      vlorCount.textContent = contador
    })
  })
}

logoCesta.addEventListener('click', ()=> {
  location.href = 'checkout.html'
})

logoCesta.addEventListener('mousemove', (e)=> {
  logoCesta.title = 'Ver Donitas'
})
