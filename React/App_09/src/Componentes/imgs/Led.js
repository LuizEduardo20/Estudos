// import { useState } from 'react'
import LedVerde from './led_verde.png'
import LedVermelho from './led_vermelho.jpg'

// export default function Led(){

//   const [Ligar, SetLigar] = useState(false)

//   return(
//     <>
//     <img style={{width:"100px"}} src={Ligar ? LedVerde : LedVermelho}/>
//     <button onClick={() => setLigar(!Ligar)}>{Ligar ? 'Desligar' : 'Ligar'}</button>
//     </>
//   )
// }

export default function Led(props){
  return(
    <>
    <img style={{width:"100px"}} src={props.Ligar ? LedVerde : LedVermelho}/>
    <button onClick={() => props.setLigar(!props.Ligar)}>
        {props.Ligar ? 'Desligar' : 'Ligar'}
    </button>
    </>
  )
}