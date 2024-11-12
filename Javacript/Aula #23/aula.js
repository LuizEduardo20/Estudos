'use strict'

// funções anônimas

//modo anonimo
//const f = function(valor1, valor2)/*não tem nome(anônima), precisa ser associada a uma variavel*/{
//    //so vai ser utilizada no momento da execução.
//    return valor1 + valor2
//}
//
//console.log(f(10, 5))


//const f = function(...valores){
//    let res = 0
//    for(valo of valores){
//        res += valo
//    }
//    return res
//}
//
//console.log(f(10, 5))

//função construtor anônima
const f = new Function('valor1','valor2','valor3','return valor1 + valor2 + valor3')

console.log(f(10, 5, 15))