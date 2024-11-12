// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edite <code>src/App.js</code> e salve para recarregar
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           primeiro app em react
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//Estrutura básica de um app react

import React from "react";

function App(){
  return(
    //componente de bloco
    <>
      <p>Iniciando Estudo de React</p>
      <details>
        <summary></summary>
        <h1>Texto</h1>
        <ul>
          <li>Texto 2</li>
          <li>Texto 3</li>
          <li>Texto 4</li>
        </ul>
      </details>
    </>
    //compronente especifico
    // <section>
    //   <p>Iniciando Estudo de React</p>
    //   <details>
    //     <summary></summary>
    //     <h1>Texto</h1>
    //     <ul>
    //       <li>Texto 2</li>
    //       <li>Texto 3</li>
    //       <li>Texto 4</li>
    //     </ul>
    //   </details>
    // </section>
  )
}

export default App //pode fazer a exportação dessa forma
// ou exportar na msm linha que "function" (export default function App())