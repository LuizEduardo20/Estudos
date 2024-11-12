// coleção Map

const caixa = document.querySelector('#caixa')

let mapa = new Map() // 'new' reserva um espaço na memoria com o nome mapa do tipo Map

mapa.set('curso', 'javascript') // 'curso' é a chave do elemento, 'javascript' é o valor da chave
mapa.set(10, 'youtube')
mapa.set(1, 100)
mapa.set('JS', 100)

mapa.delete(1) // vai deletar o valor 100 da chave 1 (mapa.set(1, 100))

console.log(mapa)

// if(mapa.has('JS')){ //'has' verifica se uma chave está na coleção
//     caixa.innerHTML = 'A chave existe na coleção'
// } else{
//     caixa.innerHTML = 'A chave NÃO está na coleção'
// }

//caixa.innerHTML = mapa.get('curso') // pega o valor da chave

let valor = 5
let res = ''

if(mapa.has(valor)){
    res = 'A chave existe na coleção' + mapa.get(valor) //get pega o valor da chave
} else{
    caixa.innerHTML = 'A chave NÃO está na coleção'
}

res += '<br> O tamanho da coleção é ' + mapa.size
caixa.innerHTML = res

mapa.forEach((el) => {
    console.log(el)
})