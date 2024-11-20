import { useState } from "react"

// Local store

export default function App() {

  const [Nome, setNome] = useState()

  const armazenamento = (chave, valor) => {
    localStorage.setItem(chave, valor)
  }

  const consultar = (chave) => {
    alert(localStorage.getItem(chave))
  }

  const remover = (chave) => {
    localStorage.removeItem(chave)
  }

  return (
    <>
      <label>Digite o nome de um carro: </label><br/>
      <input type="text" value={Nome} onChange={(elemento) => setNome(elemento.target.value)}/><br/>
      <button onClick={() => armazenamento('ls_nome', Nome)}>Guardar nome</button>
      <button onClick={() => consultar('ls_nome')}>Pesquisar nome</button>
      <button onClick={() => remover('ls_nome')}>Apagar nome</button>
    </>
  )
}