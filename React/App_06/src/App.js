import React from "react";
import "./App.css"

//Css

function App() {

  const texto_destaque={
    color:'blue',
    fontSize:'3em'
  }

  return (
    // <>
    // <h1 style={{color:'#f00', fontSize:'5em'}}>Youtube</h1>
    // <h2 style={texto_destaque}>Curso de React</h2> {/* não precisa colocar chaves duplas quando vai usar variavel*/}
    // <p className="texto">Estudo de react pelo youtube</p>
    // </>
    <section className="caixa">
      <h1 style={{color:'#f00', fontSize:'5em'}}>Youtube</h1>
      <h2 style={texto_destaque}>Curso de React</h2> {/* não precisa colocar chaves duplas quando vai usar variavel*/}
      <p className="texto">Estudo de react pelo youtube</p>
      <a href="https://www.youtube.com" target="blank">Curso de react</a>
    </section>
  )
}

export default App;