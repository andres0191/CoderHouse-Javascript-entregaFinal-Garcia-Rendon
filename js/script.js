const titulo = document.getElementById('titulo')
titulo.textContent = 'Donitas'

const imgLogo = document.querySelector('img#logo')


const bienvenidos = document.getElementById('bienvenido')
const texto = document.createTextNode('A continuacion se presenta la tercera pre-entrega para el proyecto final')
bienvenidos.appendChild(texto) 

const description = document.getElementById('nosotros')
description.textContent = `Donitas con sabor a chocolate, miel canela, arequipe, mocca, frutal y maní es una iniciativa novedosa que busca satisfacer el paladar de los amantes de las donitas y ofrecer una experiencia gastronómica única en el mercado de alimentos. La combinación de sabores dulces y salados ofrece una variedad de opciones para todo tipo de gustos. Nuestro principal <b>objetivo</b> es proporcionar una variedad de opciones de sabores para sus clientes. Para ello, se utilizarán ingredientes de alta calidad y se seguirán procesos de producción estrictos para garantizar la frescura y calidad de los productos.<br><br>Somos un negocio digital, por ello, utilizamos plataformas como Facebook, Twitter, Instagram, WhatsApp, Telegram, TickTock para promocionar nuestros productos y generar interaccion con nuestros clientes. `

const container = document.getElementById('container')
function retornoCardHTML(product){
    return `<div class="card" style="width: 18rem;margin-top: 5%;margin-bottom: 5%">
    <img src="${product.imagen}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${product.base}</h5>
      <p class="card-text">${product.description}</p>
      <b><p class="card-text">${product.precio}</p></b>
      <a class="btn btn-primary" id="${product.ref}">Agregar</a>
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
      arraySabores.forEach((producto) => {
          container.innerHTML += retornoCardHTML(producto)
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
      //console.table(carShop)
      localStorage.setItem('carShop', JSON.stringify(carShop))
    })
  }
}

imgLogo.addEventListener('click', ()=> {
  location.href = 'checkout.html'
})

imgLogo.addEventListener('mousemove', (e)=> {
  imgLogo.title = 'Ver Donitas'
})