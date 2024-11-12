//Método remove, p2.

const caixa = document.querySelector('#caixanovo')
const c1_2 = document.querySelector('#c1_2')
const caminhao = ['Scania', 'Volvo', 'Mercedes', 'Renault', 'Daf', 'Man']
const btn_selecionado = document.getElementById('caixaselecionado')
const btn_remove = document.getElementById('btnremover')

caminhao.map((el, chave) => {
    const novoelemento = document.createElement('div')
    novoelemento.setAttribute(`id`, `c ${chave}`)
    novoelemento.setAttribute(`class`, `caminhao`)
    novoelemento.innerHTML = el

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_caminhao')

    comandos.appendChild(rb)
    novoelemento.appendChild(comandos)
    caixa.appendChild(novoelemento)
})

const caminhao_selecionado = () => {
    const todosRadios = [...document.querySelectorAll('input[type = Radio]')]
    const radios_selecionados = todosRadios.filter((ele) => { //typeerror se usar const
        return ele.checked
    })
    return radios_selecionados[0]
}

btn_selecionado.addEventListener('click', (evt) => {
    const rs = caminhao_selecionado()
    try{
        const caminhaoselecionado = rs.parentNode.previousSibling.textContent
        alert(`Curso selecionado: ${caminhaoselecionado}`)

    } catch(excesao) {
        alert('Selecione uma das opções')

    }
})

btn_remove.addEventListener('click', (evt) => {
    const rs = caminhao_selecionado()
    if(rs == undefined){
        alert('selecione uma opção')
    } else{
        const caminhaoselecionado = rs.parentNode.parentNode
        caminhaoselecionado.remove()
    }
})