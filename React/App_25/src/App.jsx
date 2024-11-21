import Globaiss from './Components/Globais'
import Info from './Components/info'
import { useState } from 'react'

// Manipulando variaveis globais de componentes

export default function App() {
  const [Resumo, setResumo] = useState(Globaiss.resumo)

  const gravarResumo = () => {
    Globaiss.resumo = Resumo
  }

  const verResumo = () => {
    alert(Globaiss.resumo)
  }

  return (
    <>
    <Info/>
    <hr/>
    <p>{`Estudos: ${Globaiss.estudo}`}</p>
    <p>{`Ano: ${Globaiss.ano}`}</p>
    <p>{`Onde: ${Globaiss.onde}`}</p>
    <hr/>
    <input type='text' value={Resumo} onChange={(elemento) => setResumo(elemento.target.value)}/>
    <br/>
    <button onClick={() => gravarResumo()}>Gravar Resumo</button>
    <button onClick={() => verResumo()}>Ver Resumo</button>
    </>
  )
}