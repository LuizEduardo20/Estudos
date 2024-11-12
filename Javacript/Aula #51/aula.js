// coleção arrays p1.

const caixa = document.querySelector('#caixa')

//let cores = ['azul', 'verde', 'vermelho']
let cores = ['azul', 'verde', 'vermelho', ['claro', 'escuro']]
let frutas = ['Maçã', 'Morango', 'Uva', cores]

//frutas[0] = 'Laranja' //alterei o valor do primeiro elemento

// frutas.push('Laranha', 'Goiaba') // adiciona o elemento
// // frutas.pop() // tira os elementos do array
// // frutas.pop()
// // frutas.pop()
// // frutas.pop()

// frutas.unshift('Goiaba') // adiciona no inicio do array
// frutas.shift() // tira do inicio

console.log(frutas[3][3][1])

frutas.map((ele) => {
    let p = document.createElement('p')
    p.innerHTML = ele
    caixa.appendChild(p)
})