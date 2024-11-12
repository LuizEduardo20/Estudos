'use strict'

//funções geradoras

//function* cores(){
//    //yield, funciona como um return
//    yield 'vermelho'
//    yield 'azul'
//    yield 'roxo'
//}
//
//const itr = cores()
//console.log(itr.next().value)
//console.log(itr.next().value)
//console.log(itr.next().value)

//function* perguntas(){
//    const nome = yield 'Qual Seu Nome? '
//    const carro = yield 'Qual seu carro favorito? '
//    return `Seu nome é ${nome}, seu carro favorito é ${carro}`
//
//}
//
//const itp = perguntas()
//console.log(itp.next().value)
//console.log(itp.next('Luiz').value)
//console.log(itp.next('RS6').value)

//function* contador(){
//    let i = 0
//    while(true){
//        yield i++
//    }
//}
//
//const itc = contador()
//console.log(itc.next().value)
//console.log(itc.next().value)
//console.log(itc.next().value)

function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i > 5)
            break
    }
}

const itc = contador()
for(let c of itc){
    console.log(c)
}