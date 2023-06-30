const imgLogo = document.querySelector('img#logo')
const logoCesta = document.querySelector('img#logoCesta')
const valorCount = document.querySelector('spam#count')
const searchInput = document.querySelector('#searchInput')
const searchContainer = document.querySelector('#searchContainer')
const searchBtn = document.querySelector('#searchBtn')


const titulo = document.getElementById('titulo')
titulo.textContent = 'Donitas'

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


function retornoSearch(product){
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
      localStorage.setItem('myShop', JSON.stringify(carShop))
      console.log(JSON.stringify(carShop))
    })
  }
  //Count of products
  let count = 0
  btns.forEach(boton => {
    boton.addEventListener('click', function(e) {
      const estilos = e.currentTarget.classList
      if(estilos.contains('addProdcut')){
        count++
      }
      valorCount.textContent = count
    })
  })
  //print lst in Checkout page
  const lst = JSON.parse(localStorage.getItem('arraySabores'))
  console.log(lst)

}

logoCesta.addEventListener('click', ()=> {
  location.href = 'checkout.html'
})

logoCesta.addEventListener('mousemove', (e)=> {
  logoCesta.title = 'Ver Donitas'
})

function captureInput(){
  searchContainer.innerHTML = ''
  let textInput = searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      let dataInput = searchInput.value
      console.log(dataInput)
      let resultado = arraySabores.filter(dataInput => dataInput.base)
      console.log(resultado)
      for(let producto of arraySabores){
        let nombre = producto.base
        console.log(nombre)
        if(nombre.indexOf(textInput) !== 0){
          searchContainer.innerHTML = `
          <div class="card" style="width: 18rem;margin-top: 5%;margin-bottom: 5%">
            <img src="${nombre.imagen}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${nombre.base}</h5>
              <p class="card-text">${nombre.description}</p>
              <b><p class="card-text">${nombre.precio}</p></b>
              <a class="btn addProdcut btn-primary" id="${nombre.ref}">Agregar</a>
            </div>
          </div>
          ` 
        }
      }
    }else{
      searchContainer.innerHTML = ''
    }
  })
}

captureInput()



/* function searchProduct() {
  let search = document.getElementById("search")
  search.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      let dataInput = search.value
      // Filtrar el array de objetos de datos según la consulta de búsqueda
      let filtered = arraySabores.filter(function(obj) {
        let base = obj.base
        console.log(`estoy en el primer if ${base}`)
        arraySabores.forEach((dataInput) => {
          if(arraySabores.base === dataInput){
            console.log(`estoy en el segundo if`)
          }
        return base.includes(dataInput)
      })
      })
      console.table(filtered)
      console.log(searchContainer)
     
  }
})
} */
// Manejador de eventos para el evento "input" en el campo de búsqueda
/* search.addEventListener("input", search) */