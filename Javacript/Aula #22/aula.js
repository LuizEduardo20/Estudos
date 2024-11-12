//Parametros Rest.
//
//function soma(...valores){
//    let tamanho = valores.length
//    let res = 0
//    for(let i = 0; i < tamanho; i++){
//        res += valores[i]
//    }
//    return res
//}
//
//console.log(soma(10, 5, 2, 8, 9, 34)) //vai retornar a quantidade dos valores

function soma(...valores)/*parametros sprats(...)*/{
    let res = 0
    for(let valor of valores){
        res += valor
    }
    return res
}

console.log(soma(10, 5, 2, 8, 9, 34))