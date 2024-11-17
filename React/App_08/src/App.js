import { useState } from "react"
import Numero from './Componente/Numero'

//usando state

export default function App(){

  const [num, setNum] = useState(0)
  const [nome, setNome] = useState('Luiz') //funciona com strings tbm

  return(
    // <>
    // {/* <button onClick={()=> setNum(100)}>click</button> */}
    // <button onClick={()=> setNum(num + 1)}>click</button>
    // <p>Valor do State num: {num}</p>  {/* num é o estado atual da função*/}
    // </>
    <>
    <p>Valor de state num em app: {num}</p>
    <Numero num = {num} setNum={setNum}/>
    <p>{nome}</p>
    </>
  )
}