// Metodo Some.

const p_array = document.querySelector('#array')
const btnverificar = document.querySelector('#btnverificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [12, 20, 54, 32, 43, 11]
//const elementos_array = ['Html', 'Css', 'JavaScript', 'Python', 'node.js']
p_array.innerHTML = `[ ${elementos_array} ]`

btnverificar.addEventListener('click', (evento) => {
    const res = elementos_array.some((elemento, indice) => {
        if(elemento < 18){
            resultado.innerHTML = `Array não conforme na posição ${indice}`
        }
        return elemento >= 18
    })
    if(res){
        resultado.innerHTML = 'OK'
    }
})