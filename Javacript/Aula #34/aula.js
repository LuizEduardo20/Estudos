//QuerySelector QuerySelectorAll

//QuerySelector
//const div = document.querySelector('div')
//console.log(div)

//QuerySelectorAll
//const todas_divs = document.querySelectorAll('divs')
//const todas_divs = [...document.querySelectorAll('.curso')]
//const c1 = [...document.querySelectorAll('.c1')]
//const c2 = [...document.querySelectorAll('.c2')]
//const c1 = document.querySelectorAll('#c1')
//const c2 = document.querySelectorAll('#c2')
//console.log(todas_divs)
//console.log(c1)
//console.log(c2)

//const todas_divs = [...document.querySelectorAll('.curso[class]')]
//console.log(todas_divs)

const todas_divs = [...document.querySelectorAll('div > p')]
console.log(todas_divs)