//função retorno

//function canal(){
//    return 'Curso JS'
//}
//
//console.log(canal())
//console.log(canal())

//function canal(){
//    let num1 = 10
//    let num2 = 2
//    let res = num1 * num2
//    return res
//}
//
//let num = canal()
//console.log(num)

function canal(){
    let num1 = 10
    let num2 = 2
    let res = num1 * num2
    if(res % 2 == 0){
        return 'Par'
    } else{
        return 'Ímpar'
    }
}

let res = canal()
console.log(res)