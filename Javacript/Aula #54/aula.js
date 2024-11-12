// coleção Set
// Set, não permite a duplicação de elementos, diferente do array

const caixa = document.querySelector('#caixa')

let musicas = new Set(['Royalt', 'Luminary', 'Memori Reboot']) //pode passar/colocar elementos no proprio construtor

musicas.add('Pra Tráz')

//não vai entrar na coleção
musicas.add('Royalt')
musicas.add('Luminary')
musicas.add('Memori Reboot')

musicas.delete('Royalt')
musicas.clear(musicas)

console.log(musicas)

// musicas.forEach((el) => {
//     caixa.innerHTML += el + '<br>'
// })

for(let m of musicas){
    caixa.innerHTML += m + '<br>'
}