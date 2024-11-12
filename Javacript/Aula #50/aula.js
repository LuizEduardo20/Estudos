// Metodo iteradores.

//arrays
//strings
//map
//sets

const valores = [10, 8, 9, 2]
const iteradores_valores = valores[Symbol.iterator]()

console.log(valores)
console.log(iteradores_valores.next().value) //usando value recebemos o valor
console.log(iteradores_valores.next().value)
console.log(iteradores_valores.next().value)
console.log(iteradores_valores.next().value)
console.log(iteradores_valores.next().value)
console.log(iteradores_valores.next().value)
console.log(iteradores_valores.next().value)

const texto = 'youtube'
const iteradores_texto = texto[Symbol.iterator]()

console.log(texto)
console.log(iteradores_texto.next()) //usando value recebemos cada elemento, enquanto for falso
console.log(iteradores_texto.next())
console.log(iteradores_texto.next())
console.log(iteradores_texto.next())
console.log(iteradores_texto.next())
console.log(iteradores_texto.next())
console.log(iteradores_texto.next())
console.log(iteradores_texto.next())