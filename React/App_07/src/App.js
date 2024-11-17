import React from "react";
import "./App.css";
import Relogio from "./Componentes/Relogio";

//Renderização de componentes

function App() {

  const texto_destaque={
    color:'blue',
    fontSize:'3em'
  }

  return (
    <section className="caixa">
      <Relogio/>
      <h1 style={{color:'#f00', fontSize:'5em'}}>Youtube</h1>
      <h2 style={texto_destaque}>Curso de React</h2>
      <p className="texto">Estudo de react pelo youtube</p>
      <a href="https://www.youtube.com" target="blank">Curso de react</a>
    </section>
  )
}

export default App;