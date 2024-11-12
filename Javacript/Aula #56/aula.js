// objetos, p1

// class Pessoa{
//     constructor(){ //'constructor' é automaticamente chamado, quando eu istancio o objeto dessa classe
//         this.nome = 'Maria'
//     }
// }

// // o new instancia a nova classe
// let p1 = new Pessoa() // o parentesses do 'new Pessoa', faz referencia direta ao parentesses do constructor
// let p2 = new Pessoa()
// let p3 = new Pessoa()

// console.log(p1.nome)
// console.log(p2.nome)
// console.log(p3.nome)

class Pessoa{
    constructor(primeiro_nome){
        this.nome = primeiro_nome
    }
}

let p1 = new Pessoa('Maria')
let p2 = new Pessoa(10)
let p3 = new Pessoa('Gustavo')

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)