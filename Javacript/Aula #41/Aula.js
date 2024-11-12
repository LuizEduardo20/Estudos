//Método filter, p1

const idades = [18, 34, 13, 15, 11, 20]

//const filtro_maior18 = (valor) => {
//    if(valor >= 18)
//        return valor
//}

const maior = idades.filter((valo, indice, array) => {
    if(valo >= 18)
        return valo
})
const menor = idades.filter((valo, indice, array) => {
    if(valo < 18)
        return valo
})

console.log(idades)
console.log(maior)
console.log(menor)