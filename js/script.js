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

const containerProducts = document.getElementById('containerProducts')
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

//Function of cargar productos in principal page
function cargarProductos(arr){
  containerProducts.innerHTML = ''
    if(arr.length > 0){
      arr.forEach((product) => {
        containerProducts.innerHTML += retornoCardHTML(product)
      })
    }
    activarClick()
}

//async awati
async function obtenerPordutos(){
  try {
    const response = await fetch(localProducts);
    const data = await response.json();
    arraySabores.push(...data);
    cargarProductos(arraySabores);
  }catch (error) {
    console.log(error);
  }
}
obtenerPordutos()

//add product to the car
function activarClick(){
  const btns = document.querySelectorAll('a.btn.btn-primary')
  for (let btn of btns){
    btn.addEventListener('click', (e)=> {
      const donaSeleccionada = arraySabores.find((sabor) => sabor.ref === parseInt(e.target.id))
      carShop.push(donaSeleccionada)
      console.table(carShop)
      alertify.message('Producto agregado con exito :)');
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

//Functions of search input
searchInput.addEventListener('keyup', function(event){
  (event.key === 'Enter') ? captureInput() : 'holi'
})

function captureInput(){
  searchContainer.innerHTML = ''
  let datainput = searchInput.value
  let resultado = arraySabores.filter(prod => prod.base.includes(datainput))
  cargarProductos(resultado)
}
