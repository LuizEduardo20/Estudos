import { useEffect, useState } from "react"

// UseEffect

export default function App(){

  const [Contagem, setContagem] = useState(0)

  useEffect(
    () => {console.log('Página carregada'),
    //vai mostrar a contagem na barra de endereço do site
    document.title = `Contagem: ${Contagem}`
  })

  return(
    <>
      <p>Contagem: {Contagem}</p>
      <button onClick = {() => setContagem(Contagem + 1)}>Contar</button>
    </>
  )
}