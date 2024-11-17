import React from "react"

export default function Dados(props){
    return(
        <section>
            <p>carro: {props.potencia}</p>
            <p>potencia: {props.velocidade}</p>
            <p>velocidade: {props.carro}</p>
        </section>
    )
}