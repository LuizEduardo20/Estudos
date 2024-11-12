// template string

const caixa = document.querySelector('#caixa')


// const curso = 'JS'
// const onde = 'youtube'
// const frase = `Este é o estudo de ${curso} \n onde estudo pelo ${onde}` //quebra a linha no DOM
// console,log(frase)
// const frase = `Este é o estudo de ${curso} <br> onde estudo pelo ${onde}` //quebra a linha no HTML

const carros = ['Supra', 'Subaru WRX', 'Huracan Performant']

let ul = '<ul>'
carros.map((el) => {
    ul += `<li> ${el} </li>`
})
ul + '</ul>'

caixa.innerHTML = ul