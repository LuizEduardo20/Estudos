'use strict'

//funções aninhadas
//funções dentro de outas funções

//const soma = (...valores) =>{
//    const somar = valo =>{
//        let res = 0
//        for(valo of valo)
//            res += valo
//        return res
//    }
//    return somar(valores)
//}
//
//console.log(soma(15, 10, 5))

//fora da função
const somar = valo =>{
    let res = 0
    for(valo of valo)
        res += valo
    return res
}

const soma = (...valores) =>{
    return somar(valores)
}

console.log(soma(15, 10, 5))