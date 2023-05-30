
let productos = []
//constructor
function dona(sabor, topping, cobertura){
        this.sabor = sabor;
        this.topping = topping;
        this.cobertura = cobertura;
    }
    
function agregarDona(){
    let agregarSabor  = prompt("Ingresa el sabor de tu dona. Puedes elegir entre:\nChocolate\nMiel Canela\nArequipe\nMoca\nFrutal\nMani")
    let agregarCobertura = prompt("Ingresa la cobertura de tu dona. Puedes elegir entre:\nChocolate negro\nAzucar-Canela\nRelleno de Arequipe\nChocolate\nChocolate de colores\nChocolate Negro")
    let agregarTopping = prompt("Ingresa el toping de tu dona. Puedes elegir entre:\nGrageas\nDecorado Chocolate\nRallas de Nutella\nMasmelos\nFruta Cristalizada\nMani")

    let donaFinal = new dona(agregarSabor,agregarCobertura, agregarTopping)
    console.log(donaFinal)
    productos.push(donaFinal) 
}

//agregar nuevo producto
let otraDona = function() {
    confirm('Deseas agregar otra dona?')
    if(confirm() ==  true){
        do{
            agregarDona()
        }while(confirm() == true)
    }else{
        alert('gracias por tu compra')
    }
}

//buscar producto
function buscarDona(){
    let param = prompt("Si deseas saber como elegiste tu dona, ingresa el sabor base que elegiste y podras ver tu eleccion completa. Recuerda que los sabores son: \nChocolate\nMiel Canela\nArequipe\nMoca\nFrutal\nMani")
    const resultado = productos.find((dona) => dona.sabor === param)
    alert(`Elegiste tu dona con los siguientes ingredientes:  ${resultado.sabor} - ${resultado.topping} - ${resultado.cobertura}`)
    alert('gracias por tu compra')
}

function ejecutar(){
    alert('Bienvenido a Donitas, a continuacion presiona enter para ingresar los sabores, cobertura y topings de tu ordern.')
    agregarDona()
    otraDona()
    buscarDona()

}

ejecutar()