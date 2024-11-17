import Dado from "./Dados"
import React from "react"

export default function corpo(){

    const carro = 'Bugatti'
    const potencia = '1280Hp'
    const velocidade = '510Km/h'

    return(
        <Dado
        carro={carro}
        potencia={potencia}
        velocidade={velocidade}
        />
    )
}