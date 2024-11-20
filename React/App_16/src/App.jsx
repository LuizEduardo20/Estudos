import Caixa from "./Components/Caixa"
import Estudos from "./Components/Estudos"

//Contenção

export default function App(){
  return(
    <>
      <Caixa Site='www.youtube.com'>
        {/* dessa forma é chamada de 'props children' */}
        <h1>Lamborghini</h1>
        <p>Motor V10</p>
        <Estudos/>
      </Caixa>
    </>
  )
}