import React from "react"
import Logo from "./img/logo192.png"

export default function Header(){
    return(
        <header>
            <h1>Logo React</h1>
            <img src={Logo} alt="Logo React"/>
        </header>
    )
}