//Método StopPropagation.

const caixa = document.querySelector('#caixa')
const c1 = document.querySelector('#c1')
const curso = [...document.querySelectorAll('.curso')]

caixa.addEventListener('click',(event) => {
    console.log('clicou')
    //console.log(event)
})

c1.addEventListener('click', (evento) => {
    evento.stopPropagation()
})

curso.map((elemento) => {
    elemento.addEventListener('click', (evento) => {
        evento.stopPropagation()
    })
})