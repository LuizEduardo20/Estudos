import React from 'react'

export default function Relogio(){
    return(
        <p>
            {new Date().toLocaleTimeString()} {/* Retorna a hora*/}
        </p>
    )
}