import React from "react"
import Logo from "./Componentes/imgs/Logo_audi.png"
import Carro from "./Componentes/imgs/audi_rs6.png"

//contante, Variaveis, espressoes e  inserir imagens no app

export default function App(){
  const canal='Youtube'
  const curso='Curso de React'
  const tudo=()=>{
    return('Curso React no Youtube') // metodo mais moderno
  }
  const estudo=()=>{
    return 'Estudos de React' //funciona dessa maneira tambem
  }
  return(
    <main>
      {/* <p>{canal}</p>
      <p>{'Canal: ' + canal}</p>
      <p>{'Tudo: ' + tudo()}</p>
      <img src={Logo} alt="Logo"/>
      {/* <img src="img/Logo_audi.png" alt="Logo Audi"/> Ele esta pegando a imagem dentro da pasta Public/img/logo, como se estivesse dentro do html

      <p>{curso}</p>
      <p>{'Curso: ' + curso}</p>
      <p>{'Estudo: ' + estudo()}</p>
      <img src={Carro}  alt="Carro"/> */}

      <header>
        <p>{canal}</p>
        <p>{'Canal: ' + canal}</p>
        <p>{'Tudo: ' + tudo()}</p>
        <img src={Logo} alt="Logo"/>
        {/* <img src="img/Logo_audi.png" alt="Logo Audi"/> Ele esta pegando a imagem dentro da pasta Public/img/logo, como se estivesse dentro do html*/}
      </header>
      
      <div>
        <p>{curso}</p>
        <p>{'Curso: ' + curso}</p>
        <p>{'Estudo: ' + estudo()}</p>
        <img src={Carro}  alt="Carro"/>
      </div>
    </main>
  )
}