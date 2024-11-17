import { useState } from "react"

//Renderização condicional

export default function App(){

  // const [Logado, setLogado] = useState(false)

  // const msglogin_on = () => {
  //   return 'Usuário Logado'
  // }

  // const msglogin_off = () => {
  //   return 'Faça Login'
  // }

  // const cumprimento = () => {
  //   const hora = new Date().getHours()
  //   if(hora >= 0 && hora < 12){
  //     return <h3>Bom Dia</h3>
  //   }

  //   else if(hora >= 12 && hora < 18){
  //     return <h3>Boa Tarde</h3>
  //   }

  //   else{
  //     return <h3>Boa Noite</h3>
  //   }
  // }

  const [cor, setCor] = useState(0)
  const vermelho = {color: '#f00'}
  const verde = {color: '#0f0'}
  const azul = {color: '#00f'}

  const retornaCor = (c) => {
    if(c == 1){
      return vermelho
    }

    else if(c == 2){
      return verde
    }

    else{
      return azul
    }
  }

  const mudaCor = () =>{
    setCor(cor + 1)
    if(cor > 2){
      setCor(1)
    }
  }

  setInterval(mudaCor, 1000)

  return (
    // <>
    // <h1>React JS</h1>
    // <p>{cumprimento()}</p>
    // <h2>{Logado ? msglogin_on() : msglogin_off()}</h2>
    // <button onClick={() => setLogado(!Logado)}>{Logado ? 'sing up' : 'Login'}</button>
    // </>
    <>
    <h1 style={retornaCor(cor)}>Muda cor</h1>
    <button onClick={() => mudaCor()}> Muda cor</button>
    </>
  )
}