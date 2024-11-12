'use strict'

//Declaração Switch case.
//Alternativa do IF, ELSE IF e ELSE. 

let colocado = 5

switch(colocado){
    case 1:
        console.log('Primeiro Lugar')
        break
    
    case 2:
        console.log('Segundo Lugar')
        break

    case 3:
        console.log('Terceiro Lugar')
        break
    
    case 4: case 5: case 6:
        console.log('Premido de Participação')
        break

    default:
        console.log('Não Subiu ao podio')
}