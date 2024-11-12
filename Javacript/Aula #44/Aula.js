//Método Criar elementos, adicionar antes ou depois.

const caixa = document.querySelector('#caixanovo')
const c1_2 = document.querySelector('#c1_2')
const caminhao = ['Scania', 'Volvo', 'Mercedes', 'Renault']
const btn_selecionado = document.getElementById('caixaselecionado')
const btn_remover = document.getElementById('caixaremover')
const btn_antes = document.getElementById('btnantes')
const btn_depois = document.getElementById('btndepois')
const novo_caminhao = document.getElementById('novocaminhao')

let indice = 0

const criar_novo_caminhao = (caminha) => {
    const novoelemento = document.createElement('div')
    novoelemento.setAttribute(`id`, `c ${indice}`)
    novoelemento.setAttribute(`class`, `caminhao`)
    novoelemento.innerHTML = caminha

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_caminhao')

    comandos.appendChild(rb)
    novoelemento.appendChild(comandos)

    return novoelemento
}

caminhao.map((el, chave) => {
    const novo_elemento = criar_novo_caminhao(el)
    caixa.appendChild(novo_elemento)
    indice++
})

const radio = () => {
    const todosRadios = [...document.querySelectorAll('input[type = Radio]')]
    let radios_selecionados = todosRadios.filter((ele) => { //typeerror se usar const
        return ele.checked
    })
    return radios_selecionados[0]
}

btn_selecionado.addEventListener('click', () => {
    const rs = radio()
    try{
        const caminhaoselecionado = rs.parentNode.previousSibling.textContent
        alert(`Você seleciono o(a) ${caminhaoselecionado}`) 
    } catch(excecao){
        console.log('Selecione um Caminhão!')
    }
})

btn_remover.addEventListener('click', () => {
    const rs = radio()
    if(rs != undefined){
        const caminhaoselecionado = rs.parentNode.previousSibling
        caminhaoselecionado.remove()
        alert(`Você seleciono o(a) ${caminhaoselecionado}`)
    } else{
        alert(`Selecione um Caminhão!`)
    }
})

btn_antes.addEventListener('click', () => {
    const rs = radio()
    try{
        if(novo_caminhao.value != ''){
            const caminhaoselecionado = rs.parentNode.parentNode
            const caminhao_novo = criar_novo_caminhao(novo_caminhao.value)
            caixa.insertBefore(caminhao_novo, caminhaoselecionado)
        } else {
            alert('Digite o nome de um Caminhão')
        }
        
    } catch(excecao){
        alert('Selecione um Caminhão!')
    }
})

btn_depois.addEventListener('click', () => {
    const rs = radio()
    try{
        if(novo_caminhao.value != ''){
            const caminhaoselecionado = rs.parentNode.parentNode
            const caminhao_novo = criar_novo_caminhao(novo_caminhao.value)
            caixa.insertBefore(caminhao_novo, caminhaoselecionado.nextSibling)
        } else {
            alert('Digite o nome de um Caminhão')
        }

    } catch(excecao){
        alert('Selecione um Caminhão!')
    }
})

//parentNode, retorna o elemento pai
//parentNode.parentNode, retorna o pai completo
//firstChild, retorna o texto
//textContent, retorna o conteudo do texto
//nextsibling, retorna o proximo irmão
//previousSibling, retorna o irmão anterior