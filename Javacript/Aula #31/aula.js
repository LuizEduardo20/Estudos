'use strict'

//Metodo getElementByid

//const dc1 = document.getElementById('c1')
//console.log(dc1)
//console.log(dc1.id)
//console.log(dc1.innerHTML)
//
//dc1.innerHTML = 'Curso JS'

const dc1 = document.getElementById('c1')
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')
const dc6 = document.getElementById('c6')

const arrayelementos = [dc1, dc2, dc3, dc4, dc5, dc6]

//for(let div of arrayelementos)
//    div.innerHTML = 'Curso JS'

//console.log(arrayelementos)

arrayelementos.map((e) => {
    e.innerHTML = 'Curso JS'
    console.log(e)
})