function dataLS() {
    if(localStorage.getItem('myShop')){
        return JSON.parse(localStorage.getItem('myShop'))
    }else{
        return []
    }
}

const carShop = dataLS()
const arraySabores = []
const localProducts = 'js/products.json'
