import Dado from "./Dados";
import React from "react";

export default function corpo(){
    const carro=()=>{
        return 'Bugatti'
    };
    const potencia = '1280Hp';
    const velocidade = '510Km/h';
    const soma=(v1, v2)=>{
        return v1+v2
    }

    return(
        <Dado
        carr0={carro}
        potencia={potencia}
        velocidade={velocidade}
        somar={soma}
        />
    )
}