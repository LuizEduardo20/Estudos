// Metodo reduce.

const p_array = document.querySelector('#array')
const btnreduzir = document.querySelector('#btnreduzir')
const resultado = document.querySelector('#resultado')

const elementos_array = [1, 2, 3, 4, 5]
let ant = []
let atu = []
let dobro = []

p_array.innerHTML = `[ ${elementos_array} ]`

btnreduzir.addEventListener('click', (evento) => {
    //dobro.push(elementos_array[0]*2)
    resultado.innerHTML = elementos_array.reduce((anterior, atual, posterior) => {
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual + anterior // soma do elemento anterior com o atual.
    })
    resultado.innerHTML = `<br/> Valor Anterior ${ant} <br/> Valor Atual ${atu} <br/> Dobro: ${dobro}`
})