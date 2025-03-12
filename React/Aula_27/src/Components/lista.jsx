import { useState, useEffect } from "react"
import axios from 'axios'

export default function lista(){

    const [Carros, setCarros] = useState([])

    useEffect(() => {
        axios.get('https://83232386-d4e7-4cef-a89f-a3990393b88b-00-1tup6vokd5hvo.picard.replit.dev/').then(res => {
            const dadosCarros = res.data
            setCarros(dadosCarros)
        })
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