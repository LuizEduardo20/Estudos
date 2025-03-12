import { useState, useEffect} from 'react'
import Pagina_1 from './Components/Pagina1'
import Pagina_2 from './Components/Pagina2'

// navegação entre paginas

export default function App(){

  const [Pagina, setPagina] = useState()

  useEffect(
    ()=>{
      const url = window.location.href
      const res = url.split('?')
      setPagina(res[1])
    }
  )

  const retornarPagina = () => {
    if(Pagina == 'pg0'){
      return <Pagina_1/>
    } else if(Pagina == 'pg1'){
      return <Pagina_2/>
    } else {
      return <section>
              <button onClick={() => linksPaginas('pg0')}>Ir para Pagina 1</button>
              <button onClick={() => linksPaginas('pg1')}>Ir para Pagina 2</button>
             </section>
    }
  }

  const linksPaginas = (pag) => {
    if(pag == 'pg0'){
      window.open('http://localhost:5173?pg0', '_black')
    } else if(pag == 'pg1'){
      window.open('http://localhost:5173?pg1', '_black')
    }
  }

  return(
    <>
    {/* <button onClick={'http://youtube.com'}>Ir para Pagina 1</button> */} {/* Javascript normal */}
    {retornarPagina()}
    </>
  )
}