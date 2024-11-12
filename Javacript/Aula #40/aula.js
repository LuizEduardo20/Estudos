//Método remover elemento, p1.

const caixa = document.querySelector('#caixa')
const marca = document.querySelector('#marca')
const marcas = [...document.querySelectorAll('.marca')]

const novo_elemento = document.createElement('div')
const marcas_eletrocinos = ['Samsung', 'Apple', 'Motorola', 'Lenovo', 'Xiaomi', 'Positivo']

marcas_eletrocinos.map((elemento, chave) => {
    const novo_elemento = document.createElement('div')
    caixa.appendChild(novo_elemento)
    novo_elemento.innerHTML = elemento

    const btn_lixeira = document.createElement('img')
    btn_lixeira.setAttribute('src', './lixeira.png')
    btn_lixeira.setAttribute('class', 'lixeira')
    novo_elemento.addEventListener('click', (evt) => {
        caixa.removeChild(evt.target.parentNode)
    })
    
    novo_elemento.appendChild(btn_lixeira)
    novo_elemento.setAttribute('id', 'marca' + chave)
    novo_elemento.setAttribute('class', 'marca')
})