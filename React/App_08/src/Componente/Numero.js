import React from "react"

export default function Numero(props){
    return(
        <>
        <button onClick={() => {props.setNum(props.num + 1)}}>click</button>
        <p>Valor do State num em numero: {props.num}</p>  {/* num é o estado atual da função*/}
        </>
    )
}