//Metodo getElementsByClassName

//const todoscursos = document.getElementsByClassName('curso')
//
//console.log(todoscursos)

//const todoscursos = [...document.getElementsByClassName('curso')]
//
//console.log(todoscursos)

//const todoscursos = document.getElementsByClassName('curso')
//const cursosc1 = document.getElementsByClassName('curso c1')
//const cursosc2 = document.getElementsByClassName('curso c2')
//
//console.log(todoscursos)
//console.log(cursosc1)
//console.log(cursosc2)

//const todoscursos = [...document.getElementsByClassName('curso')]
//const cursosc1 = [...document.getElementsByClassName('curso c1')]
//const cursosc2 = [...document.getElementsByClassName('curso c2')]
//
//console.log(todoscursos)
//console.log(cursosc1)
//console.log(cursosc2)
//
//cursosc2.map((elementos) => {
//todoscursos.map((elementos) => {
//    elementos.classList.add("destaque")
//})

const todoscursos = [...document.getElementsByClassName('curso')]
const cursosc1 = [...document.getElementsByClassName('curso c1')]
const cursosc2 = [...document.getElementsByClassName('curso c2')]
const cursoextra = document.getElementsByClassName('curso')[2] //pegua somente o elemento da posição 2

console.log(todoscursos)
console.log(cursosc1)
console.log(cursosc2)
console.log(cursoextra)