function dataLS() {
    if(localStorage.getItem('myShop')){
        return JSON.parse(localStorage.getItem('myShop'))
    }else{
        return []
    }
}

const carShop = dataLS()
// array of products
const arraySabores = [{
    base: 'Chocolate',
    ref: 1,
    cobertura: 'Coclate Negro',
    topping:'Grageas',
    precio: 3000,
    imagen: './src/img/dona1.jpeg',
    description: 'Donut de chocolate con cobertura de chocolate negro y grageas'
},
{
    base: 'Miel Canela',
    ref: 2,
    cobertura:  'Azucar Canela ',
    topping: 'Decorado con Chocolate',
    precio: 3500,
    imagen: './src/img/dona2.jpeg',
    description: 'Donut de chocolate con cobertura de chocolate negro y grageas'
},
{
    base: 'Arequipe',
    ref: 3,
    cobertura:  'Relleno de arequipe ',
    topping: 'Nutella',
    precio: 2500,
    imagen: './src/img/dona3.jpg',
    description: 'Donut de arequipe con relleno de arequipe y decorado de nutella'
},
{
    base: 'Moca',
    ref: 4,
    cobertura: 'Chocolate',
    topping: 'Masmelos',
    precio: 3800,
    imagen: './src/img/dona4.jpg',
    description: 'Donut de Moca con cobertura de chocolate y masmelos'
},
{
    base: 'Frutal',
    ref: 5,
    cobertura:'Chocolate de Colores',
    topping: 'Fruta Cristalizada',
    precio: 3000,
    imagen: './src/img/dona5.jpeg',
    description: 'Donut frutal con cobertura de chocolate de colores y fruta cristalizada'
},
{
    base: 'Mani',
    ref: 6,
    cobertura: 'Chocolate Negro',
    topping: 'Mani',
    precio: 2800,
    imagen: './src/img/dona6.png',
    description: 'Donut de mani con cobertura de chocolate negro con mani'
}]