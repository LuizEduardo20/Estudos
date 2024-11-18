import { useState } from "react"
import Notas from './Components/Notas'
import Resultado from './Components/Resultado'

//Desafio elevação de state

export default function App(){

  const [Nota, setNota] = useState({'nota1':'0', 'nota2':'0', 'nota3':'0', 'nota4':'0'})
  const heardlesetNota = (elemento) => {
    if(elemento.target.getAttribute('name') == 'nota1'){
      setNota({'nota1': elemento.target.value, 'nota2': Nota.nota2, 'nota3': Nota.nota3, 'nota4': Nota.nota4})
    } else if(elemento.target.getAttribute('name') == 'nota2'){
      setNota({'nota1': Nota.nota1, 'nota2': elemento.target.value, 'nota3': Nota.nota3, 'nota4': Nota.nota4})
    } else if(elemento.target.getAttribute('name') == 'nota3'){
      setNota({'nota1': Nota.nota1, 'nota2': Nota.nota2, 'nota3': elemento.target.value, 'nota4': Nota.nota4})
    } else if(elemento.target.getAttribute('name') == 'nota4'){
      setNota({'nota1': Nota.nota1, 'nota2': Nota.nota2, 'nota3': Nota.nota3, 'nota4': elemento.target.value})
    } else{
      <h2>Nota invalida</h2>
    }
  }

  return(
    <>
    <Notas numero={1} name={'nota1'} Nota = {Nota.nota1} setNota={heardlesetNota}/>
    <Notas numero={2} name={'nota2'} Nota = {Nota.nota2} setNota={heardlesetNota}/>
    <Notas numero={3} name={'nota3'} Nota = {Nota.nota3} setNota={heardlesetNota}/>
    <Notas numero={4} name={'nota4'} Nota = {Nota.nota4} setNota={heardlesetNota}/>
    <Resultado somaNotas={parseFloat(Nota.nota1) + parseFloat(Nota.nota2) + parseFloat(Nota.nota3) + parseFloat(Nota.nota4)}/>
    </>
  )
}