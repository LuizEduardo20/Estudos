//funções parametrizadas.

//function soma(p1){
//    console.log(p1)
//}
//
//soma('Luiz') //valor que entro no parametro (p1)
//soma(2024)
//soma(5.02)

//function soma(num1, num2){
//    console.log(num1 + num2)
//}
//
//soma(10, 5) //os valores vão entrar nos parametros (num1 e num2)

//valores padrão
//function soma(num1 = 0, num2 = 0){
//    console.log(num1 + num2)
//}
//
//soma(10)

//soma com return
//function soma(num1 = 0, num2 = 0){
//    return num1 + num2
//}
//
//console.log(soma(10, 5))

//soma passo a passo
//function soma(num1 = 0, num2 = 0){
//    let res
//    res = num1 + num2
//    return res
//}
//
//let resultado_soma = soma(5, 5)
//console.log(resultado_soma)


//outro exemplo de valor padrão
//const valor_padrao = 0
//
//function soma(num1 = valor_padrao, num2 = valor_padrao){
//    let res
//    res = num1 + num2
//    return res
//}
//
//let resultado_soma = soma(5, 5)
//console.log(resultado_soma)

//const valor_padrao = 0
//
//let valor = 0
//
//console.log(valor)
//function add(valo){
//    return valor + valo
//}
//
//valor = add(10) // 10 assumiu o (valor)
//
//console.log(valor)
//
//valor = add(5) // valor assume o valor 15
//
//console.log(valor)

//pode operar a variavel dentro ou fora da função
const valor_padrao = 0

let valor = 0

function add(valo){
    valor += valo
}

add(10) // 10 assumiu o (valor)

console.log(valor)

add(5) // valor assume o valor 15

console.log(valor)