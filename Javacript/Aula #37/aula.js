//addEventListener, p3

const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn_transferir = document.querySelector('#btn_transferir')

const todos_cursos = [...document.querySelectorAll('.curso')]

todos_cursos.map((elementos) => {
    elementos.addEventListener('click', (evt) => {
        const curso = evt.target
        curso.classList.toggle('selecionado')
    })
})

btn_transferir.addEventListener('click',() => {
    const cursos_selecionados = [...document.querySelectorAll('.selecionado')]
    const cursos_naoselecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]
    cursos_selecionados.map((elemento) => {
        caixa2.appendChild(elemento)
    })
    cursos_naoselecionados.map((element) => {
        caixa1.appendChild(element)
    })
})