//Método filter, p2.

const caixa = document.querySelector('#caixanovo')
const c1_2 = document.querySelector('#c1_2')
const caminhao = ['Scania', 'Volvo', 'Mercedes', 'Renault', 'Daf', 'Man']
const btn_selecionado = document.getElementById('caixaselecionado')

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

btn_selecionado.addEventListener('click', (evt) => {
    //const todosRadios = document.querySelectorAll('input[type = radio]') // retorna uma nodelist
    const todosRadios = [...document.querySelectorAll('input[type = Radio]')]
    let radios_selecionados = todosRadios.filter((ele) => { //typeerror se usar const
        return ele.checked
    })

//parentNode, retorna o elemento pai
//parentNode.parentNode, retorna o pai completo
//firstChild, retorna o texto
//textContent, retorna o conteudo do texto
//nextsibling, retorna o proximo irmão
//previousSibling, retorna o irmão anterior

    radios_selecionados = radios_selecionados[0]
    //const caminhaoselecionado = radios_selecionados.parentNode.parentNode.firstChild.textContent
    const caminhaoselecionado = radios_selecionados.parentNode.previousSibling.textContent
    alert(`Você seleciono o(a) ${caminhaoselecionado}`)
    //console.log(todosRadios)
    //console.log(radios_selecionados)
    //console.log(caminhaoselecionado)
})