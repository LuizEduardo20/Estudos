//Método MAP

//const carros=['RS6', 'SVJ', 'GT3', 'F40', 'GT500']
//carros.map((el, i)=>{
//    //console.log(`Carro: ${el} - Posição: ${i}`)
//    return el
//})

// const carros=['RS6', 'SVJ', 'GT3', 'F40', 'GT500']
// let c = carros.map((el, i)=>{
//    //console.log(`Carro: ${el} - Posição: ${i}`)
//    return `<div> ${el} <div>`
// })

// console.log(c)

//let el = document.getElementsByTagName('div')
//el2 = [...el]
//console.log(el)
//el2.map((e, i)=>{
//    e.innerHTML = 'Esportivos'
//    console.log(e.innerHTML)
//
//})

//const el = document.getElementsByTagName('div')
//const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML) //chama direto a coleção
//console.log(val)

//const converterInt = (e) => parseInt(e)
//let num = ['1','2','3','4','5'].map(converterInt)
//console.log(num)

//const converterInt = (e) => parseInt(e)
//const dobrar = (e) => e * 2
//let num = ['1','2','3','4','5'].map(dobrar)
//console.log(num)

const fahrenheit = [0, 32, 45, 75]
fahrenheit.map((elemento) => {
    const res = Math.round((elemento - 32) * 5/9)
    console.log(res)
})