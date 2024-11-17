import React from "react"

export default function Dados(props){
    let n1=10
    let n2=5

    return(
        <section>
            <p>carro: {props.carr0}</p>
            <p>potencia: {props.potencia}</p>
            <p>velocidade: {props.velocidade}</p>
            <p>{'A soma de ' + n1 + ' + ' + n2 + ' = ' + props.somar(n1, n2)}</p>
        </section>
    )
}