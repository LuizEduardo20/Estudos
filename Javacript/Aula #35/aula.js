//addEventListener

//HTML e css
//function msg1(){
//    alert('Marca: Audi')
//}
//
//const msg2 = () => {
//    alert('Marca: lamborghini')
//}

//const div1 = document.querySelector('#c1')
//const msg = () => {
//  alert('Marca: Audi')
//}
//div1.addEventListener('click',msg)

//div1.addEventListener('click',()=>{
//    //alert('Marca: Audi')
//    msg()
//})

//div1.addEventListener('click',(evt)=>{
//    console.log(evt.target)
//})

//div1.addEventListener('click',(evt)=>{
//    const element = evt.target
//    element.classList.add('destaque')
//})

const divs = [...document.querySelectorAll('.curso')]

divs.map((elementos) => {
    elementos.addEventListener('click', (evt) => {
        const elementos = evt.target
        elementos.classList.add('destaque')
        console.log(`${elementos.innerHTML} foi clicado`)
    })
})