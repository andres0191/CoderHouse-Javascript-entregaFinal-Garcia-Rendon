
function descuentos(){
    alert('Este es un ejercicio en el cual se practicaron temas como condicionales, ciclos, e iteraciones. A continuacion vas a ingresar 3 precios diferentes, seguidos del valor de descuento que deseas aplicar.')
const priceOne = window.prompt('ingresa un precio'),
    priceTwo = window.prompt('ingresa el segundo precio'),
    priceTrhee = window.prompt('ingresa el tercer precio'),
    dto = window.prompt('Ingresa el valor de dto que desas aplicar'),
    allPrice = [priceOne, priceTwo, priceTrhee]

if(isNaN(allPrice[0]) || isNaN(allPrice[1]) || isNaN(allPrice[2]) || isNaN(dto) || allPrice=="" ){
    alert(`debes ingresar solo numeros`)
}else if(priceOne == 0 || priceTwo == 0 || priceTrhee == 0 ){
    alert('ingresa al menos un valor')
    }else{
        for(let i =0; i<allPrice.length; i++){
            let descuento= allPrice[i]*`0.${dto}`
                descuento = parseInt(descuento.toFixed(2))
                if(descuento==NaN){
                    alert('ingresa un dato valido')
                    break
                }else{
                alert(`El valor de dto aplicado al precio de $ ${allPrice[i]} sera de $ ${descuento}, por lo tanto debes cancelar: $ ${allPrice[i] - descuento}`)
                }
        }
    } 

}




