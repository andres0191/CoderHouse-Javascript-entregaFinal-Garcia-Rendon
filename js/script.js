
const productos = []

function Dona(sabor, topping, cobertura){
        this.sabor = sabor
        this.topping = topping
        this.cobertura = cobertura
    }
    
function AgregarDona(){
    let agregarSabor  = prompt("Ingresa el sabor de tu dona. Puedes elegir entre:\nChocolate\nMiel Canela\nArequipe\nMoca\nFrutal\nMani")
    let agregarCobertura = prompt("Ingresa la cobertura de tu dona. Puedes elegir entre:\nChocolate negro\nAzucar-Canela\nRelleno de Arequipe\nChocolate\nChocolate de colores\nChocolate Negro")
    let agregarTopping = prompt("Ingresa el toping de tu dona. Puedes elegir entre:\nGrageas\nDecorado Chocolate\nRallas de Nutella\nMasmelos\nFruta Cristalizada\nMani")

    let donaFinal = new Dona(agregarSabor,agregarCobertura, agregarTopping)
    console.log(donaFinal)
    productos.push(donaFinal) 
}

function OtraDona() {
   let pregunta = confirm('Deseas agregar otra dona?')
    if(pregunta){
        AgregarDona()
    }else{
        alert('gracias por tu compra')
    }
}

function BuscarDona(){
    let param = prompt("Si deseas saber como elegiste tu dona, ingresa el sabor base que elegiste y podras ver tu eleccion completa. Recuerda que los sabores son: \nChocolate\nMiel Canela\nArequipe\nMoca\nFrutal\nMani")
    const resultado = productos.find((dona) => dona.sabor === param)
    if(resultado){
        alert(`Elegiste tu dona con los siguientes ingredientes:  ${resultado.sabor} - ${resultado.topping} - ${resultado.cobertura}`)
    }else{
        alert(`No hemos podido encontrat tu eleccion`)
    }    
    alert('gracias por tu compra')
}

function Ejecutar(){
    alert('Bienvenido a Donitas, a continuacion presiona enter para ingresar los sabores, cobertura y topings de tu ordern.')
    AgregarDona()
    OtraDona()
    BuscarDona()

}

Ejecutar()