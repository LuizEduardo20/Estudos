import { useState } from 'react'
import Carro from "./Components/Carro"

// Ciclo de vida

export default function App(){

  const [carro, setCarro] = useState(true)

  const mostrarOcultar = () => {
    setCarro(!carro)
  }

  return(
    <>
      <h1>Componentes de classes</h1>
      {carro ? <Carro fator={10}/> : ''}
      <button onClick={() => mostrarOcultar()}>Ocultar</button>
    </>
  )
}