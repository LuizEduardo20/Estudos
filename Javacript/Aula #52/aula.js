// coleção arrays p2.

// let valores = [1, 2, 3, 4]
// const operacoes = [
//     (valore) => {
//         let res = 0
//         for(v of valore){
//             res += v
//         }
//         return res
//     },
//     (valore) => {
//         let res = 1
//         for(v of valore){
//             res*= v
//         }
//         return res
//     },
//     (valore) => {
//         for(v of valore){
//             console.log(v)
//         }
//     }
// ]

// operacoes[2](valores) //inprime os valores no array

const btn_soma = document.querySelector('#btn_soma')
const btn_subtracao = document.querySelector('#btn_subtracao')
const btn_multiplicacao = document.querySelector('#btn_multiplicacao')
const btn_divisao = document.querySelector('#btn_divisao')
const res = document.querySelector('#res')

const operacao = [
    () => {
        const valor = [document.getElementById('valor1').value, document.getElementById('valor2').value]
        res.value = Number(valor[0]) + Number(valor[1])
    },

    () => {
        const valor = [document.getElementById('valor1').value, document.getElementById('valor2').value]
        res.value = Number(valor[0]) - Number(valor[1])
    },

    () => {
        const valor = [document.getElementById('valor1').value, document.getElementById('valor2').value]
        res.value = Number(valor[0]) * Number(valor[1])
    },

    () => {
        const valor = [document.getElementById('valor1').value, document.getElementById('valor2').value]
        res.value = Number(valor[0]) / Number(valor[1])
    }
]

btn_soma.addEventListener('click', operacao[0]) // chamando a função de forma direta
btn_subtracao.addEventListener('click', operacao[1])
btn_multiplicacao.addEventListener('click', operacao[2])
btn_divisao.addEventListener('click', operacao[3])