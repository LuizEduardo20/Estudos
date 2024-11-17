import { useState } from "react"

//Manipulando elemento de formulario

export default function App(){

  const [Nome, setNome] = useState()
  // const hanleChangeNome = (elemento) => { //sintaxe que tbm é comum
  //   setNome(elemento.target.value)
  // }
  const [Carro, setCarro] = useState('Mustang')

  return(
    // <>
    // {/* <label>Digite seu nome:</label>
    // <input type='text' name='fullnome' value={Nome}
    // onChange={(elemento) => setNome(elemento.target.value)}/>
    // <h3>Nome digitado: {Nome}</h3> */}

    // <label>Digite seu nome:</label>
    // <input type='text' name='fullnome' value={Nome}
    // onChange={(elemento) => hanleChangeNome(elemento)}/>
    // <h3>Nome digitado: {Nome}</h3>
    // </>

    <>
    <label>Digite seu nome: </label>
    <input type='text' name='fullname' value={Nome}
    onChange={(elemento) => setNome(elemento.target.value)}/>
    <h3>Nome digitado: {Nome}</h3>
    <label>Selecione um carro</label>
    <select value={Carro} onChange={(elemento) => setCarro(elemento.target.value)}>
      <option value='Mustang'>Mustang</option>
      <option value='RB16'>RB16</option>
      <option value='Mclaren W1'>Mclaren W1</option>
      <option value='Chiron'>Chiron</option>
    </select>
    <h3>Carro Selecionado: {Carro}</h3>
    </>
  )
}