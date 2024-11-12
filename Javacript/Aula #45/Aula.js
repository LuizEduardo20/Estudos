//Método Toggle.

const caixa = document.querySelector('#caixanovo')
const c1_2 = document.querySelector('#c1_2')
const caminhao = ['Scania', 'Volvo', 'Mercedes', 'Renault']
const btn_selecionado = document.getElementById('caixaselecionado')
const btn_remover = document.getElementById('caixaremover')
const btn_antes = document.getElementById('btnantes')
const btn_depois = document.getElementById('btndepois')
const novo_caminhao = document.getElementById('novocaminhao')

let indice = 0

const tirar_selecao = () => {
    //const caminhao_selecionado = document.querySelectorAll('.selecionado')
    const caminhao_selecionado = [...document.querySelectorAll('.selecionado')]
    caminhao_selecionado.map((el) => {
        el.classList.remove('selecionado')
    })
}

const criar_novo_caminhao = (caminha) => {
    const novoelemento = document.createElement('div')
    novoelemento.setAttribute(`id`, `c ${indice}`)
    novoelemento.setAttribute(`class`, `caminhao`)
    novoelemento.innerHTML = caminha
    novoelemento.addEventListener('click', (evt) => {
        tirar_selecao()
        evt.target.classList.toggle('selecionado')
    })
    return novoelemento
}

caminhao.map((el, chave) => {
    const novo_elemento = criar_novo_caminhao(el)
    caixa.appendChild(novo_elemento)
    indice++
})

const caminhaselecionado = () => {
    const todoscaminhoes = [...document.querySelectorAll('.selecionado')]
    return todoscaminhoes[0] //retorna diretamente o caminhaSelecionado
}

btn_selecionado.addEventListener('click', () => {
    try{
        alert('Você seleciono o(a)' + caminhaselecionado().innerHTML) //só funciona se usar a sintaxi antiga
    } catch(excecao){
        alert('Selecione um Caminhão!')
    }
})

btn_remover.addEventListener('click', () => {
    const cs = caminhaselecionado()
    if(cs/*caminhaoSelecionado()*/!= undefined){
        cs.remove()
    } else{
        alert(`Selecione um Caminhão!`)
    }
})

btn_antes.addEventListener('click', () => {
    try{
        if(novo_caminhao.value != ''){
            const caminhao_novo = criar_novo_caminhao(novo_caminhao.value)
            caixa.insertBefore(caminhao_novo, caminhaselecionado())
        } else {
            alert('Digite o nome de um Caminhão')
        }
        
    } catch(excecao){
        alert('Selecione um Caminhão!')
    }
})

btn_depois.addEventListener('click', () => {
    try{
        if(novo_caminhao.value != ''){
            const caminhao_novo = criar_novo_caminhao(novo_caminhao.value)
            caixa.insertBefore(caminhao_novo, caminhaselecionado().nextSibling)
        } else {
            alert('Digite o nome de um Caminhão')
        }

    } catch(excecao){
        alert('Selecione um Caminhão!')
    }
})