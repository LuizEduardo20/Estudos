// Metodo Every.

const p_array = document.querySelector('#array')
const btnverificar = document.querySelector('#btnverificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [2, 4, 14, 23, 11, 18]
//const elementos_array = ['Html', 'Css', 'JavaScript', 'Python', 'node.js']
p_array.innerHTML = `[ ${elementos_array} ]`

btnverificar.addEventListener('click', (evento) => {
    resultado.innerHTML = 'Array não conforme'
    const res = elementos_array.every((elemento, indice) => {
        if(elemento < 18){
            resultado.innerHTML = `Array não conforme na posição ${indice}`
        }
        return elemento >= 14
    })
    if(res){
        resultado.innerHTML = 'OK'
    }
})