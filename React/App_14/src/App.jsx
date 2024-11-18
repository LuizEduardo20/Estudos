import { useState } from 'react'
import Nota from './Componentes/Nota'
import Resultado from './Componentes/Resultado'

//Elevação de state

export default function App() {

  const [Nota1, setNota1] = useState(0)
  const [Nota2, setNota2] = useState(0)
  const [Nota3, setNota3] = useState(0)
  const [Nota4, setNota4] = useState(0)

  return (
    <>
    <Nota numero={1} nota={Nota1} setNota={setNota1}/>
    <Nota numero={2} nota={Nota2} setNota={setNota2}/>
    <Nota numero={3} nota={Nota3} setNota={setNota3}/>
    <Nota numero={4} nota={Nota4} setNota={setNota4}/><br/>
    <Resultado somaNotas={parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3) + parseFloat(Nota4)}/>
    </>
  )
}