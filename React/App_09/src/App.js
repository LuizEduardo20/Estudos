import { useState } from 'react'
import Led from './Componentes/imgs/Led'

//Manipulação de eventos

export default function App(){

  const [Ligar, setLigar] = useState(false)


  const cancelar = (obj) =>{
    return obj.preventDefault()
  }

  return(
    // <>
    // <Led/>
    // </>

    <>
    <Led Ligar={Ligar} setLigar={setLigar}/>

    {/* Cancela uma ação, não vai abrir o youtube*/}
    <a
    href='www.youtube.com'
    target='_black'
    onClick={(elemento) => cancelar(elemento)}
    >
      Vite + React
    </a>
    </>
  )
}