//Método Find.

const p_array = document.querySelector('#array')
const txt_pesquisa = document.querySelector('#txt_pesquisa')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

//const elementos_array = [2, 4, 14, 23, 11]
const elementos_array = ['Html', 'Css', 'JavaScript', 'Python', 'node.js']
p_array.innerHTML = `[ ${elementos_array} ]`

btnPesquisar.addEventListener('click', (evt) => {
    resultado.innerHTML = 'Valor não encontrado'
    const res = elementos_array.find((elemento, indice) => {
        if(elemento.toUpperCase() === txt_pesquisa.value.toUpperCase()){
            resultado.innerHTML = `Valor pesquisado (${elemento}) na posição (${indice})`
            return elemento /*true*/
        }
    })
    console.log(res)
})