//Método CreateElement.

const caixa = document.querySelector('#caixa')
const marca = document.querySelector('#marca')
const marcas = [...document.querySelectorAll('.marca')]

const novo_elemento = document.createElement('div')

//caixa.appendChild(novo_elemento) //cria uma nova div
//novo_elemento.innerHTML = 'Ryzen' //renomea o elemento
//novo_elemento.setAttribute('id', 'marca') // adiciona um id na div
//novo_elemento.setAttribute('class', 'marca') // adiciona uma class na div

//adicionar os marcas dinamicamente
const marcas_eletrocinos = ['Samsung', 'Apple', 'Motorola', 'Lenovo', 'Xiaomi', 'Positivo']

marcas_eletrocinos.map((elemento, chave) => {
    console.log(chave)
    const novo_elemento = document.createElement('div')
    caixa.appendChild(novo_elemento)
    novo_elemento.innerHTML = elemento
    novo_elemento.setAttribute('id', 'marca' + chave)
    novo_elemento.setAttribute('class', 'marca')
})