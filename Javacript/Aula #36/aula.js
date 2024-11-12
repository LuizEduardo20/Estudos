//addEventListener, p2

const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')

const todos_cursos = [...document.querySelectorAll('.curso')]

todos_cursos.map((elementos) => {
    elementos.addEventListener('click', (evt) => {
        const curso = evt.target
        curso.classList.toggle('selecionado')
    })
})

btn.addEventListener('click',() => {
    const cursos_selecionados = [...document.querySelectorAll('.selecionado')]
    cursos_selecionados.map((elemento) => {
        caixa2.appendChild(elemento)
    })
})