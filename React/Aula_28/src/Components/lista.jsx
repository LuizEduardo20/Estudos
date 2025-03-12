import { useState, useEffect } from "react"

export default function lista(){

    const [Carros, setCarros] = useState([])

    useEffect(() => {
        fetch('https://83232386-d4e7-4cef-a89f-a3990393b88b-00-1tup6vokd5hvo.picard.replit.dev/').then((res) => res.json()).then((resultado) => {setCarros(resultado)})
    })

    return(
        <>
        <div>
            {Carros.map(
                Carros => <div key={Carros.id}>{Carros.id} - {Carros.marca} - {Carros.modelo}</div>
            )}
        </div>
        </>
    )
}